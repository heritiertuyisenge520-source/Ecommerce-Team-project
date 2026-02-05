import { useState } from 'react'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'

const brands = [
  { id: 'nike', name: 'Nike', count: 24 },
  { id: 'adidas', name: 'Adidas', count: 18 },
  { id: 'puma', name: 'Puma', count: 12 },
  { id: 'reebok', name: 'Reebok', count: 9 },
  { id: 'under-armour', name: 'Under Armour', count: 7 },
  { id: 'new-balance', name: 'New Balance', count: 6 },
  { id: 'converse', name: 'Converse', count: 5 },
  { id: 'vans', name: 'Vans', count: 4 },
]

export function BrandFilter() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])

  const filteredBrands = brands.filter((brand) =>
    brand.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleBrandToggle = (brandId: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brandId)
        ? prev.filter((id) => id !== brandId)
        : [...prev, brandId]
    )
  }

  const handleClearAll = () => {
    setSelectedBrands([])
    setSearchQuery('')
  }

  const handleApplyFilter = () => {
    // Handle filter application logic here
    console.log('Selected brands:', selectedBrands)
  }

  return (
    <div className="bg-white border border-gray-300 rounded-sm p-4">
      {/* Header with action buttons */}
      <div className="flex items-center justify-between mb-4">
        <Button
          variant="outline"
          onClick={handleClearAll}
          className="text-gray-700 hover:text-gray-900"
        >
          Clear All
        </Button>
        <Button
          onClick={handleApplyFilter}
          className="bg-black hover:bg-gray-800 text-white"
        >
          Apply Filter
        </Button>
      </div>

      {/* Title with left border accent */}
      <h2 className="text-lg font-bold mb-4 pb-3 border-l-4 border-black pl-3">
        Filter by Brand
      </h2>

      {/* Search input */}
      <div className="mb-4">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search brands..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pr-10 bg-gray-50 border-gray-300"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>
      </div>

      {/* Brand list with checkboxes */}
      <div className="space-y-3 mb-4">
        {filteredBrands.map((brand) => (
          <div key={brand.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Checkbox
                id={brand.id}
                checked={selectedBrands.includes(brand.id)}
                onCheckedChange={() => handleBrandToggle(brand.id)}
              />
              <label
                htmlFor={brand.id}
                className="text-sm font-medium leading-none cursor-pointer text-gray-700"
              >
                {brand.name}
              </label>
            </div>
            <span className="text-sm text-gray-500">({brand.count})</span>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 my-4"></div>

      {/* Footer with action buttons */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={handleApplyFilter}
          className="text-gray-700 hover:text-gray-900"
        >
          Apply Filter
        </Button>
        <Button
          variant="ghost"
          onClick={handleClearAll}
          className="text-gray-600 hover:text-gray-900"
        >
          Clear All
        </Button>
      </div>
    </div>
  )
}
