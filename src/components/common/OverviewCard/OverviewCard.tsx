import React from 'react';
import { AlertTriangle, ShoppingCart, Refrigerator } from 'lucide-react';
import { OverviewCardProps } from './types';

export default function OverviewCard({ title, value, type }: OverviewCardProps) {
  const getIcon = () => {
    switch (type) {
      case 'expiring':
        return <AlertTriangle className="h-8 w-8 text-primary" />;
      case 'shopping':
        return <ShoppingCart className="h-8 w-8 text-primary" />;
      case 'inventory':
        return <Refrigerator className="h-8 w-8 text-primary" />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
          <p className="mt-2 text-2xl font-semibold">{value}</p>
        </div>
        {getIcon()}
      </div>
    </div>
  );
}