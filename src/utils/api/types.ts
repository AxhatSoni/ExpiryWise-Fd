export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

export interface ProductDetails {
  name: string;
  category: string;
  manufacturingDate?: string;
  expiryDate?: string;
  barcode: string;
}