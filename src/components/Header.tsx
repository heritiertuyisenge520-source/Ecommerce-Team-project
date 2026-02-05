import { Search, User, Heart } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function Header() {
  return (
    <div className="bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <div className="text-2xl font-bold">NiceShop</div>
          
          {/* Search Bar */}
          <div className="flex-1 max-w-xl">
            <div className="relative">
              <Input 
                type="text" 
                placeholder="Search for products" 
                className="w-full pr-12 h-11 rounded-lg bg-muted/30"
              />
              <Button 
                size="icon" 
                className="absolute right-1 top-1 h-9 w-9 rounded-md"
              >
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          {/* Icons */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <User className="w-5 h-5" />
            </Button>
            
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="w-5 h-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-primary">
                0
              </Badge>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
