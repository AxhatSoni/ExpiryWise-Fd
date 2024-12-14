import React from 'react';
import { Calendar } from 'lucide-react';
import type { InventoryItem as InventoryItemType } from '../../types';

interface InventoryItemProps {
  item: InventoryItemType;
}

export default function InventoryItem({ item }: InventoryItemProps) {
  const daysUntilExpiry = Math.ceil(
    (new Date(item.expirationDate).getTime() - new Date().getTime()) / (1000 * 3600 * 24)
  );

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium">{item.name}</h3>
          <p className="text-sm text-gray-500">{item.quantity} units · {item.storageType}</p>
        </div>
        <div className="flex items-center text-sm">
          <Calendar className="h-4 w-4 mr-1 text-primary" />
          <span className={`
            ${daysUntilExpiry <= 3 ? 'text-red-500' : 
              daysUntilExpiry <= 7 ? 'text-primary' : 'text-gray-600'}
          `}>
            {daysUntilExpiry} days left
          </span>
        </div>
      </div>
    </div>
  );
}