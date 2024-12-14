import React, { useState } from 'react';
import { Search } from 'lucide-react';
import RecipeCard from '../components/recipes/RecipeCard';
import type { Recipe } from '../types';

// Mock data - In a real app, this would come from an API
const mockRecipes: Recipe[] = [
  {
    id: '1',
    name: 'Vegetable Stir Fry',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600',
    prepTime: '30 mins',
    ingredients: ['carrots', 'broccoli', 'soy sauce', 'rice'],
    steps: ['Chop vegetables', 'Cook rice', 'Stir fry vegetables', 'Add sauce']
  },
  // Add more mock recipes as needed
];

export default function RecipeSuggestions() {
  const [searchQuery, setSearchQuery] = useState('');
  const availableIngredients = ['carrots', 'broccoli']; // Mock data

  const filteredRecipes = mockRecipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-white p-4 flex flex-col items-center gap-4 shadow-sm">
        {/* Centered logo */}
        <img
          src="/logo.png"
          alt="ExpiryWise Logo"
          className="h-12 mb-2" // Adjust height as needed
        />
        <h1 className="text-xl font-semibold">Recipe Suggestions</h1>
      </header>

      <div className="p-4 space-y-6">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search recipes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        {/* Recipe Cards */}
        <div className="grid gap-4">
          {filteredRecipes.map(recipe => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              availableIngredients={availableIngredients}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
