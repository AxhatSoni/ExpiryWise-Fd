import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, BarChart2 } from 'lucide-react';

export default function QuickActions() {
  const navigate = useNavigate();

  return (
    <div className="flex gap-4">
      <button 
        onClick={() => navigate('/add-item')}
        className="flex-1 bg-primary text-white rounded-lg py-3 px-4 flex items-center justify-center gap-2 hover:bg-primary-hover transition-colors"
      >
        <Plus className="h-5 w-5" />
        <span>Add Item</span>
      </button>
      <button 
        onClick={() => navigate('/stats')}
        className="flex-1 bg-gray-100 text-gray-700 rounded-lg py-3 px-4 flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors"
      >
        <BarChart2 className="h-5 w-5" />
        <span>View Stats</span>
      </button>
    </div>
  );
}