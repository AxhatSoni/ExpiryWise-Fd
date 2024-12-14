import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Facebook, Github } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export default function SignupScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { signup } = useAuth();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signup(name, email, password);
      navigate('/add-item'); // Redirect to add item page after signup
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="p-8 text-center">
        <img
          src="/logo.png"
          alt="ExpiryWise"
          className="w-24 h-24 mx-auto mb-4"
        />
        <h1 className="text-2xl font-bold">Create Account</h1>
        <p className="text-gray-600 mt-2">Track your food inventory smartly</p>
      </div>

      <form onSubmit={handleSignup} className="flex-1 p-8 space-y-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Full Name
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Enter your full name"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
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

        <div className="space-y-2">
          <label htmlFor="password" className="text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Create a password"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white rounded-lg py-3 px-4 font-medium hover:bg-primary-hover transition-colors"
        >
          Create Account
        </button>

        <div className="text-center">
          <span className="text-gray-500">or continue with</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            className="flex items-center justify-center gap-2 py-2 px-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <Facebook className="h-5 w-5 text-blue-600" />
            <span>Facebook</span>
          </button>
          <button
            type="button"
            className="flex items-center justify-center gap-2 py-2 px-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <Github className="h-5 w-5" />
            <span>GitHub</span>
          </button>
        </div>
      </form>

      <div className="p-8 text-center">
        <p className="text-gray-600">
          Already have an account?{' '}
          <button 
            onClick={() => navigate('/login')}
            className="text-primary font-medium"
          >
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
}