import { ChevronDown } from 'lucide-react';

export function Navigation() {
  const menuItems = [
    { label: 'Home', hasDropdown: false },
    { label: 'About', hasDropdown: false },
    { label: 'Shops', hasDropdown: false },
    { label: 'Category', hasDropdown: false },
    { label: 'Product Details', hasDropdown: false },
    { label: 'Contact', hasDropdown: false },
  ];

  return (
    <nav className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6">
        <ul className="flex items-center gap-8 py-3">
          {menuItems.map((item) => (
            <li key={item.label}>
              <button className="flex items-center gap-1 hover:text-primary-foreground/80 transition-colors body-normal">
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
