import { useCallback } from 'react';
import { BarcodeScannerProps, ScanResult } from './types';

export function useBarcodeScanner({ onScan }: Pick<BarcodeScannerProps, 'onScan'>) {
  const handleScan = useCallback(() => {
    // TODO: Integrate with device camera API
    // This is a placeholder for the actual barcode scanning implementation
    const mockScanResult: ScanResult = {
      barcode: '123456789',
      timestamp: Date.now(),
    };
    onScan(mockScanResult.barcode);
  }, [onScan]);

  return { handleScan };
}