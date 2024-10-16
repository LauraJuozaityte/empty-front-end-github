import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Movies } from './pages/Movies';
import { Profile } from './pages/Profile';
import { LayoutMain } from './components/LayoutMain';
import { LayoutAuth } from './components/LayoutAuth';

export function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <LayoutMain>
            <Home />
          </LayoutMain>
        }
      />
      <Route path="/home" element={<Navigate to="/" />} />
      <Route
        path="/login"
        element={
          <LayoutAuth>
            <Login />
          </LayoutAuth>
        }
      />
      <Route
        path="/movies"
        element={
          <LayoutMain>
            <Movies />
          </LayoutMain>
        }
      />
      <Route
        path="/profile"
        element={
          <LayoutMain>
            <Profile />
          </LayoutMain>
        }
      />
    </Routes>
  );
}
