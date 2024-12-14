export interface ItemFormData {
  name: string;
  category: string;
  manufacturingDate: string;
  expiryDate: string;
}

export interface ItemFormProps {
  onSubmit: (data: ItemFormData) => void;
  initialData?: Partial<ItemFormData>;
  isLoading?: boolean;
}