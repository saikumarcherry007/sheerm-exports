import { Apple, Flame, Cookie, Shirt, Briefcase, CircleDot, Package } from "lucide-react"

export const categories = [
  {
    name: "Fresh Fruits & Vegetables",
    slug: "fruits-vegetables",
    description: "Premium Indian produce — mangoes, pomegranates, bananas, okra, green chillies, and more — sourced directly from farms.",
    icon: Apple,
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=2070&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=2070&auto=format&fit=crop",
    products: [
      {
        name: "Fresh Alphonso Mangoes",
        description: "The 'King of Mangoes' — rich, creamy, and tender texture with delicate, non-fibrous pulp.",
        image: "https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=2070&auto=format&fit=crop",
        origin: "Ratnagiri, Maharashtra",
        packaging: "3kg, 5kg Boxes",
      },
      {
        name: "Premium Pomegranates",
        description: "Deep red, juicy seeds with a sweet-tart flavour. Sourced from the best orchards in India.",
        image: "https://images.unsplash.com/photo-1615484477778-ca3b77942c25?q=80&w=2070&auto=format&fit=crop",
        origin: "Solapur, Maharashtra",
        packaging: "4kg, 5kg Cartons",
      },
      {
        name: "Green Chillies",
        description: "Spicy and vibrant green chillies, perfect for adding heat and flavour to any dish.",
        image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?q=80&w=2070&auto=format&fit=crop",
        origin: "Guntur, Andhra Pradesh",
        packaging: "5kg, 10kg Bags",
      },
    ],
  },
  {
    name: "Spices & Seasonings",
    slug: "spices",
    description: "Authentic Indian spices — turmeric, cumin, cardamom, black pepper, red chillies — with bold aroma and flavour.",
    icon: Flame,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop",
    products: [
      {
        name: "Turmeric Powder (High Curcumin)",
        description: "Pure, vibrant yellow turmeric with high curcumin content for medicinal and culinary use.",
        image: "https://images.unsplash.com/photo-1615485243306-056340326127?q=80&w=2070&auto=format&fit=crop",
        origin: "Nizamabad, Telangana",
        packaging: "25kg, 50kg Bags",
      },
      {
        name: "Green Cardamom",
        description: "Aromatic 8mm+ 'Bold' green cardamom pods with intense fragrance and sweet flavour.",
        image: "https://images.unsplash.com/photo-1599147782282-965df7775dd1?q=80&w=2070&auto=format&fit=crop",
        origin: "Idukki, Kerala",
        packaging: "1kg, 5kg vacuum packs",
      },
    ],
  },
  {
    name: "Dry Fruits & Nuts",
    slug: "dry-fruits",
    description: "Hand-picked cashews, almonds, raisins, pistachios, and walnuts — carefully graded and packed for export.",
    icon: Cookie,
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?q=80&w=2070&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?q=80&w=2070&auto=format&fit=crop",
    products: [
      {
        name: "Premium Cashew Nuts (W180)",
        description: "Large, white, whole cashew nuts — the highest grade available for premium snacks.",
        image: "https://images.unsplash.com/photo-1536591040356-83679058b8f2?q=80&w=2070&auto=format&fit=crop",
        origin: "Mangalore, Karnataka",
        packaging: "10kg tins",
      },
    ],
  },
  {
    name: "Textiles & Fabrics",
    slug: "textiles",
    description: "Handloom silks, cotton textiles, and premium fabrics that showcase India's rich weaving heritage.",
    icon: Shirt,
    image: "https://images.unsplash.com/photo-1618220179428-22790b42185b?q=80&w=2070&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1618220179428-22790b42185b?q=80&w=2070&auto=format&fit=crop",
    products: [],
  },
  {
    name: "Handicrafts & Artisan Goods",
    slug: "handicrafts",
    description: "Exquisite hand-crafted décor, pottery, metalwork, and art pieces celebrating Indian craftsmanship.",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1590422114751-285b7968536f?q=80&w=2070&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1590422114751-285b7968536f?q=80&w=2070&auto=format&fit=crop",
    products: [],
  },
  {
    name: "Grains & Millets",
    slug: "grains",
    description: "Premium basmati rice, millets, and pulses — the staple grains of India, now available worldwide.",
    icon: CircleDot,
    image: "https://images.unsplash.com/photo-1590234473859-9941a5ca4482?q=80&w=2070&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1590234473859-9941a5ca4482?q=80&w=2070&auto=format&fit=crop",
    products: [],
  },
  {
    name: "Packaging Products",
    slug: "packaging",
    description: "Food-grade and industrial packaging solutions including pouches, cartons, and custom printed materials.",
    icon: Package,
    image: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?q=80&w=2070&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?q=80&w=2070&auto=format&fit=crop",
    products: [],
  },
]

export function getCategoryBySlug(slug: string) {
  return categories.find((cat) => cat.slug === slug)
}

export function getAllSlugs() {
  return categories.map((cat) => cat.slug)
}
