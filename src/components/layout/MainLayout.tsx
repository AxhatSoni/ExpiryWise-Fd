import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function MainLayout() {
  return (
    <>
      <Header />
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </>
  );
}