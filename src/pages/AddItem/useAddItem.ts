import { useCallback } from 'react';
import { api } from '../../utils/api';
import type { ItemFormData } from '../../components/forms/ItemForm/types';

interface UseAddItemProps {
  onSuccess?: () => void;
  setIsLoading: (loading: boolean) => void;
}

export function useAddItem({ onSuccess, setIsLoading }: UseAddItemProps) {
  const handleSubmit = useCallback(async (data: ItemFormData) => {
    try {
      setIsLoading(true);
      // TODO: Integrate with backend API
      // await api.inventory.addItem(data);
      console.log('Submitted data:', data);
      onSuccess?.();
    } catch (error) {
      console.error('Error saving item:', error);
    } finally {
      setIsLoading(false);
    }
  }, [onSuccess, setIsLoading]);

  return { handleSubmit };
}