import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, ArrowLeft } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false);
  const navigate = useNavigate();
  const { resetPassword } = useAuth();

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await resetPassword(email);
      setIsEmailSent(true);
    } catch (error) {
      console.error('Password reset failed:', error);
    }
  };

  if (isEmailSent) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8">
        <img
          src="/logo.png"
          alt="ExpiryWise"
          className="w-24 h-24 mb-8"
        />
        <div className="text-center max-w-md">
          <h1 className="text-2xl font-bold mb-4">Check Your Email</h1>
          <p className="text-gray-600 mb-8">
            We've sent password reset instructions to {email}
          </p>
          <button
            onClick={() => navigate('/login')}
            className="w-full bg-primary text-white rounded-lg py-3 px-4 font-medium hover:bg-primary-hover transition-colors"
          >
            Back to Sign In
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="p-4">
        <button
          onClick={() => navigate('/login')}
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Sign In
        </button>
      </div>

      <div className="flex-1 p-8 flex flex-col items-center">
        <img
          src="/logo.png"
          alt="ExpiryWise"
          className="w-24 h-24 mb-8"
        />
        
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-2">Reset Password</h1>
          <p className="text-gray-600 text-center mb-8">
            Enter your email address and we'll send you instructions to reset your password
          </p>

          <form onSubmit={handleResetPassword} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white rounded-lg py-3 px-4 font-medium hover:bg-primary-hover transition-colors"
            >
              Send Reset Instructions
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}