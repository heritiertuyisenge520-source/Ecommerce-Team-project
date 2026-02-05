import { useState } from 'react'
import { Slider } from '@/components/ui/slider'
import { Input } from '@/components/ui/input'

export function PriceRangeFilter() {
  const [priceRange, setPriceRange] = useState([0, 500])

  return (
    <div className="bg-white border border-gray-300 rounded-sm p-4 mt-4">
      <h2 className="text-lg font-bold mb-4 pb-3 border-b-4 border-black">Price Range</h2>
      
      <div className="space-y-6">
        {/* Price Display */}
        <div className="flex items-center justify-between text-sm font-medium">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>

        {/* Slider */}
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          min={0}
          max={500}
          step={10}
          className="w-full"
        />

        {/* Input Fields */}
        <div className="flex items-center gap-3">
          <div className="flex items-center flex-1 border border-gray-300 rounded px-2 bg-gray-50">
            <span className="text-sm text-gray-600">$</span>
            <Input
              type="number"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
              className="border-0 bg-transparent p-2 text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
              min={0}
              max={priceRange[1]}
            />
          </div>
          <div className="flex items-center flex-1 border border-gray-300 rounded px-2 bg-gray-50">
            <span className="text-sm text-gray-600">$</span>
            <Input
              type="number"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
              className="border-0 bg-transparent p-2 text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
              min={priceRange[0]}
              max={500}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
