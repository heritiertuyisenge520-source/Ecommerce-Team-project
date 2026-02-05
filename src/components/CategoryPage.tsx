import { useState } from 'react'
import { TopBar } from './TopBar'
import { Header } from './Header'
import { Navigation } from './Navigation'
import { CategorySidebar } from './CategorySidebar'
import { CategoryFilters } from './CategoryFilters'
import { ActiveFilters } from './ActiveFilters'
import { ProductCard } from './ProductCard'
import { Footer } from './Footer'
import { products } from '@/data/products'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

export function CategoryPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [activeFilters, setActiveFilters] = useState([
    { id: '1', label: 'Electronics' },
    { id: '2', label: '$50 to $100' },
  ])

  const removeFilter = (id: string) => {
    setActiveFilters((prev) => prev.filter((f) => f.id !== id))
  }

  const clearAllFilters = () => {
    setActiveFilters([])
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <TopBar />

      {/* Header */}
      <Header />

      {/* Navigation */}
      <Navigation />

      {/* Breadcrumb and Page Title */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Category</h1>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Category</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <CategorySidebar />
          </aside>

          {/* Main Content Area */}
          <main className="lg:col-span-3 space-y-4">
            {/* Filters */}
            <CategoryFilters viewMode={viewMode} onViewModeChange={setViewMode} />

            {/* Active Filters */}
            <ActiveFilters
              filters={activeFilters}
              onRemoveFilter={removeFilter}
              onClearAll={clearAllFilters}
            />

            {/* Product Grid */}
            <div
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
                  : 'flex flex-col gap-4'
              }
            >
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
