import React from 'react';
import { Calendar } from 'lucide-react';

interface ItemFormProps {
  onSubmit: (data: {
    name: string;
    category: string;
    manufacturingDate: string;
    expiryDate: string;
  }) => void;
}

export default function ItemForm({ onSubmit }: ItemFormProps) {
  const [formData, setFormData] = React.useState({
    name: '',
    category: '',
    manufacturingDate: '',
    expiryDate: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-1 w-full rounded-lg border border-gray-200 p-2"
          placeholder="Enter item name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Category</label>
        <select
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          className="mt-1 w-full rounded-lg border border-gray-200 p-2"
        >
          <option value="">Select category</option>
          <option value="dairy">Dairy</option>
          <option value="fruits">Fruits</option>
          <option value="vegetables">Vegetables</option>
          <option value="meat">Meat</option>
          <option value="pantry">Pantry</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Manufacturing Date
        </label>
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="date"
            value={formData.manufacturingDate}
            onChange={(e) => setFormData({ ...formData, manufacturingDate: e.target.value })}
            className="mt-1 w-full pl-10 rounded-lg border border-gray-200 p-2"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Expiry Date
        </label>
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="date"
            value={formData.expiryDate}
            onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
            className="mt-1 w-full pl-10 rounded-lg border border-gray-200 p-2"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-white rounded-lg py-3 px-4 font-medium hover:bg-primary-hover transition-colors"
      >
        Add Item
      </button>
    </form>
  );
}