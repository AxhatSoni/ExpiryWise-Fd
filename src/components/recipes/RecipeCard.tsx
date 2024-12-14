import React from 'react';
import { Clock } from 'lucide-react';
import type { Recipe } from '../../types';

interface RecipeCardProps {
  recipe: Recipe;
  availableIngredients: string[];
}

export default function RecipeCard({ recipe, availableIngredients }: RecipeCardProps) {
  const availableCount = recipe.ingredients.filter(ing => 
    availableIngredients.includes(ing)
  ).length;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img 
        src={recipe.image} 
        alt={recipe.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{recipe.name}</h3>
        <div className="flex items-center text-gray-600 mb-3">
          <Clock className="h-4 w-4 mr-1" />
          <span className="text-sm">{recipe.prepTime}</span>
        </div>
        <div className="text-sm text-gray-600">
          <p>{availableCount} of {recipe.ingredients.length} ingredients available</p>
        </div>
      </div>
    </div>
  );
}