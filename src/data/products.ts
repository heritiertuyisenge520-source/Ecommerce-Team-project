export interface Product {
  id: number
  image: string
  imageAlt: string
  category: string
  title: string
  price: number
  originalPrice?: number
  rating: number
  reviewCount: number
  isNew?: boolean
  discount?: number
}

export const products: Product[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1760135120221-16d9360a088c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxM3x8ZmFzaGlvbiUyMHdvbWFuJTIwd2VhcmluZyUyMHdoaXRlJTIwc3dlYXRlciUyMGFuZCUyMGhhdCUyMHdpdGglMjBibG9uZGUlMjBoYWlyJTIwc3R5bGlzaCUyMGNhc3VhbCUyMG91dGZpdCUyMGxpZmVzdHlsZXxlbnwwfDF8fHwxNzcwMjg3ODgwfDA&ixlib=rb-4.1.0&q=85&w=600',
    imageAlt: 'Woman wearing white sweater and black hat - Jay Soundo on Unsplash',
    category: "Women's Fashion",
    title: 'Tempor Incididunt',
    price: 129.00,
    rating: 4.8,
    reviewCount: 42,
    isNew: true,
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/16969906/pexels-photo-16969906.jpeg?auto=compress&cs=tinysrgb&w=600',
    imageAlt: 'Confident businessman in a beige suit - itay verchik on Pexels',
    category: "Men's Collection",
    title: 'Elit Consectetur',
    price: 95.00,
    rating: 4.6,
    reviewCount: 28,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1544385183-10189e50ff56?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwd2VhcmluZyUyMGNvbG9yZnVsJTIwZmxvcmFsJTIwa2ltb25vJTIwYW5kJTIwYmxhY2slMjB0b3AlMjBmYXNoaW9uJTIwYWNjZXNzb3JpZXMlMjBmYXNoaW9ufGVufDB8MXx8fDE3NzAyODc4ODB8MA&ixlib=rb-4.1.0&q=85&w=600',
    imageAlt: 'Smiling woman wearing floral kimono - Nathalie SPEHNER on Unsplash',
    category: 'Accessories',
    title: 'Adipiscing Magna',
    price: 75.00,
    originalPrice: 99.00,
    rating: 4.9,
    reviewCount: 56,
    discount: 25,
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1760264554019-cd1dcfc08936?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw1fHxmYXNoaW9uJTIwd29tYW4lMjB3ZWFyaW5nJTIwd2hpdGUlMjBzd2VhdGVyJTIwYW5kJTIwaGF0JTIwd2l0aCUyMGJsb25kZSUyMGhhaXIlMjBzdHlsaXNoJTIwY2FzdWFsJTIwb3V0Zml0JTIwbGlmZXN0eWxlfGVufDB8MXx8fDE3NzAyODc4ODB8MA&ixlib=rb-4.1.0&q=85&w=600',
    imageAlt: 'Woman wearing black hat and white turtleneck - Jay Soundo on Unsplash',
    category: "Women's Fashion",
    title: 'Elegant Winter Set',
    price: 149.00,
    rating: 4.7,
    reviewCount: 35,
  },
  {
    id: 5,
    image: 'https://images.pexels.com/photos/34521429/pexels-photo-34521429.jpeg?auto=compress&cs=tinysrgb&w=600',
    imageAlt: 'Elegant portrait of a smiling black man in a beige suit - Safari Consoler on Pexels',
    category: "Men's Collection",
    title: 'Premium Suit Collection',
    price: 245.00,
    rating: 4.8,
    reviewCount: 19,
    isNew: true,
  },
  {
    id: 6,
    image: 'https://images.pexels.com/photos/2034538/pexels-photo-2034538.jpeg?auto=compress&cs=tinysrgb&w=600',
    imageAlt: 'Young woman wearing a colorful floral kimono - Quốc Bảo on Pexels',
    category: 'Accessories',
    title: 'Traditional Kimono',
    price: 189.00,
    originalPrice: 220.00,
    rating: 4.9,
    reviewCount: 42,
    discount: 15,
  },
]
