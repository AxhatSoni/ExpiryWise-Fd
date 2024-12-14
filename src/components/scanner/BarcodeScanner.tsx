import React from 'react';
import { Camera } from 'lucide-react';

interface BarcodeScannerProps {
  onScan: (barcode: string) => void;
}

export default function BarcodeScanner({ onScan }: BarcodeScannerProps) {
  // TODO: Integrate with device camera API
  // This is a placeholder for the actual barcode scanning implementation
  const handleScan = () => {
    // Mock barcode scan
    onScan('123456789');
  };

  return (
    <div className="relative w-full aspect-[4/3] bg-black rounded-lg overflow-hidden">
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <div className="w-64 h-48 border-2 border-primary relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-1 bg-primary animate-scan" />
          </div>
        </div>
        <p className="mt-4 text-sm text-center px-4">
          Scan the barcode to auto-fill item details.
          <br />
          Edit if needed for accuracy
        </p>
      </div>
      <button 
        onClick={handleScan}
        className="absolute bottom-4 right-4 p-3 bg-primary rounded-full"
      >
        <Camera className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}