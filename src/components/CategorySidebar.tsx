import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BrandFilter } from './BrandFilter'
import { PriceRangeFilter } from './PriceRangeFilter'

const categories = [
  { id: 1, name: 'Clothing', subcategories: ['Men', 'Women', 'Kids'] },
  { id: 2, name: 'Electronics', subcategories: ['Phones', 'Laptops', 'Accessories'] },
  { id: 3, name: 'Home & Kitchen', subcategories: ['Furniture', 'Appliances', 'Decor'] },
  { id: 4, name: 'Beauty & Personal Care', subcategories: ['Skincare', 'Makeup', 'Haircare'] },
  { id: 5, name: 'Books', subcategories: [] },
  { id: 6, name: 'Toys & Games', subcategories: ['Action Figures', 'Board Games', 'Puzzles'] },
]

export function CategorySidebar() {
  const [expandedCategories, setExpandedCategories] = useState<number[]>([])

  const toggleCategory = (categoryId: number) => {
    const category = categories.find((cat) => cat.id === categoryId)
    if (category && category.subcategories.length === 0) return

    setExpandedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    )
  }

  return (
    <div className="space-y-4">
      {/* Categories Section */}
      <div className="bg-white border border-gray-300 rounded-sm p-4">
        <h2 className="text-lg font-bold mb-4 pb-3 border-b-4 border-black">Categories</h2>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.id}>
              <Button
                variant="ghost"
                className="w-full justify-between hover:bg-gray-50 px-2"
                onClick={() => toggleCategory(category.id)}
                disabled={category.subcategories.length === 0}
              >
                <span className="text-gray-700">{category.name}</span>
                {category.subcategories.length > 0 && (
                  <ChevronDown
                    className={`h-4 w-4 text-gray-500 transition-transform ${
                      expandedCategories.includes(category.id) ? 'rotate-180' : ''
                    }`}
                  />
                )}
              </Button>
              {expandedCategories.includes(category.id) && category.subcategories.length > 0 && (
                <div className="ml-4 mt-1 space-y-1">
                  {category.subcategories.map((sub) => (
                    <button
                      key={sub}
                      className="block w-full text-left px-2 py-1 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded"
                    >
                      {sub}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <PriceRangeFilter />

      {/* Brand Filter */}
      <BrandFilter />
    </div>
  )
}
