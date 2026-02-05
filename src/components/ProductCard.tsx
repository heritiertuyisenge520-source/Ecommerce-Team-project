import { Star, Heart } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface ProductCardProps {
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

export function ProductCard({
  image,
  imageAlt,
  category,
  title,
  price,
  originalPrice,
  rating,
  reviewCount,
  isNew,
  discount,
}: ProductCardProps) {
  return (
    <div className="group relative bg-white border border-gray-200 rounded-sm overflow-hidden hover:shadow-lg transition-shadow">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <Badge className="bg-black text-white hover:bg-black px-3 py-1">
              NEW
            </Badge>
          )}
          {discount && (
            <Badge className="bg-orange-500 text-white hover:bg-orange-500 px-3 py-1">
              -{discount}%
            </Badge>
          )}
        </div>

        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Category */}
        <p className="text-sm text-gray-500 mb-1">{category}</p>

        {/* Title */}
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{title}</h3>

        {/* Price and Rating */}
        <div className="flex items-center justify-between">
          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900">${price.toFixed(2)}</span>
            {originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-gray-900">{rating}</span>
            <span className="text-xs text-gray-500">({reviewCount})</span>
          </div>
        </div>
      </div>
    </div>
  )
}
