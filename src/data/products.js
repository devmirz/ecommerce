const products = [
    {
        id: 1,
        name: "Aero X Wireless Headphones",
        price: 299.00,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2670&auto=format&fit=crop",
        description: "Experience premium sound quality with active noise cancellation and 30-hour battery life.",
        rating: 4.5,
        reviewCount: 3247,
        reviews: [
            { rating: 5, text: "Amazing sound quality! The noise cancellation is top-notch.", author: "Sarah M.", date: "2024-01-15" },
            { rating: 4, text: "Great headphones, but a bit pricey.", author: "Mike J.", date: "2024-01-10" },
            { rating: 5, text: "Best purchase I've made this year!", author: "Emily R.", date: "2024-01-05" }
        ]
    },
    {
        id: 2,
        name: "Classic Chronograph Watch",
        price: 189.50,
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=2576&auto=format&fit=crop",
        description: "A timeless piece featuring a genuine leather strap and sapphire crystal glass.",
        rating: 4.7,
        reviewCount: 1892,
        reviews: [
            { rating: 5, text: "Elegant and well-crafted. Receives compliments all the time.", author: "David L.", date: "2024-01-18" },
            { rating: 4, text: "Beautiful watch, leather strap is high quality.", author: "John P.", date: "2024-01-12" },
            { rating: 5, text: "Exactly as described, very happy with this purchase.", author: "Anna K.", date: "2024-01-08" }
        ]
    },
    {
        id: 3,
        name: "Ceramic Coffee Set",
        price: 85.00,
        category: "Home",
        image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=2670&auto=format&fit=crop",
        description: "Handcrafted ceramic set perfect for your morning brew. Minimalist and durable.",
        rating: 4.3,
        reviewCount: 856,
        reviews: [
            { rating: 4, text: "Love the minimalist design. Great for daily use.", author: "Rachel T.", date: "2024-01-20" },
            { rating: 5, text: "Beautiful set, feels premium.", author: "Tom W.", date: "2024-01-14" },
            { rating: 4, text: "Good quality, but shipping took a while.", author: "Lisa G.", date: "2024-01-09" }
        ]
    },
    {
        id: 4,
        name: "Leather Weekend Bag",
        price: 450.00,
        category: "Travel",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=2574&auto=format&fit=crop",
        description: "Ideally sized for short trips, made from full-grain leather that ages beautifully.",
        rating: 4.8,
        reviewCount: 2134,
        reviews: [
            { rating: 5, text: "This bag is incredible! Worth every penny.", author: "James H.", date: "2024-01-22" },
            { rating: 5, text: "The leather quality is outstanding. Highly recommend.", author: "Sophie B.", date: "2024-01-16" },
            { rating: 4, text: "Great bag, just wish it had more pockets.", author: "Chris D.", date: "2024-01-11" }
        ]
    },
    {
        id: 5,
        name: "Smart Home Speaker",
        price: 129.99,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?q=80&w=2670&auto=format&fit=crop",
        description: "Voice-controlled smart speaker with 360-degree sound and seamless connectivity.",
        rating: 4.4,
        reviewCount: 5621,
        reviews: [
            { rating: 5, text: "Sound quality is amazing for the price!", author: "Mark S.", date: "2024-01-21" },
            { rating: 4, text: "Works great with my smart home setup.", author: "Jennifer L.", date: "2024-01-13" },
            { rating: 4, text: "Good speaker, setup was easy.", author: "Kevin M.", date: "2024-01-07" }
        ]
    },
    {
        id: 6,
        name: "Designer Sunglasses",
        price: 155.00,
        category: "Fashion",
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=2680&auto=format&fit=crop",
        description: "UV protection meets high fashion. Durable frames with polarized lenses.",
        rating: 4.6,
        reviewCount: 1423,
        reviews: [
            { rating: 5, text: "Stylish and comfortable. Perfect fit!", author: "Nicole F.", date: "2024-01-19" },
            { rating: 4, text: "Great sunglasses, lenses are very clear.", author: "Brian C.", date: "2024-01-15" },
            { rating: 5, text: "Love these! Get compliments everywhere I go.", author: "Amanda R.", date: "2024-01-10" }
        ]
    },
    {
        id: 7,
        name: "Mechanical Keyboard",
        price: 110.00,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=2665&auto=format&fit=crop",
        description: "Tactile switches and customizable RGB lighting for the ultimate typing experience.",
        rating: 4.7,
        reviewCount: 4289,
        reviews: [
            { rating: 5, text: "Best keyboard I've ever owned. Typing feels amazing!", author: "Alex P.", date: "2024-01-23" },
            { rating: 5, text: "The RGB lighting is beautiful and keys are responsive.", author: "Ryan N.", date: "2024-01-17" },
            { rating: 4, text: "Great keyboard, a bit loud for office use.", author: "Daniel K.", date: "2024-01-12" }
        ]
    },
    {
        id: 8,
        name: "Minimalist Sneaker",
        price: 95.00,
        category: "Footwear",
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=2564&auto=format&fit=crop",
        description: "Breathable knit upper with a cushioned sole for all-day comfort.",
        rating: 4.2,
        reviewCount: 2876,
        reviews: [
            { rating: 4, text: "Very comfortable and stylish. True to size.", author: "Tyler J.", date: "2024-01-20" },
            { rating: 4, text: "Love the minimalist design. Goes with everything.", author: "Olivia S.", date: "2024-01-14" },
            { rating: 5, text: "Most comfortable sneakers I've worn!", author: "Ethan W.", date: "2024-01-09" }
        ]
    },
    {
        id: 9,
        name: "Stanley Quencher H2.0 FlowState",
        price: 45.00,
        category: "Kitchen",
        image: "https://images.unsplash.com/photo-1681284561001-f06b97960fc5?q=80&w=2500&auto=format&fit=crop",
        description: "The viral 40oz tumbler that keeps drinks cold for 48 hours. Double-wall vacuum insulation.",
        rating: 4.9,
        reviewCount: 15420,
        reviews: [
            { rating: 5, text: "The hype is real. Keeps my water ice cold all day!", author: "Sarah K.", date: "2024-03-15" },
            { rating: 5, text: "Fits perfectly in my cup holder. Love the color.", author: "Matt G.", date: "2024-03-10" }
        ]
    },
    {
        id: 10,
        name: "Mighty Patch Hydrocolloid Acne Patches",
        price: 12.99,
        category: "Beauty",
        image: "https://images.unsplash.com/photo-1616683693504-3aa76e33a207?q=80&w=2500&auto=format&fit=crop",
        description: "The award-winning acne patch that shrinks zits overnight. Medical-grade hydrocolloid.",
        rating: 4.8,
        reviewCount: 89450,
        reviews: [
            { rating: 5, text: "Life saver! Works literally overnight.", author: "Emma L.", date: "2024-02-28" },
            { rating: 4, text: "Effective and blends well with skin.", author: "Chris P.", date: "2024-02-20" }
        ]
    },
    {
        id: 11,
        name: "Amazon Fire TV Stick 4K Max",
        price: 59.99,
        category: "Smart Home",
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=2500&auto=format&fit=crop",
        description: "Stream over 1.5 million movies and TV episodes with Wi-Fi 6E support and high-end processing.",
        rating: 4.7,
        reviewCount: 45000,
        reviews: [
            { rating: 5, text: "So much faster than the older versions. Love the Wi-Fi 6 support.", author: "Joe B.", date: "2024-03-20" },
            { rating: 4, text: "Great integration with Alexa, very smooth interface.", author: "Anna S.", date: "2024-03-18" }
        ]
    },
    {
        id: 12,
        name: "La Roche-Posay Face Moisturizer",
        price: 21.00,
        category: "Beauty",
        image: "https://images.unsplash.com/photo-1556227702-d1e4e7b5c232?q=80&w=2500&auto=format&fit=crop",
        description: "Toleriane Double Repair UV Face Moisturizer with Ceramide and Niacinamide.",
        rating: 4.6,
        reviewCount: 32000,
        reviews: [
            { rating: 5, text: "Best moisturizer for sensitive skin. Doesn't feel greasy.", author: "Lisa M.", date: "2024-02-15" },
            { rating: 5, text: "Dermatologist recommended for a reason. Excellent product.", author: "David R.", date: "2024-02-10" }
        ]
    },
    {
        id: 13,
        name: "Apple AirTag (4-Pack)",
        price: 79.00,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?q=80&w=2500&auto=format&fit=crop",
        description: "Keep track of and find your items alongside friends and devices in the Find My app.",
        rating: 4.9,
        reviewCount: 125000,
        reviews: [
            { rating: 5, text: "Incredibly useful for travel. Precision finding is amazing.", author: "Kevin T.", date: "2024-03-12" },
            { rating: 5, text: "Saved me from losing my keys twice already!", author: "Rachel H.", date: "2024-03-05" }
        ]
    },
    {
        id: 14,
        name: "Ninja AF101 Air Fryer",
        price: 89.99,
        category: "Kitchen",
        image: "https://images.unsplash.com/photo-1594212699903-ec8a3ecc50f1?q=80&w=2500&auto=format&fit=crop",
        description: "Crisp and dehydrate with 4-quart capacity and a temperature range from 105 to 400 degrees.",
        rating: 4.8,
        reviewCount: 52000,
        reviews: [
            { rating: 5, text: "Game changer for healthy eating. So easy to clean!", author: "Tom D.", date: "2024-03-01" },
            { rating: 5, text: "Perfect size for two people. Cooks everything perfectly.", author: "Sophie W.", date: "2024-02-25" }
        ]
    },
    {
        id: 15,
        name: "TriggerPoint Foam Roller",
        price: 34.95,
        category: "Sports",
        image: "https://images.unsplash.com/photo-1591179064731-db3ef4447481?q=80&w=2500&auto=format&fit=crop",
        description: "Patented foam roller design offers a superior, multi-density exterior constructed over a rigid hollow core.",
        rating: 4.7,
        reviewCount: 18000,
        reviews: [
            { rating: 5, text: "Must have for post-workout recovery. Very durable.", author: "Chris E.", date: "2024-02-18" },
            { rating: 4, text: "Great for deep tissue massage at home.", author: "Laura M.", date: "2024-02-12" }
        ]
    },
    {
        id: 16,
        name: "Amazon Smart Plug",
        price: 24.99,
        category: "Smart Home",
        image: "https://images.unsplash.com/photo-1558227691-41ea78a1f631?q=80&w=2500&auto=format&fit=crop",
        description: "Alexa, turn on the light. Simple to set up and use—even for non-techies.",
        rating: 4.8,
        reviewCount: 610000,
        reviews: [
            { rating: 5, text: "Seamless setup. Works every time with Alexa.", author: "Brian K.", date: "2024-03-08" },
            { rating: 5, text: "Best smart plug on the market for the price.", author: "Amy G.", date: "2024-03-02" }
        ]
    },
    {
        id: 17,
        name: "Tile Mate Essentials Pack",
        price: 79.99,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1586074282154-db3ef4447481?q=80&w=2500&auto=format&fit=crop",
        description: "Water-resistant Bluetooth trackers for keys, wallets, and more. Find things fast.",
        rating: 4.6,
        reviewCount: 15000,
        reviews: [
            { rating: 4, text: "Reliable and easy to use. The app is great.", author: "John S.", date: "2024-02-10" },
            { rating: 5, text: "Highly recommend for anyone who loses things easily!", author: "Kate L.", date: "2024-02-05" }
        ]
    }
];

export default products;
