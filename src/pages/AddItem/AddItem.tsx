import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Camera } from 'lucide-react';
import { ItemFormData } from '../../components/forms/ItemForm/types';
import BarcodeScanner from '../../components/scanner/BarcodeScanner';
import ItemForm from '../../components/forms/ItemForm';

export default function AddItem() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showScanner, setShowScanner] = useState(true);

  const handleScan = async (barcode: string) => {
    try {
      setIsLoading(true);
      // TODO: Implement API call to fetch product details by barcode
      console.log('Scanned barcode:', barcode);
      // Mock data - replace with actual API call
      const productDetails = {
        name: 'Sample Product',
        category: 'dairy',
        manufacturingDate: '2024-03-01',
        expiryDate: '2024-04-01'
      };
      return productDetails;
    } catch (error) {
      console.error('Error fetching product details:', error);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (data: ItemFormData) => {
    try {
      setIsLoading(true);
      // TODO: Implement API call to save item
      console.log('Submitting item:', data);
      navigate('/');
    } catch (error) {
      console.error('Error saving item:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white p-4 flex items-center gap-4 shadow-sm">
        <button onClick={() => navigate(-1)} className="text-gray-600">
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-xl font-semibold">Add Items</h1>
      </header>

      <div className="p-4 space-y-6">
        {showScanner && (
          <>
            <BarcodeScanner onScan={handleScan} isLoading={isLoading} />
            <div className="relative text-center">
              <hr className="border-gray-200" />
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-50 px-4 text-gray-500">
                OR
              </span>
            </div>
          </>
        )}

        <ItemForm onSubmit={handleSubmit} isLoading={isLoading} />
      </div>
    </div>
  );
}