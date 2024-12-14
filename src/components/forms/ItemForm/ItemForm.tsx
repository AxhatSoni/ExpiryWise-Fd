import React from 'react';
import { Calendar } from 'lucide-react';
import { ItemFormProps } from './types';
import { useItemForm } from './useItemForm';

export default function ItemForm({ onSubmit, initialData, isLoading }: ItemFormProps) {
  const { formData, updateField } = useItemForm(initialData);

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
          onChange={(e) => updateField('name', e.target.value)}
          className="mt-1 w-full rounded-lg border border-gray-200 p-2"
          placeholder="Enter item name"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Category</label>
        <select
          value={formData.category}
          onChange={(e) => updateField('category', e.target.value)}
          className="mt-1 w-full rounded-lg border border-gray-200 p-2"
          required
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
            onChange={(e) => updateField('manufacturingDate', e.target.value)}
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
            onChange={(e) => updateField('expiryDate', e.target.value)}
            className="mt-1 w-full pl-10 rounded-lg border border-gray-200 p-2"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className={`w-full ${
          isLoading 
            ? 'bg-gray-400' 
            : 'bg-primary hover:bg-primary-hover'
        } text-white rounded-lg py-3 px-4 font-medium transition-colors`}
      >
        {isLoading ? 'Adding Item...' : 'Add Item'}
      </button>
    </form>
  );
}