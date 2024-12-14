import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Welcome from '../screens/Welcome';
import Walkthrough from '../screens/Walkthrough';
import Login from '../screens/Login';
import SignupScreen from '../screens/auth/SignupScreen';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';
import MainLayout from '../components/layout/MainLayout';
import Dashboard from '../pages/Dashboard';
import AddItem from '../pages/AddItem/AddItem';
import RecipeSuggestions from '../pages/RecipeSuggestions';
import ShoppingList from '../pages/ShoppingList';
import Inventory from '../pages/Inventory';
import Notifications from '../pages/Notifications';

export default function AppRoutes() {
  const { isAuthenticated, hasCompletedWalkthrough } = useAuth();

  if (!hasCompletedWalkthrough) {
    return (
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/walkthrough" element={<Walkthrough />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    );
  }

  if (!isAuthenticated) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/forgot-password" element={<ForgotPasswordScreen />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-item" element={<AddItem />} />
        <Route path="/recipes" element={<RecipeSuggestions />} />
        <Route path="/shopping" element={<ShoppingList />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/notifications" element={<Notifications />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}