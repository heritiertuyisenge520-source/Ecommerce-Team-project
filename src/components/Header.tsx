import { Search, User, Heart, ShoppingCart } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function Header() {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <div className="text-2xl font-bold">NiceShop</div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl">
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Search for products"
                className="flex-1"
              />
              <Button className="bg-black hover:bg-gray-800">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                0
              </Badge>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
