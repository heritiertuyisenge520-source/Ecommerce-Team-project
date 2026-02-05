import { X } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface ActiveFiltersProps {
  filters: Array<{ id: string; label: string }>
  onRemoveFilter: (id: string) => void
  onClearAll: () => void
}

export function ActiveFilters({ filters, onRemoveFilter, onClearAll }: ActiveFiltersProps) {
  if (filters.length === 0) return null

  return (
    <div className="flex items-center gap-3 flex-wrap">
      <span className="text-sm font-semibold">Active Filters:</span>
      <div className="flex items-center gap-2 flex-wrap flex-1">
        {filters.map((filter) => (
          <Badge
            key={filter.id}
            variant="secondary"
            className="bg-gray-200 text-gray-700 hover:bg-gray-300 px-3 py-1.5 gap-2"
          >
            {filter.label}
            <button
              onClick={() => onRemoveFilter(filter.id)}
              className="hover:text-gray-900"
            >
              <X className="h-3 w-3" />
            </button>
          </Badge>
        ))}
      </div>
      <Button
        variant="link"
        className="text-blue-500 hover:text-blue-700 p-0 h-auto"
        onClick={onClearAll}
      >
        Clear All
      </Button>
    </div>
  )
}
