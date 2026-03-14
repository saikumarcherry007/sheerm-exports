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
        isGI: true,
        giTag: "Ratnagiri Alphonso Mango",
        packaging: "3kg, 5kg Boxes",
      },
      {
        name: "Premium Pomegranates",
        description: "Deep red, juicy seeds with a sweet-tart flavour. Sourced from the best orchards in India.",
        image: "/products/premium-pomegranates.jpeg",
        origin: "Solapur, Maharashtra",
        packaging: "4kg, 5kg Cartons",
      },
      {
        name: "Green Chillies",
        description: "Spicy and vibrant green chillies, perfect for adding heat and flavour to any dish.",
        image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?q=80&w=2070&auto=format&fit=crop",
        origin: "Guntur, Andhra Pradesh",
        isGI: true,
        giTag: "Guntur Sannam Chilli",
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
        image: "/products/turmeric-powder-high-curcumin.jpeg",
        origin: "Nizamabad, Telangana",
        isGI: true,
        giTag: "Nizamabad Turmeric",
        packaging: "25kg, 50kg Bags",
      },
      {
        name: "Green Cardamom",
        description: "Aromatic 8mm+ 'Bold' green cardamom pods with intense fragrance and sweet flavour.",
        image: "/products/green-cardamom.jpeg",
        origin: "Idukki, Kerala",
        isGI: true,
        giTag: "Alleppey Green Cardamom",
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
        image: "/products/premium-cashew-nuts-w180.jpeg",
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
    image: "/products/textiles-fabrics.webp",
    heroImage: "/products/textiles-fabrics.webp",
    products: [],
  },
  {
    name: "Handicrafts & Artisan Goods",
    slug: "handicrafts",
    description: "Exquisite hand-crafted décor, pottery, metalwork, and art pieces celebrating Indian craftsmanship.",
    icon: Briefcase,
    image: "/products/handicrafts-artisan-goods.webp",
    heroImage: "/products/handicrafts-artisan-goods.webp",
    products: [],
  },
  {
    name: "Grains & Millets",
    slug: "grains",
    description: "Premium basmati rice, millets, and pulses — the staple grains of India, now available worldwide.",
    icon: CircleDot,
    image: "/products/grains-millets.webp",
    heroImage: "/products/grains-millets.webp",
    products: [],
  },
  {
    name: "Packaging Products",
    slug: "packaging",
    description: "Food-grade and industrial packaging solutions including pouches, cartons, and custom printed materials.",
    icon: Package,
    image: "/products/packaging-products.jpeg",
    heroImage: "/products/packaging-products.jpeg",
    products: [],
  },
]

export function getCategoryBySlug(slug: string) {
  return categories.find((cat) => cat.slug === slug)
}

export function getAllSlugs() {
  return categories.map((cat) => cat.slug)
}
