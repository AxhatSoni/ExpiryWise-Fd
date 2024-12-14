import { useState } from 'react';
import { ItemFormData } from './types';

export function useItemForm(initialData?: Partial<ItemFormData>) {
  const [formData, setFormData] = useState<ItemFormData>({
    name: initialData?.name || '',
    category: initialData?.category || '',
    manufacturingDate: initialData?.manufacturingDate || '',
    expiryDate: initialData?.expiryDate || '',
  });

  const updateField = (field: keyof ItemFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return { formData, updateField };
}