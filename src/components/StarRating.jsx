import React from 'react';
import './StarRating.css';

const StarRating = ({ rating, reviewCount, showCount = true }) => {
    // Calculate filled, half, and empty stars
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className="star-rating">
            <div className="stars">
                {/* Full stars */}
                {[...Array(fullStars)].map((_, i) => (
                    <svg key={`full-${i}`} className="star star-full" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                ))}

                {/* Half star */}
                {hasHalfStar && (
                    <svg className="star star-half" viewBox="0 0 24 24">
                        <defs>
                            <linearGradient id="half">
                                <stop offset="50%" stopColor="currentColor" />
                                <stop offset="50%" stopColor="#ddd" stopOpacity="1" />
                            </linearGradient>
                        </defs>
                        <path fill="url(#half)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                )}

                {/* Empty stars */}
                {[...Array(emptyStars)].map((_, i) => (
                    <svg key={`empty-${i}`} className="star star-empty" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                ))}
            </div>

            {showCount && reviewCount > 0 && (
                <span className="review-count">{reviewCount.toLocaleString()}</span>
            )}
        </div>
    );
};

export default StarRating;
