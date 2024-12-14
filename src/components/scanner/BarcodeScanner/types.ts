export interface BarcodeScannerProps {
  onScan: (barcode: string) => void;
  isLoading?: boolean;
}

export interface ScanResult {
  barcode: string;
  timestamp: number;
}