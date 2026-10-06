export default {
  nav: {
    home: 'Home',
    philosophy: 'Philosophy',
    ecosystem: 'Ecosystem',
    technology: 'Technology',
    enterprise: 'Enterprise',
  },
  hero: {
    tagline: 'Innovation Hub',
    slogan: 'Where Technology Meets Ambition',
    description: 'We build smart digital solutions that empower businesses to scale and thrive in the modern digital landscape.',
    cta: 'Discover Our Smart Solutions',
  },
  philosophy: {
    title: 'Our Philosophy',
    subtitle: 'We don\'t just write code — we engineer ecosystems.',
    items: {
      ai: {
        title: 'AI-Powered',
        description: 'Integrating artificial intelligence at the core of every solution we build.',
      },
      grpc: {
        title: 'gRPC & Real-time',
        description: 'High-performance communication protocols for seamless real-time experiences.',
      },
      multiTenancy: {
        title: 'Multi-Tenancy',
        description: 'Scalable architecture where each tenant operates in complete isolation.',
      },
      innovation: {
        title: 'Innovation First',
        description: 'Every line of code is an opportunity to push boundaries and reimagine what\'s possible.',
      },
    },
  },
  ecosystem: {
    title: 'Our Ecosystem',
    subtitle: 'Haritna Technologies is the umbrella — our products are the innovation.',
    haritna: {
      title: 'Haritna Technologies',
      description: 'The innovation hub that incubates, develops, and launches smart digital products for the Arab world and beyond.',
    },
    dukkan: {
      title: 'Dukkan',
      badge: 'Flagship Product',
      description: 'A platform for merchants and service professionals: online store, in-shop POS, orders, and reports in one place. Merchants sell products, bookable services, custom orders, auctions, used items, and bookable spaces, and hand over orders themselves or through their team, while buyers order and follow each order\'s status.',
      cta: 'Explore Dukkan',
      portals: {
        company: 'Company Portal',
        companyDesc: 'Full business management with products, orders, branches, and analytics.',
        staff: 'Staff Portal',
        staffDesc: 'Team management, role-based access, and operational tools.',
        driver: 'Driver Portal',
        driverDesc: 'Delivery management with real-time tracking and route optimization.',
        shop: 'Shop Portal',
        shopDesc: 'Customer-facing storefront with seamless shopping experience.',
      },
    },
  },
  tech: {
    title: 'Technical Excellence',
    subtitle: 'Built with the technologies that define tomorrow.',
    items: {
      cleanCode: {
        title: 'Clean Architecture',
        description: 'Modular monolith design with clear boundaries, repository pattern, and service layers.',
      },
      apiFirst: {
        title: 'API-First Design',
        description: '224+ RESTful endpoints with comprehensive validation and typed resources.',
      },
      performance: {
        title: 'High Performance',
        description: 'Optimized queries, smart caching, and efficient database-per-tenant isolation.',
      },
      ai: {
        title: 'AI Integration',
        description: 'Smart recommendations, automated workflows, and intelligent data processing.',
      },
    },
  },
  enterprise: {
    title: 'Enterprise Ready',
    subtitle: 'Built for scale. Designed for trust.',
    items: {
      isolation: {
        title: 'Data Isolation',
        description: 'Complete database-per-tenant isolation ensures your data never mixes with others.',
      },
      scalability: {
        title: 'Infinite Scalability',
        description: 'Architecture designed to grow from startup to enterprise without rewrites.',
      },
      branding: {
        title: 'Custom Branding',
        description: 'Every tenant gets their own identity — logos, colors, landing pages, and more.',
      },
      security: {
        title: 'Security First',
        description: 'Multi-guard authentication, role-based access control, and encrypted communications.',
      },
    },
  },
  footer: {
    rights: '© {year} Haritna Technologies. All rights reserved.',
    tagline: 'Innovating the future, one product at a time.',
  },
  theme: {
    dark: 'Dark Mode',
    light: 'Light Mode',
  },
  language: {
    ar: 'العربية',
    en: 'English',
  },
  guide: {
    title: 'How to use Dukkan',
    subtitle:
      'A complete guide to every part of the platform — from creating your account to managing orders and deliveries.',
    toc_register: 'Create Account',
    toc_company: 'Company Setup',
    toc_branches: 'Branches',
    toc_categories: 'Categories',
    toc_products: 'Products',
    toc_shop: 'Shop & Cart',
    toc_orders: 'Orders',
    toc_company_mgmt: 'Company Management',
    toc_social: 'Social',
    toc_staff: 'Staff Portal',
    toc_delivery: 'Delivery Portal',
    portal_public: 'Public',
    portal_customer: 'Customer Portal',
    portal_staff: 'Staff Portal',
    portal_delivery: 'Delivery Portal',
    portal_shop: 'Shop',
    good_to_know: 'Good to know',
    get_started: 'Get Started',
    by_haretna: 'Guide by Haretna',
    register_title: 'Create your account',
    register_desc:
      'You can sign up as a customer (to create a store and sell) or as a delivery driver. It takes about a minute.',
    register_step1: 'Open the sign-up page',
    register_step1_desc:
      "Go to /register. At the top you'll see two tabs — Customer and Delivery. Pick the one that fits you.",
    register_step2: 'Fill in your details',
    register_field_name: 'Your real name. Other users and companies will see this.',
    register_field_phone:
      'Mobile number with country code (+966 by default). Used for contact and delivery.',
    register_field_email: "Your login. Make sure you can access it — you'll verify it next.",
    register_field_password:
      'At least one uppercase, one lowercase, and one number (e.g. MyPass1).',
    register_step3: 'Verify with OTP',
    register_step3_desc:
      "Tap 'Send OTP' next to the email field. A 6-digit code will arrive in your inbox. Enter it in the OTP field and tap 'Sign Up'.",
    register_tip:
      "The code expires after 5 minutes. Check spam if it doesn't arrive, or request a new one after the cooldown.",
    company_title: 'Create your company',
    company_desc:
      'After signing in, create your company so you can start adding products and receiving orders.',
    company_step1: 'Go to My Companies',
    company_step1_desc:
      "From the sidebar, open 'My Companies'. If you don't have one yet, tap the create button.",
    company_step2: 'Fill in company details',
    company_field_name:
      "Supports Arabic and English. Tap 'Add Language' for a second language. Shows in the shop and search.",
    company_field_desc: 'What your company does. Also bilingual.',
    company_field_phone: 'Company contact number. Visible on your public page.',
    company_field_logo: 'Square image. Shows in the shop header and product cards.',
    company_field_cover: "Wide banner at the top of your company's public page.",
    company_step3: 'Your company dashboard',
    company_step3_desc:
      "After creating, you'll land on the company dashboard. From here you can manage branches, products, categories, orders, members, and settings.",
    branches_title: 'Branches',
    branches_desc:
      'Each company needs at least one branch. Branches represent your physical locations — stock and delivery distance are calculated per branch.',
    branches_step1: 'Branches list',
    branches_step1_desc: "From your company dashboard, go to 'Branches' to see all your branches.",
    branches_step2: 'Create a branch',
    branches_field_name: "e.g. 'Main Branch' or 'Riyadh - Al Olaya'.",
    branches_field_phone: 'Branch-specific contact number.',
    branches_field_address: 'The full street address.',
    branches_field_map:
      'Tap the map to drop a pin. This is used to calculate delivery distance and fees for orders.',
    categories_title: 'Categories',
    categories_desc:
      'Categories help customers find products. You can create your own company categories, and there are also global categories available to all companies.',
    categories_step1: 'View categories',
    categories_step2: 'Create a category',
    categories_field_name:
      'Bilingual (Arabic + English). This is what customers see when filtering.',
    categories_field_parent:
      'Optional. Nest under another category to create a tree (e.g. Food > Bakery > Cakes).',
    categories_field_active: 'Toggle on to make it visible in the shop.',
    products_title: 'Add your products',
    products_desc:
      'Each product has a name, description, pricing tiers, stock settings, images, and categories. You can start with just a name and price, then fill in the rest later.',
    products_step1: 'Basic information',
    products_field_name:
      "Bilingual. Tap 'Add Language' for the second one. This is the title in the shop.",
    products_field_desc: 'What the product is, ingredients, materials, etc. Also bilingual.',
    products_field_sku: 'Optional internal tracking code (e.g. CAKE-001).',
    products_field_shipping: 'Toggle on if delivery fee should be waived for this product.',
    products_field_status: "'Draft' = hidden. 'Active' = visible in shop and purchasable.",
    products_step2: 'Stock settings',
    products_stock_unlimited: 'Always available. Good for digital or made-to-order items.',
    products_stock_limited:
      "Set quantity per branch. Shows 'Sold Out' when stock reaches zero. Tap 'Add Branch' and set the quantity for each.",
    products_step3: 'Pricing tiers',
    products_step3_desc: "Tap 'Add Price' to create pricing. You can have multiple tiers:",
    products_price_name: "Optional label like 'Regular' or 'Wholesale' (bilingual).",
    products_price_amount: 'Amount in your currency.',
    products_price_discount: 'Percentage or fixed amount off. Optional.',
    products_price_qty: 'e.g. set min=10 for a wholesale tier.',
    products_price_currency: "Defaults to your company's currency.",
    products_step4: 'Images, categories, and SEO',
    products_field_thumb: 'Main image. Shows in product cards and search.',
    products_field_gallery: 'Up to 10 extra images. Show on the product detail page.',
    products_field_cats: 'Tap category badges to assign. Customers filter by these in the shop.',
    products_field_seo: 'Optional meta title, description, and keywords for search engines.',
    products_tip:
      "Save as draft first, then activate after adding all details. Nothing shows in the shop until status is 'Active'.",
    shop_title: 'Browse, cart, and checkout',
    shop_desc:
      'The shop is the public storefront. Customers browse products, add to cart, and place orders with delivery.',
    shop_step1: 'Browse products',
    shop_step1_desc:
      'Open /shop to see all products. Use search, category filters, or sort by newest/price.',
    shop_step2: 'Add to cart',
    shop_step2_desc:
      "Tap a product to see details and prices. Pick a price tier, set quantity, and tap 'Add to Cart'.",
    shop_step3: 'Checkout',
    shop_step3_desc: "At checkout you'll need:",
    shop_field_address: 'Your street address.',
    shop_field_map: "Tap the map or use 'Get Location'. Determines delivery distance and cost.",
    shop_field_vehicle: 'Motorcycle, car, etc. Each has different price and time.',
    shop_field_notes: 'Optional instructions for the driver or store.',
    orders_title: 'Orders and tracking',
    orders_desc: "Track orders from placement to delivery. You'll get notifications at each stage.",
    orders_step1: 'Your orders',
    orders_step1_desc: "Open 'My Orders' to see all orders with status, date, and total.",
    orders_step2: 'Order stages',
    orders_status_pending: 'Just placed, waiting for the store.',
    orders_status_confirmed: 'Store accepted and will prepare it.',
    orders_status_processing: 'Being prepared.',
    orders_status_ready: 'Packed, waiting for driver pickup.',
    orders_status_delivering: 'Driver is on the way. Track on map.',
    orders_status_delivered: 'Done. You can leave reviews.',
    orders_step3: 'As a company: manage incoming orders',
    orders_step3_desc:
      "From your company dashboard, go to 'Orders'. You can confirm, process, mark ready, assign delivery, or cancel orders.",
    mgmt_title: 'Company management',
    mgmt_desc:
      'Beyond products and orders, you can manage team members, company settings, and your public page.',
    mgmt_step1: 'Team members',
    mgmt_step1_desc:
      'Invite people to help manage your company. Each member gets a role with specific permissions (view products, manage orders, etc.).',
    mgmt_step2: 'Company settings',
    mgmt_step2_desc: 'Update your company name, description, contact info, social links, and more.',
    mgmt_step3: 'Your profile',
    mgmt_step3_desc: 'Update your personal name, email, phone, and avatar from the profile page.',
    social_title: 'Social features',
    social_desc:
      'Follow companies, save products to your wishlist, react to products, and leave reviews after delivery.',
    social_step1: 'Wishlist',
    social_step1_desc:
      "Save products you're interested in. You can organize them into custom categories.",
    social_step2: 'Following',
    social_step2_desc:
      'Follow companies or other users to stay updated on their products and activity.',
    social_step3: 'Reactions and reviews',
    social_step3_desc:
      'React to products with like, love, or other reactions. After a delivered order, you can leave a 1-5 star review with a comment for the product, company, or delivery driver.',
    staff_title: 'Staff portal (platform management)',
    staff_desc:
      "The staff portal is for platform administrators. They manage all orders across all companies, delivery personnel, pricing rules, roles, and the app's landing page.",
    staff_step1: 'Dashboard',
    staff_step1_desc:
      'Overview of platform metrics — total orders, revenue, active companies, delivery stats.',
    staff_step2: 'Team and roles',
    staff_step2_desc:
      'Invite staff members by email and assign roles. Each role has specific permissions. Only the owner can create or edit roles.',
    staff_step3: 'Orders management',
    staff_step3_desc:
      'See all orders across all companies. Confirm, assign delivery drivers, track progress, and view order statistics.',
    staff_step4: 'Delivery management',
    staff_step4_desc:
      'Register delivery drivers, manage their vehicles, activate/deactivate them, track their location in real-time, and set delivery pricing rules per vehicle type.',
    staff_step5: 'Page builder',
    staff_step5_desc:
      "Design the app's landing page using 22 section types: hero banner, features grid, testimonials, pricing plans, product showcase, category grid, and more. Deploy, rollback, and manage versions.",
    delivery_title: 'Delivery portal',
    delivery_desc:
      'For delivery drivers. Accept orders, track your deliveries, manage vehicles, and see your earnings.',
    delivery_step1: 'Home and available orders',
    delivery_step1_desc:
      "Your home page shows quick stats and shortcuts. 'Available Orders' shows pending deliveries near you that you can accept.",
    delivery_step2: 'Order actions',
    delivery_step2_desc: 'For each order you can:',
    delivery_action_accept: 'Take this delivery.',
    delivery_action_reject: 'Pass on this one.',
    delivery_action_pickup: 'Confirm you picked up the order from the store.',
    delivery_action_deliver: 'Mark as delivered to the customer.',
    delivery_action_proof: 'Take a photo as proof of delivery.',
    delivery_step3: 'Statistics and history',
    delivery_step3_desc:
      'Track your earnings, completed deliveries, and performance metrics. View your full order history with filters by date and status.',
    landing_title: 'Landing Page',
    landing_desc:
      'The first thing visitors see. Customizable through the Page Builder with hero banners, feature grids, testimonials, and more.',
    product_detail_title: 'Product Details Page',
    product_detail_desc:
      'Customers see full product info — images, descriptions, prices, reviews, and an Add to Cart button.',
    company_public_title: 'Company Public Page',
    company_public_desc:
      'Each company has a public storefront page showing their logo, description, products, and categories. Customizable with the Page Builder.',
    order_detail_title: 'Order Details',
    order_detail_desc:
      'Full order information — items, quantities, prices, delivery address, status timeline, and tracking map.',
    category_tree_title: 'Category Tree View',
    category_tree_desc:
      'See your categories in a hierarchical tree. Drag to reorder, expand/collapse branches.',
    notifications_title: 'Notifications',
    notifications_desc:
      'Get notified about new orders, status changes, delivery updates, and team activity. Available in all portals.',
    chat_title: 'Chat & Messaging',
    chat_desc:
      'Communicate directly with customers, companies, or delivery drivers. Supports text messages and file attachments.',
    reviews_title: 'Reviews & Ratings',
    reviews_desc:
      'After delivery, customers can rate products, companies, and drivers from 1-5 stars with an optional comment. Ratings show on public profiles.',
    company_edit_title: 'Edit Company Profile',
    company_edit_desc:
      'Update your company name, description, phone, social links, and media anytime from the company detail page.',
    staff_roles_title: 'Roles & Permissions',
    staff_roles_desc:
      'Create custom roles with granular permissions. Control who can view orders, manage products, assign deliveries, edit roles, and more.',
    staff_order_detail_title: 'Order Management Detail',
    staff_order_detail_desc:
      'Staff can view full order details, change status, assign or reassign delivery drivers, add notes, upload documentation, and view the activity log.',
    staff_delivery_detail_title: 'Delivery Driver Profile',
    staff_delivery_detail_desc:
      'View driver details, assigned orders, vehicles, performance stats, and real-time location on the map.',
    delivery_current_title: 'Current Deliveries',
    delivery_current_desc:
      "Orders you've accepted and are currently delivering. Shows pickup location, customer address, and navigation.",
    delivery_history_title: 'Delivery History',
    delivery_history_desc:
      'All your completed, cancelled, and rejected deliveries with dates, amounts, and status.',
    page_builder_sections:
      '22 section types available: Hero Banner, Features Grid, Call to Action, Testimonials, Pricing Plans, Stats Counter, Text Block, Image Gallery, Product Showcase, Category Grid, Special Offers, Brands Slider.',
    page_builder_versioning:
      'Every deploy creates a version snapshot. You can rollback to any previous version or restore a draft.',
    pricing_rules_title: 'Delivery Pricing Rules',
    pricing_rules_desc:
      'Set base fare, per-km rate, minimum/maximum fare, and free kilometers for each vehicle type. Rules determine delivery cost at checkout.',
    vehicles_title: 'Vehicle Management',
    vehicles_desc:
      'Drivers can register their vehicles — type, registration number, capacity, color. One vehicle is marked as primary for order assignments.',
  },
  wt: {
    hero: {
      badge: 'A {n}-step tour',
      title1: 'Run your whole business on ',
      title2: ', from first customer to growth',
      desc: 'For sellers: one app you start for free, with an online store, an in-store checkout, bookings, and offers that run themselves. For buyers: worry-free shopping, with your rights looked after until your order arrives. It’s all in this tour.',
    },
    why: {
      label: 'Why Dukkan',
      title: 'Everything you need in one place',
      desc: 'We stand by the people who work with us: we save them money and apps, we care about the details, and we show their work at its best.',
      free: {
        title: 'Start for free',
        desc: 'Open your shop and list your products for free. The commission is on orders that are delivered and kept, so you pay when you earn.',
      },
      one_app: {
        title: 'One app instead of many',
        desc: 'An online store, an in-store checkout, bookings, your own page, coupons, automatic follow-ups, and support. All in one account, one app doing the work of many.',
      },
      details: {
        title: 'We care about the details',
        desc: 'Stock for each branch, a QR code for every space you rent out, and late orders that stand out right away. All built in Arabic from day one.',
      },
      help: {
        title: 'Here when you need us',
        desc: 'Support tickets for sellers and buyers, with every reply in one place. Every catch or idea that makes Dukkan better earns you a reward.',
      },
      share: {
        title: 'We handle the design',
        desc: 'Every product and every page gets a ready-made share card, for free. Ready in a second, and it looks great on WhatsApp, Facebook, X, and Telegram.',
      },
    },
    scenario: 'The story',
    stats: {
      flows: 'Steps in the tour',
      types: 'Ways to sell',
      bilingual: 'Arabic & English',
      platforms: 'Screens',
    },
    chapters: {
      start: { title: 'Start', desc: 'Your account, your shop, and your team, ready in minutes.' },
      show: { title: 'Get found', desc: 'A page with the seller’s name, and a marketplace where buyers find what they want.' },
      sell: { title: 'Sell', desc: 'Online, in store, by booking, or made to order. And buyers feel safe at every step.' },
      grow: { title: 'Grow', desc: 'Your numbers in front of you, offers ready to go, and follow-ups that run themselves.' },
    },
    flow: {
      register: {
        nav: 'Sign up',
        label: 'First step',
        title: 'Open your account in a minute',
        desc: 'Your email and a code, or one tap with Google or Facebook.',
        scenario: 'Sara runs a clothing brand called Elegance. She wants to sell online and in store from one place, so she signs up on Dukkan.',
        s1: {
          tag: 'Sign up',
          title: 'One account for everything',
          desc: 'Your name, phone, and email, plus a code to confirm. That’s it, you’re in.',
          b1: 'The same account runs your shop and buys from other shops',
          b2: 'Sign up with Google or Facebook in one tap',
        },
        s2: {
          tag: 'Sign in',
          title: 'Sign in from anywhere',
          desc: 'Phone or computer, Arabic or English, light or dark. Whatever suits you.',
        },
      },
      company: {
        nav: 'Shop & team',
        label: 'Set up your shop',
        title: 'Your shop, branches, and team',
        desc: 'Create your shop, put your branches on the map, and invite your team.',
        scenario: 'Sara creates "Elegance Fashion", adds her Giza branch, and invites 4 team members, each with their own role.',
        s1: {
          tag: 'Setup',
          title: 'Your shop, your look',
          desc: 'Your name, logo, and cover in Arabic and English. The first impression your customers get.',
        },
        s2: {
          tag: 'Team',
          title: 'Everyone on your team has a role',
          desc: 'Invite your team by email and choose what each person can see and do. Put your branches on the map so customers find you.',
        },
        s3: {
          tag: 'Trust',
          title: 'A verified badge customers trust',
          desc: 'Upload your papers once and our team reviews them. Your shop gets a verified badge every customer can see.',
          b1: 'The badge shows on your page and next to your products',
          b2: 'Customers buy with confidence',
        },
      },
      catalog: {
        nav: 'Products',
        label: 'Catalog',
        title: 'List and organize your products',
        desc: 'Clear categories, great photos, and prices and stock for every branch.',
        cats: {
          title: 'Categories customers get',
          desc: 'Men, Women, Kids, and what’s inside each. Customers reach what they want fast.',
        },
        prods: {
          title: 'A full product on one screen',
          desc: 'Name in Arabic and English, photos, category, and bulk prices and timed discounts.',
        },
        stock: {
          title: 'Stock for every branch',
          desc: 'Know how many you have in each branch and get an alert right on time to restock. Orders go to the nearest branch that has the item.',
        },
        media: {
          title: 'Your photo library',
          desc: 'Upload a photo once and use it on any product.',
        },
      },
      types: {
        nav: 'Ways to sell',
        label: '6 ways to sell',
        title: 'Sell the way your business works',
        desc: 'Products, services, bookings, auctions, or made to order. Pick one and Dukkan sets up the buying steps.',
        standard: {
          title: 'Product',
          desc: 'A fixed price, add to cart, order. Plus bulk prices for big buyers.',
        },
        custom_order: {
          title: 'Made to order',
          desc: 'The customer describes what they want and you send a quote. They accept, and it becomes an order.',
        },
        service: {
          title: 'Service',
          desc: 'The customer picks who serves them and a free slot. At your place, theirs, or online.',
        },
        auction: {
          title: 'Auction',
          desc: 'Bids stay hidden until the end, and you decide who wins.',
        },
        used: {
          title: 'Pre-owned',
          desc: 'Sell used items with their condition and photos, after a quick review.',
        },
        space: {
          title: 'Space booking',
          desc: 'Rent a studio, a table, a court, or a hall by the hour. Customers book and invite friends.',
        },
      },
      builder: {
        nav: 'Your page',
        label: 'Build it yourself',
        title: 'A page with your name in minutes',
        desc: 'Pick your sections, add your colors, and publish. Every version is saved, so you can return to any of them anytime.',
        sections: {
          title: '22 ready-made sections',
          desc: 'Banner, your products, your categories, customer reviews, offers, a gallery, your team, and social links. Arrange them any way you like.',
        },
        result: {
          title: 'Publish with confidence',
          desc: 'Preview your page before you publish, and go back to any version anytime.',
        },
      },
      share: {
        nav: 'Sharing',
        label: 'Beyond Dukkan',
        title: 'We handle the design, you just share',
        desc: 'Design and photos are on us. Every product and every page gets a ready-made card for free, and it shows up right on any platform. Then see who opened it and where they came from.',
        scenario: 'Sara sent the "Evening Gown" link to a WhatsApp group in a second. It showed as a card with the photo, the price, and the Elegance logo. Later she saw how many people opened it, and from where.',
        card: {
          tag: 'Share card',
          title: 'A ready card, designed for you',
          desc: 'The card builds itself from your product photo, price, shop name, and logo. We handle the design and cropping, for free.',
          b1: 'Sized right for every platform that shows link previews',
          b2: 'In Arabic or English',
          b3: 'Bulk prices, discounts, and your verification badge show up on their own',
        },
        kinds: {
          title: 'Not just products',
          desc: 'Your shop, every branch, every category, and your profile. Each link gets its own ready card, free and ready to go.',
          company: 'Shop page',
          branch: 'Branch',
          category: 'Category',
          member: 'Your profile',
        },
        s1: { title: 'Works on every platform', desc: 'WhatsApp, Facebook, X, Telegram, Pinterest, and anywhere that shows link previews.' },
        s2: { title: 'Google gets you', desc: 'Your pages tell Google the product name, photo, price, and your shop name.' },
        s3: { title: 'Every link counts', desc: 'Every click is recorded, so you know if it came from a share, social media, or search.' },
        stats: {
          tag: 'Share analytics',
          title: 'See where your link went',
          desc: 'Shares and clicks, where they came from, and which platform brought the most visitors. For your whole shop, and for each product.',
          b1: 'An accurate count of real visitors',
          b2: 'Last 7, 30, or 90 days',
        },
      },
      market: {
        nav: 'Marketplace',
        label: 'For buyers',
        title: 'Shop at your own pace',
        desc: 'Search, filter, and browse freely, right away. Every product shows the shop’s name and its verified badge, so you know who you’re buying from.',
        scenario: 'Ahmed is looking for a gift. He opens the marketplace, picks Women, and finds a dress from Elegance.',
        s1: {
          tag: 'Home',
          title: 'Shops worth following',
          desc: 'Every shop with its cover, description, and followers. For sellers, it’s their storefront in front of every buyer.',
        },
        s2: {
          tag: 'Search',
          title: 'Find what you’re looking for',
          desc: 'Search, categories, and filters by price and type.',
        },
        s3: {
          tag: 'Product page',
          title: 'Everything you need to decide',
          desc: 'Photos, price, the shop that sells it, its verified badge, and reviews from people who actually bought.',
        },
      },
      social: {
        nav: 'Followers',
        label: 'Your community',
        title: 'Follow, save, and review',
        desc: 'Follow the shops you love, save what catches your eye, and share your opinion. Your review helps everyone after you.',
        follow: {
          title: 'Follow your shops',
          desc: 'Their news reaches you first. For sellers, every follower is a customer who comes back.',
        },
        wishlist: {
          title: 'Wishlist',
          desc: 'Save any product in one tap and come back to it anytime.',
        },
        reviews: {
          title: 'Your opinion counts',
          desc: 'Rate the shop, the product, and the delivery from your order page. Every review comes from someone who actually bought.',
        },
      },
      cart: {
        nav: 'Cart & order',
        label: 'For buyers',
        title: 'One cart, many shops',
        desc: 'Buy from several shops in the same cart, and each shop prepares its own order. Before you order, you see which shop every item comes from.',
        s1: { title: 'Add to cart', desc: 'One tap, from any page.' },
        s2: { title: 'Review', desc: 'Quantities and the total for each shop in front of you.' },
        s3: { title: 'Delivery or pickup', desc: 'Your address on the map, or pickup from the branch.' },
        s4: { title: 'Order and track', desc: 'And follow your order step by step.' },
      },
      orders: {
        nav: 'Orders',
        label: 'For sellers and buyers',
        title: 'Every order tracked until it arrives',
        desc: 'Sellers move each order across a board with their own stages, and buyers see where their order is at a glance.',
        board: {
          title: 'A board with your stages',
          desc: 'Set your work stages and drag each order from one to the next. Your whole team’s work in one view.',
        },
        detail: {
          title: 'Your order in front of you',
          desc: 'Order number, its stage, items with photos, and the total. All on your order page.',
        },
        aftersale: {
          title: 'Your rights after you buy',
          desc: 'Want something on your order sorted? Raise it from the order page and choose the fix that suits you. Your order is looked after until it reaches you: choose your money back or a resend.',
          b1: 'Fixes: money back, replacement, repair, resend, or partial compensation',
          b2: 'Ask for warranty service from the same page',
        },
        document: {
          title: 'A receipt for every order',
          desc: 'Every order has a receipt with the name of the shop you bought from.',
        },
      },
      shipping: {
        nav: 'Delivery',
        label: 'Delivery',
        title: 'Deliver your way',
        desc: 'Set delivery once and the cart works out the fee on its own.',
        s1: { title: 'Flat fee', desc: 'One fee for every order.' },
        s2: { title: 'Zones on the map', desc: 'Draw your zones and give each one its price.' },
        s3: { title: 'Branch pickup', desc: 'Customers come and collect.' },
      },
      spaces: {
        nav: 'Bookings',
        label: 'Rent by the hour',
        title: 'Your space gets booked while you focus on your work',
        desc: 'A studio, a table, a court, or a hall. Customers book from your page, and you see what’s free and what’s taken.',
        scenario: 'Sara has a photo studio in her Giza branch. She now rents it by the hour to photographers, and bookings come in from her shop page.',
        s1: {
          tag: 'Setup',
          title: 'Your spaces',
          desc: 'Add each space with its price, and let the price change by day and hour.',
          b1: 'A QR code for every space, ready to print',
          b2: 'A live view of free and booked spaces',
          b3: 'Booking reports',
        },
        s2: {
          tag: 'Booking',
          title: 'Customers book in seconds',
          desc: 'Every space has its own page. Customers pick a time, book, and invite friends.',
        },
      },
      pos: {
        nav: 'Checkout',
        label: 'In store',
        title: 'In-store checkout on the same stock',
        desc: 'What sells in store comes off the same stock as online. Your numbers add up on their own.',
        scenario: 'The Elegance team in Giza sells from the checkout. They scan barcodes with a phone, and stock updates on its own.',
        s1: {
          tag: 'Work screens',
          title: 'A screen for every job',
          desc: 'Products, tables, orders, appointments, and auctions. Switch with one tap.',
        },
        s2: {
          tag: 'Selling',
          title: 'Scan and sell',
          desc: 'Search by name or scan the barcode with your phone. The total and change show right away.',
          b1: 'Your phone becomes a barcode scanner',
          b2: 'Coupons by QR code',
        },
        s3: {
          tag: 'End of day',
          title: 'Receipts and today’s sales',
          desc: 'Print the receipt, see today’s sales, and print price labels.',
        },
      },
      analytics: {
        nav: 'Numbers',
        label: 'Know how you’re doing',
        title: 'Your numbers in front of you',
        desc: 'See what you earn, what sells, and how it compares with last period.',
        s1: {
          tag: 'Key numbers',
          title: 'Four numbers that sum it up',
          desc: 'Revenue, orders, average order, and carts waiting to be completed, each compared with the previous period.',
        },
        s2: {
          tag: 'Charts',
          title: 'What’s selling',
          desc: 'Charts by day, week, and month, and your best-selling products.',
        },
        s3: {
          tag: 'Opportunities',
          title: 'Customers who almost bought',
          desc: 'See carts waiting to be completed, and how many customers your shared links brought in.',
        },
      },
      coupons: {
        nav: 'Coupons',
        label: 'Offers',
        title: 'Offers that bring customers',
        desc: 'A coupon with its limits and dates in a minute, online and in store.',
        scenario: 'Sara creates "RAMADAN25" for 25% off for the first 100 customers, prints its QR code, and puts it at the checkout.',
        s1: {
          tag: 'Create',
          title: 'Your coupon, your terms',
          desc: 'The discount, minimum order, number of uses, and last day.',
          b1: '4 discount types',
          b2: 'A QR code for every coupon',
          b3: 'First orders only, if you want',
        },
        s2: {
          tag: 'Scope',
          title: 'Everything, or what you choose',
          desc: 'Works in the cart and at the checkout.',
        },
        s3: {
          tag: 'Track',
          title: 'See what the offer brought in',
          desc: 'How many times each coupon was used, and switch it off whenever you like.',
        },
      },
      automation: {
        nav: 'Automation',
        label: 'Work that runs itself',
        title: 'When this happens, do that',
        desc: 'Pick an event and an action, or start from a ready template. Dukkan takes it from there.',
        scenario: 'When a customer fills a cart and saves the order for later, Sara sends them an email with a coupon the next day, automatically.',
        s1: {
          tag: 'Event',
          title: 'When it runs',
          desc: 'A new order, a cart waiting to be completed, time to restock, a review, a new follower, and more.',
        },
        s2: {
          tag: 'Action',
          title: 'What it does',
          desc: 'Email, SMS, a notification, Telegram, a coupon, or move the order to another stage.',
        },
        s3: {
          tag: 'Templates',
          title: 'Start from a template',
          desc: 'Ready templates you switch on in one tap, with a log of every run.',
        },
      },
      tickets: {
        nav: 'Support',
        label: 'We’ve got you',
        title: 'Support for sellers and buyers',
        desc: 'A question, a request, or a note. Open a ticket and follow the reply in one place.',
        s1: {
          tag: 'Ask',
          title: 'Open a ticket',
          desc: 'Pick the topic, like an order, a payment, or delivery, and write what you need.',
        },
        s2: {
          tag: 'Follow',
          title: 'Replies in one place',
          desc: 'Every reply in front of you, and you always know where your ticket stands.',
        },
        s3: {
          tag: 'Reward',
          title: 'Help us improve, get a reward',
          desc: 'Send a catch or an idea to improve Dukkan, and get your reward once it’s confirmed.',
        },
      },
      notifications: {
        nav: 'Notifications',
        label: 'Stay in the loop',
        title: 'Everything new reaches you',
        desc: 'A new order for sellers, or an order update for buyers. It reaches you on your phone and computer.',
        b1: 'Notifications on phone and computer',
        b2: 'All your notifications in one place',
      },
      credits: {
        nav: 'Credits',
        label: 'Pay for what you use',
        title: 'Credits for extra services',
        desc: 'Messages and automations run on your credits. Top up as much as you need.',
        s1: {
          tag: 'Packs',
          title: 'Credit packs',
          desc: 'Pick a pack; some come with bonus credits. Your credits and how long they last, in front of you.',
        },
        s2: {
          tag: 'Clarity',
          title: 'Everything clear',
          desc: 'Everything you used, what for, and when, on one page.',
        },
      },
    },
    tech: {
      label: 'Made for us',
      title: 'Arabic, dark mode, and every screen',
      dark: { title: 'Dark mode', desc: 'Dark or light, whatever is easier on your eyes.' },
      rtl: { title: 'Arabic from the ground up', desc: 'Built in Arabic from day one, with English alongside.' },
      platforms: { title: 'Every screen', desc: 'In the browser, or install it on your phone or computer.' },
    },
    stories_cta: {
      title: 'Stories from businesses like yours',
      desc: 'Barbers, restaurants, and shops. See how each one uses Dukkan, step by step.',
      all: 'All stories',
    },
    footer: 'تجارة بأصولها.. وتكنولوجيا بمستقبلها',
  },
  company: {
    nav: 'Company information',
    badge: 'Official details',
    title: 'Company information',
    subtitle: 'The legal details of Haritna as stated in the articles of incorporation, the incorporation certificate, the commercial register extract, and the tax card.',
    sections: {
      identity: 'Name and legal form',
      registration: 'Commercial register and incorporation',
      tax: 'Tax details',
      address: 'Registered office',
      capital: 'Capital and term',
      purpose: 'Company purpose',
    },
    fields: {
      legal_name_ar: 'Legal name (Arabic)',
      legal_name_en: 'Legal name (English)',
      legal_form: 'Legal form',
      law: 'Governing law',
      authority: 'Supervising authority',
      cr_number: 'Commercial register no.',
      cr_office: 'Registry office',
      cr_date: 'Registered on',
      cr_valid: 'Register valid until',
      cert_number: 'Incorporation certificate no.',
      contract_number: 'Articles of incorporation no.',
      tax_number: 'Tax registration no.',
      tax_office: 'Tax office',
      activity_code: 'Activity code',
      activity: 'Activity',
      address: 'Address',
      country: 'Country',
      capital: 'Issued capital',
      ownership: 'Egyptian ownership',
      term: 'Company term',
    },
    values: {
      legal_name_ar: 'شركة أنظمة حارتنا لحلول الأنظمة الذكية والتكنولوجيا والذكاء الاصطناعي',
      legal_form: 'Egyptian limited liability company',
      law: 'Law No. 159 of 1981 and its executive regulations',
      authority: 'General Authority for Investment and Free Zones (GAFI)',
      cr_office: 'Cairo Investment Commercial Registry Office',
      cr_date: '1 July 2026',
      cr_valid: '30 June 2031',
      cert_number: '26-20668-1-01, dated 16 June 2026',
      tax_office: 'El Basatin',
      activity: 'Other information technology and computer service activities',
      address: 'مكتب رقم 148-26، داخل المقر 2، الدور 11، برج 6056 مج 6 المعراج — زهراء المعادي — البساتين — القاهرة',
      country: 'Arab Republic of Egypt',
      capital: 'EGP 500,000',
      ownership: '100%',
      term: '25 years: 1 July 2026 to 30 June 2051',
    },
    purpose: [
      'E-commerce and e-marketing',
      'Managing, operating, and developing online stores, digital platforms, and applications',
      'Information and communications technology, software development, and databases',
      'Producing digital content and information systems, operating them, and training on them',
      'Designing and developing artificial intelligence software',
      'Telecommunications, internet services, and building and managing data networks',
      'Consulting and research centers and technology business incubators',
    ],
    purpose_note: 'All subject to obtaining the licenses required to practice these activities.',
    copies_title: 'Copies of official documents',
    copies_body: 'Copies of the articles of incorporation, the commercial register, and the tax card are sent to authorities, banks, and partners on request. Contact us at:',
    footer_line: 'Commercial register {cr} · Tax no. {tax}',
  },
  dukkan_about: {
    badge: 'What is Dukkan?',
    title: 'Dukkan: your whole store in one place',
    intro: 'Dukkan is a platform by Haritna for merchants and service professionals. A merchant opens a store, lists products or services, receives orders, sells in the shop and online, and follows the whole business from one screen. The merchant is the seller in every order: the buyer browses stores, orders, and follows the order status, and a cart with items from several stores splits into one order per merchant.',
    points: {
      one: 'Online store and in-shop POS on the same branch stock',
      two: 'Fully Arabic and English',
      three: 'Web, mobile, and desktop',
    },
    who: {
      title: 'Who does Dukkan serve?',
      merchant: {
        title: 'The merchant',
        desc: 'A shop owner or professional. Opens a store, adds branches and team, and manages products, orders, POS, and reports.',
      },
      buyer: {
        title: 'The buyer',
        desc: 'Browses stores, adds items from more than one store to the cart, orders, books, follows the order status, and rates the product and the merchant.',
      },
      staff: {
        title: 'The merchant\'s team',
        desc: 'Branch managers, cashiers, and employees. Each has a ready-made role that can be limited to one branch, and the team prepares and hands over the orders.',
      },
      team: {
        title: 'The Haritna team',
        desc: 'Reviews merchant verification documents, handles tickets and user feedback, and gives a second look to posts the automatic check marks for review.',
      },
    },
    sell: {
      title: 'What can a merchant sell?',
      standard: {
        title: 'Standard products',
        desc: 'A product with a price and stock in each branch, with optional quantity pricing and discounts that end on a set date.',
      },
      custom_order: {
        title: 'Custom orders',
        desc: 'The buyer describes the request, the merchant sends a quote, and an accepted quote becomes an order.',
      },
      service: {
        title: 'Bookable services',
        desc: 'Barber, clinic, workshop. The buyer picks the time slot and the provider.',
      },
      auction: {
        title: 'Auctions',
        desc: 'A sealed-bid auction with a start and end time, where the merchant picks whether the highest or the lowest bid wins.',
      },
      used: {
        title: 'Used items',
        desc: 'Sell a used item with a proof-of-purchase receipt and a clear statement of its condition; the Haritna team reviews it before the item goes live.',
      },
      space: {
        title: 'Bookable spaces',
        desc: 'A desk, court, hall or studio at a branch with a set capacity, which the buyer books for a start and end time, priced hourly, fixed, by minimum spend, or free.',
      },
    },
    journey: {
      title: 'An order from start to finish',
      steps: {
        browse: {
          title: 'Browse and cart',
          desc: 'The buyer searches by name or category and adds to the cart.',
        },
        checkout: {
          title: 'Checkout and payment',
          desc: 'Picks the address on the map or pickup from the branch, and pays cash on receipt. The delivery fee is shown separately before confirming, and every amount is clear in front of the buyer before ordering.',
        },
        prepare: {
          title: 'The merchant prepares',
          desc: 'The order reaches the merchant dashboard and moves through preparation stages. The buyer sees the stages the merchant chooses to show.',
        },
        deliver: {
          title: 'Handover',
          desc: 'The merchant delivers in person or through the team, and the buyer follows the order status.',
        },
        receive: {
          title: 'Receipt and rating',
          desc: 'The merchant can confirm the handover with a code, a checklist, or photos, and the buyer rates the product and the merchant.',
        },
        after: {
          title: 'After the sale',
          desc: 'A return or exchange request, and a support ticket for any question.',
        },
      },
    },
    tools: {
      title: 'Merchant tools',
      pos: 'In-shop POS with shifts and a daily close',
      branches: 'Multiple branches and a team with ready-made roles',
      catalog: 'Categories and products in Arabic and English with images',
      storefront: 'A branded store page you build yourself with ease',
      analytics: 'Sales and order reports',
      automation: 'Automated messages and repeated tasks',
      coupons: 'Coupons and offers',
      delivery: 'Flat or zone delivery fees and free-shipping rules',
    },
    earn: {
      title: 'How does Haritna earn?',
      desc: 'The merchant pays Haritna, and browsing and ordering are free for the buyer.',
      credits: 'Operational credit that the merchant tops up and spends on operational services such as automated messages.',
      commission: 'A commission on each order that is delivered and kept, so the merchant pays when they earn.',
      payment: 'The buyer pays the merchant, and sales money goes straight to the merchant.',
    },
    trust: {
      title: 'Safety and trust',
      scope: 'Each store\'s data stays safe with its own team',
      signin: 'Sign-in with a password and a one-time code, or with Google or Facebook',
      roles: 'Each team member gets permissions that fit their role',
      verification: 'Every selling merchant is verified, with a visible badge',
      review: 'An automatic check before each product is published, and a review by our team for anything that needs a second look',
    },
    platforms: {
      title: 'Runs on',
      web: 'Web',
      mobile: 'Mobile browser',
      desktop: 'Desktop app',
      pwa: 'Installable web app',
    },
    cta: 'See the step-by-step walkthrough',
  },
  legal: {
    last_updated: 'Version date',
    effective_date: '16 August 2026',
    back_home: 'Back to Home',
    company_name: 'Haritna',
    source_note: 'This text is taken from the approved legal volume of the Dukkan platform.',
    arabic_only_note: 'The approved text is in Arabic, so it is shown here in Arabic.',
    nav: {
      privacy: 'Privacy Policy',
      terms: 'Terms and Conditions',
      data_deletion: 'Data Deletion',
    },
  },
}
