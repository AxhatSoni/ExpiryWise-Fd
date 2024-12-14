import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  const getPageTitle = (path: string) => {
    switch (path) {
      case '/': return 'Dashboard';
      case '/recipes': return 'Recipe Suggestions';
      case '/shopping': return 'Shopping List';
      case '/inventory': return 'Inventory';
      case '/notifications': return 'Notifications';
      default: return 'ExpiryWise';
    }
  };

  return (
    <header className="bg-primary text-white shadow-lg sticky top-0 z-50">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo container */}
          <Link to="/" className="flex items-center space-x-2">
            {/* Add your logo image here */}
            <img 
              src="/path-to-your-logo.png" 
              alt="ExpiryWise" 
              className="h-8 w-auto"
              // Recommended logo size: 32px height (h-8) with auto-width
              // Place your logo file in the public directory
              // Update the src path to match your logo file name
            />
            <span className="text-xl font-bold">ExpiryWise</span>
          </Link>
          <h1 className="text-lg font-semibold">{getPageTitle(location.pathname)}</h1>
          <button className="p-2 hover:bg-primary-hover rounded-full">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}