import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Mail, Lock, Facebook, Github } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
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
        <h1 className="text-2xl font-bold">Welcome Back</h1>
        <p className="text-gray-600 mt-2">Sign in to continue</p>
      </div>

      <form onSubmit={handleLogin} className="flex-1 p-8 space-y-4">
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
              placeholder="Enter your password"
              required
            />
          </div>
        </div>

        <Link
          to="/forgot-password"
          className="block text-primary text-right hover:underline"
        >
          Forgot Password?
        </Link>

        <button
          type="submit"
          className="w-full bg-primary text-white rounded-lg py-3 px-4 font-medium hover:bg-primary-hover transition-colors"
        >
          Sign In
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
          Don't have an account?{' '}
          <Link to="/signup" className="text-primary font-medium hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}