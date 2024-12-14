import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import BarcodeScanner from '../components/scanner/BarcodeScanner';
import ItemForm from '../components/forms/ItemForm';

export default function AddItem() {
  const navigate = useNavigate();
  
  // TODO: Integrate with backend API
  const handleScan = async (barcode: string) => {
    try {
      // API call to fetch product details by barcode
      // const response = await api.get(`/products/${barcode}`);
      // setProductDetails(response.data);
      console.log('Scanned barcode:', barcode);
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };

  // TODO: Integrate with backend API
  const handleSubmit = async (data: any) => {
    try {
      // API call to save item
      // await api.post('/inventory/items', data);
      console.log('Submitted data:', data);
      navigate('/');
    } catch (error) {
      console.error('Error saving item:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white p-4 flex flex-col items-center shadow-sm">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 flex items-center"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
        {/* Centered logo */}
        <img
          src="/logo.png"
          alt="ExpiryWise Logo"
          className="h-12 mb-2" // Adjust height as needed
        />
        <h1 className="text-xl font-semibold">Add Items</h1>
      </header>

      <div className="p-4 space-y-6">
        <BarcodeScanner onScan={handleScan} />
        
        <div className="text-center relative">
          <hr className="border-gray-200" />
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-50 px-4 text-gray-500">
            OR
          </span>
        </div>

        <ItemForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
