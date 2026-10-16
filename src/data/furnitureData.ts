export interface Product {
  id: string;
  name: string;
  category: "Living Room" | "Bedroom" | "Dining Room" | "Office Furniture" | "Chairs" | "Tables";
  categorySlug: string;
  priceEstimate: string;
  tagline: string;
  description: string;
  image: string;
  secondaryImages: string[];
  dimensions: string;
  materials: string[];
  finishes: string[];
  warranty: string;
  featured: boolean;
  inStock: boolean;
}

export interface Category {
  id: string;
  name: string;
  itemCount: string;
  badgeCount: string;
  subtitle: string;
  description: string;
  image: string;
  gridSpan: string; // Asymmetric grid layout class helper
  heightClass: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  span: string; // Tailwind grid span helper
}

export const STORE_INFO = {
  name: "Bilindu Furniture",
  tagline: "Furniture Designed for Better Living",
  phone: "+94775273978",
  phoneDisplay: "+94 77 527 3978",
  whatsapp: "94775273978",
  whatsappDisplay: "+94 77 527 3978",
  email: "hello@bilindufurniture.com",
  address: "56/12 Sri Premarathna Road, Moratumulla, Moratuwa",
  googleMapsUrl: "https://maps.google.com/?q=56/12+Sri+Premarathna+Road+Moratumulla+Moratuwa",
  hours: {
    weekdays: "Monday – Saturday: 9:00 AM – 7:00 PM",
    weekend: "Sunday: 10:00 AM – 5:00 PM",
  },
};

