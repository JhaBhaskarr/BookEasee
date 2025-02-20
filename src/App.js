import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import ProductsPage from './ProductsPage';
import WishlistPage from './WishlistPage';
import OrdersPage from './OrdersPage';
import CartPage from './CartPage';
import GenrePage from './GenrePage';
import FictionPage from './FictionPage';
import MysteryPage from './MysteryPage';
import NonFictionPage from './NonFictionPage';
import SciFiPage from './SciFiPage';
import RomancePage from './RomancePage';
import ThrillerPage from './ThrillerPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

function App() {
  const isLoggedIn = localStorage.getItem('loggedInUser') !== null;
  return (
    <Router>
      <Routes>
      <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/genre/:genreName" element={<GenrePage />} />
        <Route path="/genre/fiction" element={<FictionPage />} />
        <Route path="/genre/mystery" element={<MysteryPage />} />
        <Route path="/genre/sci-fi" element={<SciFiPage />} />
        <Route path="/genre/romance" element={<RomancePage />} />
        <Route path="/genre/thriller" element={<ThrillerPage />} />
        <Route path="/genre/non-fiction" element={<NonFictionPage />} />
      </Routes>
    </Router>
  );
}

export default App;