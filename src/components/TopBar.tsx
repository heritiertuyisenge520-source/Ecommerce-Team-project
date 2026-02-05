import { Phone, Truck, ChevronDown } from 'lucide-react'

export function TopBar() {
  return (
    <div className="bg-gray-100 border-b border-gray-200">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between text-sm">
          {/* Contact Info */}
          <div className="flex items-center gap-2 text-gray-700">
            <Phone className="h-4 w-4" />
            <span>Need help? Call us: +250789323297/+250789831553</span>
          </div>

          {/* Shipping Banner */}
          <div className="flex items-center gap-2 text-gray-700">
            <Truck className="h-4 w-4 text-orange-500" />
            <span>Free Visits</span>
          </div>

          {/* Language and Currency Selectors */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900">
              <span>EN</span>
              <ChevronDown className="h-3 w-3" />
            </button>
            <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900">
              <span>RWF</span>
              <ChevronDown className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