export const CATEGORIES: Category[] = [
  {
    id: "living-room",
    name: "Living Room",
    itemCount: "42 Signature Items",
    badgeCount: "42 Pieces",
    subtitle: "Living Room Collection",
    description: "Teak sofa suites, curved armchairs and warm woven cushions.",
    image: "/images/sofa_set_colorful.jpg",
    gridSpan: "lg:col-span-7",
    heightClass: "h-[450px] sm:h-[540px]",
  },
  {
    id: "bedroom",
    name: "Bedroom",
    itemCount: "28 Signature Items",
    badgeCount: "28 Pieces",
    subtitle: "Bedroom Suite",
    description: "X-accent dressers, spotlight wardrobes, and full-length mirrors.",
    image: "/images/dresser_x_accent.jpg",
    gridSpan: "lg:col-span-5",
    heightClass: "h-[450px] sm:h-[540px]",
  },
  {
    id: "dining-room",
    name: "Dining Room",
    itemCount: "35 Signature Items",
    badgeCount: "35 Pieces",
    subtitle: "Dining Room Collection",
    description: "Solid hardwood dining tables and tailored seating built for hosting.",
    image: "/images/dining_table_carved.jpg",
    gridSpan: "lg:col-span-5",
    heightClass: "h-[450px] sm:h-[540px]",
  },
  {
    id: "office-furniture",
    name: "Office Furniture",
    itemCount: "20 Signature Items",
    badgeCount: "20 Pieces",
    subtitle: "Workplace & Executive Office",
    description: "Spotlight wardrobes, slatted storage, and architectural desks.",
    image: "/images/wardrobe_spotlights.jpg",
    gridSpan: "lg:col-span-7",
    heightClass: "h-[450px] sm:h-[540px]",
  },
  {
    id: "chairs",
    name: "Chairs",
    itemCount: "31 Signature Items",
    badgeCount: "31 Pieces",
    subtitle: "Accent & Lounge Chairs",
    description: "Solid teak barrel chairs, classic recliners, and handcrafted armchairs.",
    image: "/images/chair_barrel_tub.jpg",
    gridSpan: "lg:col-span-6",
    heightClass: "h-[440px] sm:h-[480px]",
  },
  {
    id: "tables",
    name: "Tables",
    itemCount: "24 Signature Items",
    badgeCount: "24 Pieces",
    subtitle: "Coffee & Side Tables",
    description: "Floating shelf vanities, coffee tables, and credenzas.",
    image: "/images/dressing_table_2.jpg",
    gridSpan: "lg:col-span-6",
    heightClass: "h-[440px] sm:h-[480px]",
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "prod-1",
    name: "Velvet Minimalist Sofa",
    category: "Living Room",
    categorySlug: "living-room",
    priceEstimate: "Available upon inquiry",
    tagline: "Luxurious tactile velvet sofa with extra-deep seating and solid walnut base.",
    description: "Designed for effortless lounging, the Velvet Minimalist Sofa combines architectural clean lines with plush memory-foam cushioning wrapped in spill-resistant Italian bouclé velvet.",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1000&q=85",
    secondaryImages: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=85",
    ],
    dimensions: '88" W x 38" D x 32" H',
    materials: ["FSC-Certified Solid Walnut Frame", "High-Resilience Foam Core", "Italian Performance Velvet"],
    finishes: ["Warm Sand", "Sage Green", "Charcoal Gray"],
    warranty: "10-Year Structural Guarantee",
    featured: true,
    inStock: true,
  },
  {
    id: "prod-2",
    name: "Nordic Oak Dining Table",
    category: "Dining Room",
    categorySlug: "dining-room",
    priceEstimate: "Available upon inquiry",
    tagline: "Handcrafted solid Scandinavian white oak dining table with soft bevel edges.",
    description: "A celebration of modern organic design. Crafted from kiln-dried solid oak, this table seats 8 comfortably and features concealed steel joinery for lifetime durability.",
    image: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1000&q=85",
    secondaryImages: [
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=85",
    ],
    dimensions: '94" L x 40" W x 30" H',
    materials: ["100% Solid White Oak", "Natural Matte Organic Oil Finish"],
    finishes: ["Natural Honey Oak", "Smoked Ash", "Raw Chalk"],
    warranty: "10-Year Structural Guarantee",
    featured: true,
    inStock: true,
  },
  {
    id: "prod-3",
    name: "Ergonomic Lounge Chair",
    category: "Chairs",
    categorySlug: "chairs",
    priceEstimate: "Available upon inquiry",
    tagline: "Iconic mid-century modern lounge silhouette with top-grain leather.",
    description: "Engineered for optimal spinal support, featuring an angled molded plywood frame and supple aniline leather cushions that develop a beautiful patina over time.",
    image: "https://images.unsplash.com/photo-1580481072645-022f9a6d83d0?auto=format&fit=crop&w=1000&q=85",
    secondaryImages: [
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=85",
    ],
    dimensions: '34" W x 35" D x 33" H',
    materials: ["Molded Walnut Veneer Shell", "Full-Grain Italian Leather", "Black Powder-Coated Steel Base"],
    finishes: ["Cognac Brown", "Midnight Black", "Camel Tan"],
    warranty: "5-Year Manufacturer Warranty",
    featured: true,
    inStock: true,
  },
  {
    id: "prod-4",
    name: "Sanctuary Queen Platform Bed",
    category: "Bedroom",
    categorySlug: "bedroom",
    priceEstimate: "Available upon inquiry",
    tagline: "Low-profile upholstered headboard bed frame with built-in ambient warm illumination.",
    description: "Transform your bedroom into a tranquil retreat. Features a cushioned channel-tufted headboard with integrated concealed nightstands and solid slat mattress support.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=85",
    secondaryImages: [
      "https://images.unsplash.com/photo-1540518614846-7ede433c5172?auto=format&fit=crop&w=1000&q=85",
    ],
    dimensions: '68" W x 86" L x 46" H (Queen)',
    materials: ["Solid Hardwood Slat Base", "Woven Wool-Linen Blend", "Solid Ash Legs"],
    finishes: ["Warm Oat", "Slate Gray", "Terracotta"],
    warranty: "10-Year Structural Guarantee",
    featured: true,
    inStock: true,
  },
  {
    id: "prod-5",
    name: "Sculptural Marble Coffee Table",
    category: "Tables",
    categorySlug: "tables",
    priceEstimate: "Available upon inquiry",
    tagline: "Honed Carrara marble top sitting gracefully over a fluted oak pedestal base.",
    description: "A functional piece of modern sculpture. Every table features unique marble veining sealed against stains, paired with ribbed architectural wood detail.",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1000&q=85",
    secondaryImages: [
      "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=1000&q=85",
    ],
    dimensions: '44" Diameter x 16" H',
    materials: ["Italian Carrara Marble", "Hand-carved Oak Pedestal"],
    finishes: ["White Marble / Natural Oak", "Nero Marquina / Black Walnut"],
    warranty: "5-Year Guarantee",
    featured: true,
    inStock: true,
  },
  {
    id: "prod-6",
    name: "Executive Walnut Office Desk",
    category: "Office Furniture",
    categorySlug: "office-furniture",
    priceEstimate: "Available upon inquiry",
    tagline: "Streamlined modern desk with integrated wireless phone charger and soft-close drawers.",
    description: "Crafted for focused, creative work. Includes hidden cable management channels, leather inlaid writing blotter option, and satin brass trim details.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=85",
    secondaryImages: [
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=85",
    ],
    dimensions: '66" W x 30" D x 30" H',
    materials: ["American Black Walnut", "Satin Brass Hardware", "Full-Extension Steel Slides"],
    finishes: ["Natural Walnut", "Espresso Oak"],
    warranty: "10-Year Guarantee",
    featured: true,
    inStock: true,
  },
  {
    id: "prod-7",
    name: "Architectural TV Console",
    category: "Living Room",
    categorySlug: "living-room",
    priceEstimate: "Available upon inquiry",
    tagline: "Slatted tambour door console with ventilated media shelves and subtle brass legs.",
    description: "Conceal AV components while maintaining infrared remote control capability through handcrafted acoustic wood slats.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85",
    secondaryImages: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=85",
    ],
    dimensions: '74" W x 18" D x 24" H',
    materials: ["Solid Ash Wood", "Perforated Metal Rear Panels", "Brushed Brass Accents"],
    finishes: ["Natural Blonde Ash", "Matte Charcoal"],
    warranty: "5-Year Guarantee",
    featured: false,
    inStock: true,
  },
  {
    id: "prod-8",
    name: "Modular Storage Credenza",
    category: "Office Furniture",
    categorySlug: "office-furniture",
    priceEstimate: "Available upon inquiry",
    tagline: "Versatile side cabinet with soft-touch push doors and adjustable shelving.",
    description: "Ideal for home offices, dining rooms, or living spaces needing elegant storage solutions.",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=85",
    secondaryImages: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=85",
    ],
    dimensions: '60" W x 18" D x 32" H',
    materials: ["Walnut Veneer", "Matte Black Metal Frame"],
    finishes: ["Walnut / Black", "Light Ash / White"],
    warranty: "5-Year Guarantee",
    featured: false,
    inStock: true,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Teak Curved Arm Living Suite & Colorful Pillows",
    category: "Living Rooms",
    image: "/images/sofa_set_colorful.jpg",
    span: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    id: "gal-2",
    title: "Mastercrafted Geometric Lattice Teak Dining Suite",
    category: "Dining Spaces",
    image: "/images/dining_table_carved.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    id: "gal-3",
    title: "Solid Natural Teak 6-Seater Dining Suite",
    category: "Dining Spaces",
    image: "/images/dining_table_solid.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    id: "gal-4",
    title: "Spotlight 2-Door Glass Insert Wardrobe",
    category: "Bedrooms",
    image: "/images/wardrobe_spotlights.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    id: "gal-5",
    title: "Architectural X-Accent Dresser & Mirror",
    category: "Bedrooms",
    image: "/images/dresser_x_accent.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    id: "gal-6",
    title: "Solid Wood Striped Cushion 2-Seater Sofa",
    category: "Sofas & Armchairs",
    image: "/images/sofa_set_striped.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    id: "gal-7",
    title: "Lattice Handcrafted Glass Showcase Credenza",
    category: "Office",
    image: "/images/showcase_credenza.jpg",
    span: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    id: "gal-8",
    title: "Full-Length Teak Dressing Mirror Station",
    category: "Tables",
    image: "/images/dressing_table_1.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    id: "gal-9",
    title: "Solid Teak High-Back Slatted Armchair",
    category: "Chairs",
    image: "/images/chair_slatted_armchair.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    id: "gal-10",
    title: "Curved Solid Teak Barrel Tub Chair",
    category: "Chairs",
    image: "/images/chair_barrel_tub.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    id: "gal-11",
    title: "Modern Architectural Minimalist Accent Chair",
    category: "Chairs",
    image: "/images/chair_modern_minimal.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    id: "gal-12",
    title: "Classic Teak Slatted Patio & Lounge Armchair",
    category: "Chairs",
    image: "/images/chair_adirondack_teak.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    id: "gal-13",
    title: "Sculpted High-Back Royal Teak Throne Chair",
    category: "Chairs",
    image: "/images/chair_highback_royal.jpg",
    span: "col-span-1 row-span-1",
  },
];

export const WHY_CHOOSE_US = [
  {
    id: "quality",
    title: "Quality Products",
    description: "Carefully selected furniture crafted with kiln-dried hardwoods and premium upholstery designed for everyday longevity.",
    iconName: "ShieldCheck",
  },
  {
    id: "designs",
    title: "Modern Designs",
    description: "Contemporary, timeless aesthetic curated by interior design experts suitable for modern interiors.",
    iconName: "Sparkles",
  },
  {
    id: "pricing",
    title: "Affordable Prices",
    description: "Direct showroom pricing delivering exceptional luxury craftsmanship without unnecessary retail markups.",
    iconName: "Tag",
  },
  {
    id: "support",
    title: "Friendly Support",
    description: "Our attentive team is ready to guide you on dimensions, fabric samples, and tailored room recommendations.",
    iconName: "Headphones",
  },
];

export function getWhatsAppUrl(productName?: string) {
  const message = productName
    ? `Hello Maison & Living team! I am interested in learning more about the "${productName}". Could you please share availability and pricing details?`
    : `Hello Maison & Living team! I would like to inquire about your furniture collections and showroom services.`;
  return `https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
}
