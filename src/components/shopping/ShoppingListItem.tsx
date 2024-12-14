import React from 'react';
import { Check, Trash2 } from 'lucide-react';
import type { ShoppingListItem as ShoppingListItemType } from '../../types';

interface ShoppingListItemProps {
  item: ShoppingListItemType;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function ShoppingListItem({ item, onToggle, onDelete }: ShoppingListItemProps) {
  return (
    <div className="flex items-center justify-between py-3 border-b">
      <div className="flex items-center gap-3">
        <button 
          onClick={() => onToggle(item.id)}
          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center
            ${item.completed ? 'bg-primary border-primary' : 'border-gray-300'}`}
        >
          {item.completed && <Check className="h-4 w-4 text-white" />}
        </button>
        <div className={item.completed ? 'line-through text-gray-500' : ''}>
          <p className="font-medium">{item.name}</p>
          <p className="text-sm text-gray-500">{item.quantity} units</p>
        </div>
      </div>
      <button 
        onClick={() => onDelete(item.id)}
        className="p-2 text-gray-500 hover:text-red-500"
      >
        <Trash2 className="h-5 w-5" />
      </button>
    </div>
  );
}