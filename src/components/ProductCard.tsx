import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  imageAlt: string;
}

export function ProductCard({ image, title, price, originalPrice, badge, imageAlt }: ProductCardProps) {
  return (
    <Card className="group relative overflow-hidden hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="relative mb-4">
          {badge && (
            <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap">
              {badge}
            </Badge>
          )}
          <button 
            className="absolute top-2 right-2 bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-md hover:bg-muted"
            aria-label="Add to wishlist"
            type="button"
          >
            <Heart className="w-4 h-4" />
          </button>
          <img 
            src={image} 
            alt={imageAlt}
            className="w-full h-64 object-contain"
          />
        </div>
        
        <h3 className="font-semibold mb-2 body-normal">{title}</h3>
        
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold">${price}</span>
          {originalPrice && (
            <span className="text-muted-foreground line-through body-normal">
              ${originalPrice}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
