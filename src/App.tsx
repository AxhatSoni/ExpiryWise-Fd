import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './navigation/AppRoutes';
import { AuthProvider } from './contexts/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        {/* Mobile app container with max-width for tablet/desktop views */}
        <div className="min-h-screen bg-gray-50 flex flex-col mx-auto max-w-mobile">
          <AppRoutes />
        </div>
      </Router>
    </AuthProvider>
  );
}