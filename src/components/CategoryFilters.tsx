import { Search, Grid3X3, List } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface CategoryFiltersProps {
  viewMode: 'grid' | 'list'
  onViewModeChange: (mode: 'grid' | 'list') => void
}

export function CategoryFilters({ viewMode, onViewModeChange }: CategoryFiltersProps) {
  return (
    <div className="bg-white border border-gray-300 rounded-sm p-4">
      <div className="flex items-center gap-4 flex-wrap">
        {/* Search Products */}
        <div className="flex-1 min-w-[200px]">
          <div className="space-y-1">
            <label className="text-sm font-semibold">Search Products</label>
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Search for products."
                className="flex-1"
              />
              <Button variant="outline" size="icon">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Price Range */}
        <div className="min-w-[150px]">
          <div className="space-y-1">
            <label className="text-sm font-semibold">Price Range</label>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="0-50">$0 to $50</SelectItem>
                <SelectItem value="50-100">50rwf to $100</SelectItem>
                <SelectItem value="100-200">$100 to $200</SelectItem>
                <SelectItem value="200+">$200+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Sort By */}
        <div className="min-w-[150px]">
          <div className="space-y-1">
            <label className="text-sm font-semibold">Sort By</label>
            <Select defaultValue="featured">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="rating">Customer Rating</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* View Toggle */}
        <div className="min-w-[100px]">
          <div className="space-y-1">
            <label className="text-sm font-semibold">View</label>
            <div className="flex gap-1">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="icon"
                onClick={() => onViewModeChange('grid')}
                className={viewMode === 'grid' ? 'bg-black hover:bg-gray-800' : ''}
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="icon"
                onClick={() => onViewModeChange('list')}
                className={viewMode === 'list' ? 'bg-black hover:bg-gray-800' : ''}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Items Per Page */}
        <div className="min-w-[150px]">
          <div className="space-y-1">
            <Select defaultValue="12">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="12">12 per page</SelectItem>
                <SelectItem value="24">24 per page</SelectItem>
                <SelectItem value="48">48 per page</SelectItem>
                <SelectItem value="96">96 per page</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  )
}
