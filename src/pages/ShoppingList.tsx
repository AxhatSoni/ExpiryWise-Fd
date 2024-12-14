import React, { useState } from 'react';
import { Share } from 'lucide-react';
import ShoppingListItem from '../components/shopping/ShoppingListItem';
import type { ShoppingListItem as ShoppingListItemType } from '../types';

// Mock data - In a real app, this would come from an API
const mockItems: ShoppingListItemType[] = [
  {
    id: '1',
    name: 'Milk',
    category: 'Dairy',
    quantity: 2,
    completed: false
  },
  // Add more mock items as needed
];

export default function ShoppingList() {
  const [items, setItems] = useState(mockItems);

  const toggleItem = (id: string) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const deleteItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

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
        <h2 className="text-xl font-semibold">Shopping List</h2>
      </header>

      <div className="p-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Your Items</h2>
          <button className="p-2 text-primary hover:bg-primary-light rounded-full">
            <Share className="h-5 w-5" />
          </button>
        </div>

        {/* Shopping List Items */}
        <div className="space-y-1">
          {items.map(item => (
            <ShoppingListItem
              key={item.id}
              item={item}
              onToggle={toggleItem}
              onDelete={deleteItem}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
