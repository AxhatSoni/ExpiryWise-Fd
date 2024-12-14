export interface InventoryItem {
  id: string;
  name: string;
  quantity: number;
  expirationDate: string;
  category: string;
  storageType: 'fridge' | 'pantry' | 'freezer';
}

export interface Recipe {
  id: string;
  name: string;
  image: string;
  prepTime: string;
  ingredients: string[];
  steps: string[];
}

export interface ShoppingListItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
  completed: boolean;
}