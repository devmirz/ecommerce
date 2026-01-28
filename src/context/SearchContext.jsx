import React, { createContext, useState, useContext } from 'react';

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilter, setActiveFilter] = useState('All');
    const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
    const [minRating, setMinRating] = useState(0);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    return (
        <SearchContext.Provider value={{
            searchQuery, setSearchQuery,
            activeFilter, setActiveFilter,
            priceRange, setPriceRange,
            minRating, setMinRating,
            isFilterOpen, setIsFilterOpen
        }}>
            {children}
        </SearchContext.Provider>
    );
};
