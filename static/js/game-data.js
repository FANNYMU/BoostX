const gameData = {
    'cod-mobile': {
        id: 'cod-mobile',
        name: 'Call of Duty Mobile',
        publisher: 'Activision',
        backgroundImage: 'Call_of_Duty_Mobile.jpg',
        price: 'IDR 8.000',
        description: 'Game FPS multiplayer dengan grafis berkualitas tinggi, mode permainan beragam, dan sistem Battle Pass yang menarik.',
        features: [
            'Mode Battle Royale',
            'Mode Multiplayer 5v5',
            'Sistem Ranking Kompetitif',
            'Battle Pass Musiman',
            'Turnamen Esports'
        ],
        requirements: {
            os: 'Android 5.0 / iOS 9.0 ke atas',
            ram: '2 GB RAM',
            storage: '1.5 GB ruang kosong'
        },
        topUpOptions: [
            { amount: '80 CP', price: 'IDR 13.000' },
            { amount: '320 CP', price: 'IDR 49.000' },
            { amount: '640 CP', price: 'IDR 99.000' },
            { amount: '800 CP', price: 'IDR 119.000' },
            { amount: '1280 CP', price: 'IDR 189.000' },
            { amount: '2000 CP', price: 'IDR 238.000' },
            { amount: '3200 CP', price: 'IDR 475.000' },
            { amount: '5000 CP', price: 'IDR 749.000' }
        ]
    },
    'arena-of-valor': {
        id: 'arena-of-valor',
        name: 'Arena of Valor',
        publisher: 'Tencent Games',
        backgroundImage: 'Arena_Of_Valor.jpg',
        price: 'IDR 3.000',
        description: 'MOBA 5v5 dengan hero-hero unik dan pertempuran tim yang strategis. Grafis HD dan gameplay yang halus.',
        features: [
            'Mode Classic 5v5',
            'Mode 3v3 dan 1v1',
            'Sistem Arcana',
            'Turnamen Regular',
            'Guild Wars'
        ],
        requirements: {
            os: 'Android 4.1 / iOS 9.0 ke atas',
            ram: '2 GB RAM',
            storage: '1 GB ruang kosong'
        },
        topUpOptions: [
            { amount: '100 Vouchers', price: 'IDR 15.000' },
            { amount: '300 Vouchers', price: 'IDR 45.000' },
            { amount: '500 Vouchers', price: 'IDR 75.000' },
            { amount: '750 Vouchers', price: 'IDR 112.500' },
            { amount: '1000 Vouchers', price: 'IDR 150.000' },
            { amount: '1200 Vouchers', price: 'IDR 180.000' },
            { amount: '2000 Vouchers', price: 'IDR 300.000' },
            { amount: '3000 Vouchers', price: 'IDR 450.000' }
        ]
    },
    'genshin-impact': {
        id: 'genshin-impact',
        name: 'Genshin Impact',
        publisher: 'miHoYo',
        backgroundImage: 'Genshin_Impact.jpg',
        price: 'IDR 16.000',
        description: 'Game RPG open world dengan grafis memukau dan sistem gacha. Jelajahi dunia Teyvat yang luas dengan berbagai karakter unik.',
        features: [
            'Open World Exploration',
            'Co-op Multiplayer',
            'Sistem Wish/Gacha',
            'Battle Pass',
            'Events Seasonal'
        ],
        requirements: {
            os: 'Android 7.0 / iOS 11.0 ke atas',
            ram: '3 GB RAM',
            storage: '8 GB ruang kosong'
        },
        topUpOptions: [
            { amount: '60 Genesis Crystals', price: 'IDR 16.000' },
            { amount: '300 Genesis Crystals', price: 'IDR 79.000' },
            { amount: '600 Genesis Crystals', price: 'IDR 159.000' },
            { amount: '980 Genesis Crystals', price: 'IDR 249.000' },
            { amount: '1480 Genesis Crystals', price: 'IDR 379.000' },
            { amount: '1980 Genesis Crystals', price: 'IDR 479.000' },
            { amount: '3280 Genesis Crystals', price: 'IDR 799.000' },
            { amount: '6480 Genesis Crystals', price: 'IDR 1.599.000' }
        ]
    },
    'honor-of-kings': {
        id: 'honor-of-kings',
        name: 'Honor of Kings',
        publisher: 'Tencent Games',
        backgroundImage: 'HOK.jpg',
        price: 'IDR 10.000',
        description: 'MOBA populer dengan grafis fantastis dan hero-hero yang terinspirasi dari sejarah dan mitologi Tiongkok.',
        features: [
            'Mode 5v5 Classic',
            'Mode Ranked',
            'Sistem Skin Eksklusif',
            'Turnamen Regular',
            'Cross-server Matches'
        ],
        requirements: {
            os: 'Android 5.0 / iOS 9.0 ke atas',
            ram: '2 GB RAM',
            storage: '3 GB ruang kosong'
        },
        topUpOptions: [
            { amount: '100 Vouchers', price: 'IDR 20.000' },
            { amount: '300 Vouchers', price: 'IDR 60.000' },
            { amount: '500 Vouchers', price: 'IDR 100.000' },
            { amount: '750 Vouchers', price: 'IDR 150.000' },
            { amount: '1000 Vouchers', price: 'IDR 200.000' },
            { amount: '1500 Vouchers', price: 'IDR 300.000' },
            { amount: '2000 Vouchers', price: 'IDR 400.000' },
            { amount: '3000 Vouchers', price: 'IDR 600.000' }
        ]
    },
    'clash-of-clans': {
        id: 'clash-of-clans',
        name: 'Clash of Clans',
        publisher: 'Supercell',
        backgroundImage: 'COC.jpg',
        price: 'IDR 15.000',
        description: 'Game strategi membangun desa dan berperang. Bentuk klan, latih pasukan, dan serang pemain lain untuk mendapatkan resources.',
        features: [
            'Base Building',
            'Clan Wars',
            'Seasonal Challenges',
            'Special Events',
            'Clan Games'
        ],
        requirements: {
            os: 'Android 4.4 / iOS 11.0 ke atas',
            ram: '1 GB RAM',
            storage: '500 MB ruang kosong'
        },
        topUpOptions: [
            { amount: '80 Gems', price: 'IDR 15.000' },
            { amount: '500 Gems', price: 'IDR 79.000' },
            { amount: '800 Gems', price: 'IDR 119.000' },
            { amount: '1200 Gems', price: 'IDR 159.000' },
            { amount: '2000 Gems', price: 'IDR 259.000' },
            { amount: '2500 Gems', price: 'IDR 309.000' },
            { amount: '4000 Gems', price: 'IDR 499.000' },
            { amount: '6000 Gems', price: 'IDR 749.000' }
        ]
    },
    'candy-crush': {
        id: 'candy-crush',
        name: 'Candy Crush Saga',
        publisher: 'King',
        backgroundImage: 'CC.jpg',
        price: 'IDR 5.000',
        description: 'Game puzzle match-3 yang menghibur dengan ribuan level yang menantang. Kombinasikan permen untuk menyelesaikan misi.',
        features: [
            'Ribuan Level',
            'Power-up Unik',
            'Event Mingguan',
            'Leaderboard',
            'Sistem Booster'
        ],
        requirements: {
            os: 'Android 4.1 / iOS 9.0 ke atas',
            ram: '1 GB RAM',
            storage: '200 MB ruang kosong'
        },
        topUpOptions: [
            { amount: '10 Gold Bars', price: 'IDR 15.000' },
            { amount: '50 Gold Bars', price: 'IDR 69.000' },
            { amount: '100 Gold Bars', price: 'IDR 129.000' },
            { amount: '150 Gold Bars', price: 'IDR 189.000' },
            { amount: '200 Gold Bars', price: 'IDR 249.000' },
            { amount: '250 Gold Bars', price: 'IDR 299.000' },
            { amount: '500 Gold Bars', price: 'IDR 599.000' },
            { amount: '1000 Gold Bars', price: 'IDR 1.199.000' }
        ]
    },
    'mobile-legends': {
        id: 'mobile-legends',
        name: 'Mobile Legends: Bang Bang',
        publisher: 'Moonton',
        backgroundImage: 'mobile_legends.jpg',
        price: 'IDR 1.500',
        description: 'Game MOBA 5v5 yang populer dengan pertempuran real-time yang seru. Pilih dari puluhan hero unik dengan skill khusus mereka.',
        features: [
            'Mode Classic 5v5',
            'Mode Ranked dengan 8 tier',
            'Mode Arcade yang beragam',
            'Sistem Guild dan Esports',
            'Event regular dengan hadiah menarik'
        ],
        requirements: {
            os: 'Android 4.1 / iOS 9.0 ke atas',
            ram: '2 GB RAM',
            storage: '500 MB ruang kosong'
        },
        topUpOptions: [
            { amount: '86 Diamonds', price: 'IDR 19.800' },
            { amount: '172 Diamonds', price: 'IDR 39.600' },
            { amount: '257 Diamonds', price: 'IDR 59.400' },
            { amount: '344 Diamonds', price: 'IDR 79.200' },
            { amount: '429 Diamonds', price: 'IDR 99.000' },
            { amount: '514 Diamonds', price: 'IDR 118.800' },
            { amount: '706 Diamonds', price: 'IDR 158.400' },
            { amount: '1412 Diamonds', price: 'IDR 316.800' }
        ]
    },
    'free-fire': {
        id: 'free-fire',
        name: 'Free Fire',
        publisher: 'Garena',
        backgroundImage: 'free_fire.jpg',
        price: 'IDR 1.000',
        description: 'Battle Royale game dengan 50 pemain yang bertahan hidup di pulau dengan pertempuran intense selama 10 menit.',
        features: [
            'Battle Royale 50 pemain',
            'Mode Clash Squad 4v4',
            'Karakter dengan skill unik',
            'Pet system',
            'Grafis ringan dan optimal'
        ],
        requirements: {
            os: 'Android 4.0.3 / iOS 8.0 ke atas',
            ram: '1 GB RAM',
            storage: '400 MB ruang kosong'
        },
        topUpOptions: [
            { amount: '100 Diamonds', price: 'IDR 15.000' },
            { amount: '310 Diamonds', price: 'IDR 45.000' },
            { amount: '520 Diamonds', price: 'IDR 75.000' },
            { amount: '1060 Diamonds', price: 'IDR 150.000' }
        ]
    },
    'pubg-mobile': {
        id: 'pubg-mobile',
        name: 'PUBG Mobile',
        publisher: 'Tencent Games',
        backgroundImage: 'PUBG_Mobile.jpg',
        price: 'IDR 2.500',
        description: 'Battle Royale game dengan grafis realistis, pertempuran 100 pemain dengan strategi dan skill yang menentukan.',
        features: [
            'Battle Royale 100 pemain',
            'Mode Team Deathmatch',
            'Grafis Ultra HD',
            'Sistem Royale Pass',
            'Turnamen Esports'
        ],
        requirements: {
            os: 'Android 5.1.1 / iOS 9.0 ke atas',
            ram: '2 GB RAM',
            storage: '2 GB ruang kosong'
        },
        topUpOptions: [
            { amount: '60 UC', price: 'IDR 15.000' },
            { amount: '180 UC', price: 'IDR 45.000' },
            { amount: '325 UC', price: 'IDR 89.000' },
            { amount: '660 UC', price: 'IDR 179.000' }
        ]
    },
    'dragon-nest': {
        id: 'dragon-nest',
        name: 'DragonNest:Silent Gods',
        publisher: 'Tencent',
        backgroundImage: 'DragonNest.jpg',
        price: 'IDR 20.500',
        description: 'MMORPG dengan sistem pertarungan non-targeting yang dinamis. Jelajahi dunia fantasi dan bertarung melawan naga legendaris.',
        features: [
            'Action Combat System',
            'Dungeon Raids',
            'PvP Arena',
            'Guild System',
            'Character Customization'
        ],
        requirements: {
            os: 'Android 5.0 / iOS 10.0 ke atas',
            ram: '3 GB RAM',
            storage: '2 GB ruang kosong'
        },
        topUpOptions: [
            { amount: '100 DN Points', price: 'IDR 20.500' },
            { amount: '300 DN Points', price: 'IDR 60.000' },
            { amount: '500 DN Points', price: 'IDR 100.000' },
            { amount: '1000 DN Points', price: 'IDR 200.000' },
            { amount: '2000 DN Points', price: 'IDR 400.000' },
            { amount: '3000 DN Points', price: 'IDR 600.000' }
        ]
    },
    'metal-slug': {
        id: 'metal-slug',
        name: 'Metal Slug: Awakening',
        publisher: 'VNGGAMES',
        backgroundImage: 'Metal_Slug.jpg',
        price: 'IDR 15.000',
        description: 'Game action run-and-gun klasik dengan grafis pixel art yang ikonik. Bertarung melawan pasukan musuh dengan senjata-senjata unik.',
        features: [
            'Classic Run-and-Gun Gameplay',
            'Co-op Multiplayer',
            'Multiple Characters',
            'Boss Battles',
            'Weapon Upgrades'
        ],
        requirements: {
            os: 'Android 4.4 / iOS 9.0 ke atas',
            ram: '2 GB RAM',
            storage: '1 GB ruang kosong'
        },
        topUpOptions: [
            { amount: '100 Tokens', price: 'IDR 15.000' },
            { amount: '300 Tokens', price: 'IDR 45.000' },
            { amount: '500 Tokens', price: 'IDR 75.000' },
            { amount: '1000 Tokens', price: 'IDR 150.000' },
            { amount: '2000 Tokens', price: 'IDR 300.000' }
        ]
    },
    'ragnarok-online': {
        id: 'ragnarok-online',
        name: 'Ragnarok Online',
        publisher: 'Gravity',
        backgroundImage: 'Ragnarok2.jpg',
        price: 'IDR 18.000',
        description: 'MMORPG klasik dengan sistem job class yang mendalam. Jelajahi dunia Rune-Midgard dan kembangkan karaktermu.',
        features: [
            'Multiple Job Classes',
            'Guild Wars',
            'Trading System',
            'PvP Arena',
            'World Boss Hunting'
        ],
        requirements: {
            os: 'Android 4.4 / iOS 9.0 ke atas',
            ram: '2 GB RAM',
            storage: '1.5 GB ruang kosong'
        },
        topUpOptions: [
            { amount: '100 Kafra Points', price: 'IDR 18.000' },
            { amount: '300 Kafra Points', price: 'IDR 54.000' },
            { amount: '500 Kafra Points', price: 'IDR 90.000' },
            { amount: '1000 Kafra Points', price: 'IDR 180.000' },
            { amount: '2000 Kafra Points', price: 'IDR 360.000' }
        ]
    },
    'point-blank': {
        id: 'point-blank',
        name: 'Point Blank',
        publisher: 'Zepetto',
        backgroundImage: 'Point_Blank2.jpg',
        price: 'IDR 10.000',
        description: 'FPS tactical shooter dengan berbagai mode pertempuran tim. Pilih dari beragam senjata dan peralatan tempur.',
        features: [
            'Team Deathmatch',
            'Bomb Mission',
            'Clan War',
            'Ranking System',
            'Weekly Tournaments'
        ],
        requirements: {
            os: 'Windows 7 ke atas',
            ram: '2 GB RAM',
            storage: '4 GB ruang kosong'
        },
        topUpOptions: [
            { amount: '1000 PB Cash', price: 'IDR 10.000' },
            { amount: '3000 PB Cash', price: 'IDR 30.000' },
            { amount: '5000 PB Cash', price: 'IDR 50.000' },
            { amount: '10000 PB Cash', price: 'IDR 100.000' },
            { amount: '20000 PB Cash', price: 'IDR 200.000' }
        ]
    },
    'lost-saga': {
        id: 'lost-saga',
        name: 'Lost Saga',
        publisher: 'Gemscool',
        backgroundImage: 'Lost_Saga2.jpg',
        price: 'IDR 12.000',
        description: 'Game fighting casual dengan sistem hero yang unik. Bertarung menggunakan berbagai karakter dari berbagai era.',
        features: [
            'Multiple Hero Classes',
            'PvP Battles',
            'Hero Fusion System',
            'Guild Battle',
            'Regular Events'
        ],
        requirements: {
            os: 'Windows XP ke atas',
            ram: '2 GB RAM',
            storage: '3 GB ruang kosong'
        },
        topUpOptions: [
            { amount: '100 G-Cash', price: 'IDR 12.000' },
            { amount: '300 G-Cash', price: 'IDR 36.000' },
            { amount: '500 G-Cash', price: 'IDR 60.000' },
            { amount: '1000 G-Cash', price: 'IDR 120.000' },
            { amount: '2000 G-Cash', price: 'IDR 240.000' }
        ]
    },
    'dreadout': {
        id: 'dreadout',
        name: 'Dreadout',
        publisher: 'Digital Happiness',
        backgroundImage: 'Dreadout.jpg',
        price: 'IDR 75.000',
        description: 'Game horor survival dengan nuansa Indonesia. Hadapi hantu-hantu lokal menggunakan kamera sebagai senjata.',
        features: [
            'Indonesian Horror',
            'Camera Combat',
            'Multiple Endings',
            'Ghost Encyclopedia',
            'Exploration'
        ],
        requirements: {
            os: 'Windows 7 ke atas',
            ram: '4 GB RAM',
            storage: '5 GB ruang kosong'
        },
        topUpOptions: [
            { amount: 'Base Game', price: 'IDR 75.000' },
            { amount: 'DLC Pack 1', price: 'IDR 45.000' },
            { amount: 'DLC Pack 2', price: 'IDR 45.000' },
            { amount: 'Season Pass', price: 'IDR 120.000' }
        ]
    },
    'pamali': {
        id: 'pamali',
        name: 'Pamali',
        publisher: 'StoryTale Studios',
        backgroundImage: 'Pamali.jpg',
        price: 'IDR 60.000',
        description: 'Game horor psikologis berbasis budaya Indonesia. Setiap pilihan mempengaruhi jalan cerita dan nasib karaktermu.',
        features: [
            'Multiple Stories',
            'Choice-Based Gameplay',
            'Indonesian Folklore',
            'Multiple Endings',
            'Atmospheric Horror'
        ],
        requirements: {
            os: 'Windows 7 ke atas',
            ram: '4 GB RAM',
            storage: '2 GB ruang kosong'
        },
        topUpOptions: [
            { amount: 'Base Game', price: 'IDR 60.000' },
            { amount: 'Story Pack 1', price: 'IDR 30.000' },
            { amount: 'Story Pack 2', price: 'IDR 30.000' },
            { amount: 'Complete Edition', price: 'IDR 100.000' }
        ]
    },
    'celestian-tales': {
        id: 'celestian-tales',
        name: 'Celestian Tales',
        publisher: 'Ekuator Games',
        backgroundImage: 'CT.jpg',
        price: 'IDR 50.000',
        description: 'RPG dengan cerita moral yang kompleks dan artwork hand-drawn yang memukau. Ikuti perjalanan enam karakter utama.',
        features: [
            'Rich Storyline',
            'Hand-Drawn Art',
            'Turn-Based Combat',
            'Multiple Perspectives',
            'Moral Choices'
        ],
        requirements: {
            os: 'Windows XP ke atas',
            ram: '2 GB RAM',
            storage: '2 GB ruang kosong'
        },
        topUpOptions: [
            { amount: 'Base Game', price: 'IDR 50.000' },
            { amount: 'Expansion Pack', price: 'IDR 25.000' },
            { amount: 'Soundtrack', price: 'IDR 15.000' },
            { amount: 'Art Book', price: 'IDR 20.000' }
        ]
    },
    'coffee-talk': {
        id: 'coffee-talk',
        name: 'Coffee Talk',
        publisher: 'Toge Productions',
        backgroundImage: 'Coffee_Talk.jpg',
        price: 'IDR 45.000',
        description: 'Visual novel dengan setting kedai kopi di Seattle. Dengarkan cerita pelanggan sambil membuat minuman untuk mereka.',
        features: [
            'Brewing System',
            'Character Stories',
            'Multiple Endings',
            'Relaxing Atmosphere',
            'Original Soundtrack'
        ],
        requirements: {
            os: 'Windows 7 ke atas',
            ram: '2 GB RAM',
            storage: '2 GB ruang kosong'
        },
        topUpOptions: [
            { amount: 'Base Game', price: 'IDR 45.000' },
            { amount: 'Soundtrack', price: 'IDR 20.000' },
            { amount: 'Art Collection', price: 'IDR 15.000' },
            { amount: 'Complete Bundle', price: 'IDR 70.000' }
        ]
    },
    'dota-2': {
        id: 'dota-2',
        name: 'Dota 2',
        publisher: 'Valve Corporation',
        backgroundImage: 'Dota_2.jpg',
        price: 'IDR 0',
        description: 'MOBA strategis dengan mode competitive dan multiplayer. Pertarungan tim 5v5 yang membutuhkan strategi dan skill.',
        features: [
            'Mode Competitive 5v5',
            'Agent dengan Kemampuan Unik',
            'Sistem Ranking',
            'Battle Pass Seasonal',
            'Turnamen Esports'
        ],
        requirements: {
            os: 'Windows 7/8/10 64-bit',
            ram: '4 GB RAM',
            storage: '20 GB ruang kosong' 
        },
        topUpOptions: [
            { amount: '300 VP', price: 'IDR 35.000' },
            { amount: '625 VP', price: 'IDR 70.000' },
            { amount: '1250 VP', price: 'IDR 140.000' },
            { amount: '2500 VP', price: 'IDR 280.000'},
            { amount: '5000 VP', price: 'IDR 560.000'} 
        ],
    },
    'valorant': {
        id: 'valorant',
        name: 'Valorant',
        publisher: 'Riot Games',
        backgroundImage: 'Valorant.jpg',
        price: 'IDR 0',
        description: 'FPS tactical shooter dengan karakter unik yang memiliki kemampuan khusus. Pertarungan tim 5v5 yang membutuhkan strategi dan skill.',
        features: [
            'Mode Competitive 5v5',
            'Agent dengan Kemampuan Unik',
            'Sistem Ranking',
            'Battle Pass Seasonal',
            'Turnamen Esports'
        ],
        requirements: {
            os: 'Windows 7/8/10 64-bit',
            ram: '4 GB RAM',
            storage: '20 GB ruang kosong'
        },
        topUpOptions: [
            { amount: '300 VP', price: 'IDR 35.000' },
            { amount: '625 VP', price: 'IDR 70.000' },
            { amount: '1125 VP', price: 'IDR 120.000' },
            { amount: '1950 VP', price: 'IDR 200.000' },
            { amount: '3400 VP', price: 'IDR 350.000' },
            { amount: '7000 VP', price: 'IDR 700.000' }
        ]
    },
    'league-of-legends': {
        id: 'league-of-legends',
        name: 'League of Legends',
        publisher: 'Riot Games',
        backgroundImage: 'League_of_Legends.jpg',
        price: 'IDR 0',
        description: 'MOBA 5v5 dengan lebih dari 150 champion. Pertarungan strategis tim dengan berbagai mode permainan yang menantang.',
        features: [
            'Mode Classic 5v5',
            'ARAM Mode',
            'Sistem Ranking',
            'Event Seasonal',
            'Turnamen Esports'
        ],
        requirements: {
            os: 'Windows 7/8/10',
            ram: '4 GB RAM',
            storage: '16 GB ruang kosong'
        },
        topUpOptions: [
            { amount: '420 RP', price: 'IDR 50.000' },
            { amount: '700 RP', price: 'IDR 80.000' },
            { amount: '1375 RP', price: 'IDR 150.000' },
            { amount: '2400 RP', price: 'IDR 250.000' },
            { amount: '4000 RP', price: 'IDR 400.000' },
            { amount: '8150 RP', price: 'IDR 800.000' }
        ]
    },
    'overwatch2': {
        id: 'overwatch2',
        name: 'Overwatch 2',
        publisher: 'Blizzard Entertainment',
        backgroundImage: 'Overwatch2.jpg',
        price: 'IDR 0',
        description: 'Hero shooter dengan pertempuran tim yang dinamis. Pilih dari berbagai hero dengan peran dan kemampuan unik.',
        features: [
            'PvP 5v5',
            'PvE Story Missions',
            'Seasonal Events',
            'Battle Pass System',
            'Cross-Platform Play'
        ],
        requirements: {
            os: 'Windows 10 64-bit',
            ram: '6 GB RAM',
            storage: '50 GB ruang kosong'
        },
        topUpOptions: [
            { amount: '500 OW Coins', price: 'IDR 50.000' },
            { amount: '1000 OW Coins', price: 'IDR 100.000' },
            { amount: '2000 OW Coins', price: 'IDR 200.000' },
            { amount: '5000 OW Coins', price: 'IDR 500.000' }
        ]
    },
    'overwatch': {
        id: 'overwatch',
        name: 'Overwatch',
        publisher: 'Blizzard Entertainment',
        backgroundImage: 'Overwatch.jpg',
        price: 'IDR 150.000',
        description: 'Hero shooter dengan pertempuran tim 6v6 yang dinamis. Pilih dari berbagai hero dengan peran dan kemampuan unik.',
        features: [
            'PvP 6v6',
            'Seasonal Events',
            'Loot Box System',
            'Competitive Play',
            'Custom Game Modes'
        ],
        requirements: {
            os: 'Windows 7/8/10 64-bit',
            ram: '4 GB RAM',
            storage: '30 GB ruang kosong'
        },
        topUpOptions: [
            { amount: '50 Loot Boxes', price: 'IDR 150.000' },
            { amount: '100 Loot Boxes', price: 'IDR 280.000' },
            { amount: '200 Loot Boxes', price: 'IDR 500.000' },
            { amount: 'Legendary Edition', price: 'IDR 350.000' }
        ]
    },
    'dota2': {
        id: 'dota2',
        name: 'Dota 2',
        publisher: 'Valve Corporation',
        backgroundImage: 'Dota2.jpg',
        price: 'IDR 0',
        description: 'MOBA kompleks dengan lebih dari 100 hero. Pertarungan strategis 5v5 dengan mekanik gameplay yang mendalam.',
        features: [
            'Mode Classic 5v5',
            'Ranked Matchmaking',
            'Custom Games',
            'Battle Pass TI',
            'Pro Circuit Tournaments'
        ],
        requirements: {
            os: 'Windows 7 atau lebih tinggi',
            ram: '4 GB RAM',
            storage: '15 GB ruang kosong'
        },
        topUpOptions: [
            { amount: '120 Points', price: 'IDR 16.000' },
            { amount: '480 Points', price: 'IDR 65.000' },
            { amount: '1200 Points', price: 'IDR 160.000' },
            { amount: '2400 Points', price: 'IDR 320.000' },
            { amount: '6000 Points', price: 'IDR 800.000' }
        ]
    },
    'apex-legends': {
        id: 'apex-legends',
        name: 'Apex Legends',
        publisher: 'Electronic Arts',
        backgroundImage: 'Apex_Legends.jpg',
        price: 'IDR 0',
        description: 'Battle Royale hero shooter dengan gameplay tim yang cepat. Pilih legend dengan kemampuan unik dan bertahan hidup.',
        features: [
            'Battle Royale',
            'Arena Mode 3v3',
            'Ranked Leagues',
            'Battle Pass System',
            'Cross-Platform Play'
        ],
        requirements: {
            os: 'Windows 7/8/10 64-bit',
            ram: '6 GB RAM',
            storage: '56 GB ruang kosong'
        },
        topUpOptions: [
            { amount: '1000 Apex Coins', price: 'IDR 100.000' },
            { amount: '2000 Apex Coins', price: 'IDR 200.000' },
            { amount: '4000 Apex Coins', price: 'IDR 400.000' },
            { amount: '6700 Apex Coins', price: 'IDR 670.000' },
            { amount: '11500 Apex Coins', price: 'IDR 1.150.000' }
        ]
    },
    'rules-of-survival': {
        id: 'rules-of-survival',
        name: 'Rules of Survival',
        publisher: 'NetEase Games',
        backgroundImage: 'ROS.jpg',
        price: 'IDR 0',
        description: 'Battle Royale game dengan 120 pemain dalam satu map. Bertahan hidup dengan mencari senjata dan peralatan.',
        features: [
            'Battle Royale 120 Players',
            'Squad/Duo Mode',
            'Multiple Maps',
            'Vehicle System',
            'Customization Options'
        ],
        requirements: {
            os: 'Android 4.0 / iOS 9.0 ke atas',
            ram: '2 GB RAM',
            storage: '3 GB ruang kosong'
        },
        topUpOptions: [
            { amount: '100 Diamonds', price: 'IDR 15.000' },
            { amount: '300 Diamonds', price: 'IDR 45.000' },
            { amount: '500 Diamonds', price: 'IDR 75.000' },
            { amount: '1000 Diamonds', price: 'IDR 150.000' },
            { amount: '2000 Diamonds', price: 'IDR 300.000' }
        ]
    },
    'z1-battle-royale': {
        id: 'z1-battle-royale',
        name: 'Z1 Battle Royale',
        publisher: 'Daybreak Game Company',
        backgroundImage: 'Z1BR.jpg',
        price: 'IDR 0',
        description: 'Battle Royale game dengan fokus pada pertempuran intens dan mekanik menembak yang realistis.',
        features: [
            'Battle Royale Mode',
            'Solo/Duo/Squad',
            'Ranking System',
            'Vehicle Combat',
            'Crafting System'
        ],
        requirements: {
            os: 'Windows 7 64-bit',
            ram: '6 GB RAM',
            storage: '12 GB ruang kosong'
        },
        topUpOptions: [
            { amount: '500 Crowns', price: 'IDR 50.000' },
            { amount: '1100 Crowns', price: 'IDR 100.000' },
            { amount: '2300 Crowns', price: 'IDR 200.000' },
            { amount: '5000 Crowns', price: 'IDR 450.000' },
            { amount: '12000 Crowns', price: 'IDR 1.000.000' }
        ]
    },
    'fortnite': {
        id: 'fortnite',
        name: 'Fortnite',
        publisher: 'Epic Games',
        backgroundImage: 'Fortnite2.jpg',
        price: 'IDR 15.000',
        description: 'Battle Royale game dengan elemen membangun yang unik. Bertahan hidup, bangun struktur, dan kalahkan lawan untuk menjadi yang terakhir bertahan.',
        features: [
            'Battle Royale 100 pemain',
            'Creative Mode',
            'Save the World PvE',
            'Cross-Platform Play',
            'Season Pass'
        ],
        requirements: {
            os: 'Windows 7/8/10 64-bit',
            ram: '4 GB RAM',
            storage: '20 GB ruang kosong'
        },
        topUpOptions: [
            { amount: '1000 V-Bucks', price: 'IDR 120.000' },
            { amount: '2800 V-Bucks', price: 'IDR 320.000' },
            { amount: '5000 V-Bucks', price: 'IDR 550.000' },
            { amount: '13500 V-Bucks', price: 'IDR 1.350.000' }
        ]
    },
    'world-of-warcraft': {
        id: 'world-of-warcraft',
        name: 'World of Warcraft',
        publisher: 'Blizzard Entertainment',
        backgroundImage: 'WOF.jpg',
        price: 'IDR 200.000',
        description: 'MMORPG legendaris dengan dunia fantasi yang luas. Jelajahi Azeroth, kembangkan karakter, dan bertarung melawan pemain lain atau monster.',
        features: [
            'Open World Exploration',
            'PvE Dungeons & Raids',
            'PvP Battlegrounds & Arenas',
            'Character Progression',
            'Seasonal Content Updates'
        ],
        requirements: {
            os: 'Windows 7/8/10 64-bit',
            ram: '8 GB RAM',
            storage: '100 GB ruang kosong'
        },
        topUpOptions: [
            { amount: '1 Month Subscription', price: 'IDR 200.000' },
            { amount: '3 Month Subscription', price: 'IDR 550.000' },
            { amount: '6 Month Subscription', price: 'IDR 1.000.000' },
            { amount: '500 WoW Tokens', price: 'IDR 350.000' },
            { amount: '1000 WoW Tokens', price: 'IDR 650.000' },
            { amount: '2000 WoW Tokens', price: 'IDR 1.200.000' }
        ]
    }
};

export default gameData;