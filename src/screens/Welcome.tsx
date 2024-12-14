import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChefHat } from 'lucide-react';

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Logo and branding section */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 space-y-6">
        {/* Add your logo image here */}
        <img
          src="/path-to-your-logo.png"
          alt="ExpiryWise"
          className="w-32 h-32 mb-4"
        />
        <ChefHat className="w-16 h-16 text-primary" />
        <h1 className="text-3xl font-bold text-gray-900">ExpiryWise</h1>
        <p className="text-center text-gray-600">
          Track your food inventory and never waste groceries again
        </p>
      </div>

      {/* Action buttons */}
      <div className="p-8 space-y-4">
        <button
          onClick={() => navigate('/walkthrough')}
          className="w-full bg-primary text-white rounded-lg py-3 px-4 font-medium hover:bg-primary-hover transition-colors"
        >
          Get Started
        </button>
        <button
          onClick={() => navigate('/login')}
          className="w-full bg-gray-100 text-gray-700 rounded-lg py-3 px-4 font-medium hover:bg-gray-200 transition-colors"
        >
          I already have an account
        </button>
      </div>
    </div>
  );
}