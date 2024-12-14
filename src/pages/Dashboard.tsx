import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, ShoppingCart, Package2, Bell } from 'lucide-react';
import OverviewCard from '../components/dashboard/OverviewCard';
import QuickActions from '../components/dashboard/QuickActions';

const navigationItems = [
  { icon: ChefHat, label: 'Recipes', path: '/recipes', bgColor: 'bg-primary-light', iconColor: 'text-primary' },
  { icon: ShoppingCart, label: 'Shopping List', path: '/shopping', bgColor: 'bg-primary-light', iconColor: 'text-primary' },
  { icon: Package2, label: 'Inventory', path: '/inventory', bgColor: 'bg-primary-light', iconColor: 'text-primary' },
  { icon: Bell, label: 'Notifications', path: '/notifications', bgColor: 'bg-primary-light', iconColor: 'text-primary' },
];

export default function Dashboard() {
  return (
    <div className="px-4 py-6 space-y-6">
      {/* Logo Section */}
      <div className="flex justify-center">
        <img
          src="/logo.png"
          alt="App Logo"
          className="w-48 h-auto object-contain mb-6"
        />
      </div>

      {/* Overview Cards - Single column for mobile */}
      <div className="space-y-4">
        <OverviewCard title="Expiring Soon" value="5 items" type="expiring" />
        <OverviewCard title="Shopping List" value="12 items" type="shopping" />
        <OverviewCard title="Total Inventory" value="45 items" type="inventory" />
      </div>

      <QuickActions />

      {/* Navigation Grid - 2 columns for mobile */}
      <div className="grid grid-cols-2 gap-4">
        {navigationItems.map(({ icon: Icon, label, path, bgColor, iconColor }) => (
          <Link
            key={path}
            to={path}
            className={`${bgColor} rounded-xl p-4 flex flex-col items-center justify-center space-y-2 hover:opacity-90 transition-opacity`}
          >
            <Icon className={`h-8 w-8 ${iconColor}`} />
            <span className="text-gray-800 text-sm font-medium text-center">{label}</span>
          </Link>
        ))}
      </div>

      {/* Expiring Soon Section */}
      <div className="bg-white rounded-xl shadow-md p-4">
        <h2 className="text-lg font-semibold mb-4">Expiring Soon</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between py-2 border-b">
            <span className="text-gray-800">Milk</span>
            <span className="text-primary">2 days left</span>
          </div>
          <div className="flex items-center justify-between py-2 border-b">
            <span className="text-gray-800">Fresh Bread</span>
            <span className="text-primary">3 days left</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-gray-800">Yogurt</span>
            <span className="text-primary">4 days left</span>
          </div>
        </div>
      </div>
    </div>
  );
}
