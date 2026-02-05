import { ChevronDown } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'

export function Navigation() {
  return (
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <nav className="flex items-center gap-6 py-3">
          <a href="#" className="hover:text-gray-300 transition-colors">
            Home
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            About
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            Shops
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            Category
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            Product Details
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </div>
  )
}
