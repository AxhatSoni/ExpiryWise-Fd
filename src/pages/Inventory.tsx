import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import InventoryItem from '../components/inventory/InventoryItem';
import type { InventoryItem as InventoryItemType } from '../types';

// Mock data - In a real app, this would come from an API
const mockInventory: InventoryItemType[] = [
  {
    id: '1',
    name: 'Milk',
    quantity: 1,
    expirationDate: '2024-03-20',
    category: 'Dairy',
    storageType: 'fridge'
  },
  // Add more mock items as needed
];

export default function Inventory() {
  const [searchQuery, setSearchQuery] = useState('');
  const [inventory] = useState(mockInventory);

  const filteredInventory = inventory.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-white p-4 flex flex-col items-center gap-4 shadow-sm">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="ExpiryWise Logo"
          className="h-12 mb-2" // Adjust height as needed
        />
        <h2 className="text-xl font-semibold">Inventory</h2>
      </header>

      {/* Main Content */}
      <div className="p-4 space-y-6">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search inventory..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <button className="p-2 bg-gray-100 rounded-lg">
            <Filter className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        {/* Inventory Items */}
        <div className="space-y-3">
          {filteredInventory.map(item => (
            <InventoryItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
