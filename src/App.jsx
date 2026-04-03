import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { UserAuthProvider } from './context/AuthContext';
import { LanguageProvider } from './context/LanguageContext';
import { CartProvider, useCart } from './context/CartContext';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Loader from './components/Loader';

import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import BlogPost from './pages/BlogPost';
import Login from './pages/Login';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound';

const Layout = ({ children }) => {
  const { getCartCount } = useCart();
  return (
    <div className="min-h-screen flex flex-col">
      <Loader />
      <Navbar cartCount={getCartCount()} />
      <main className="flex-grow">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

function App() {
  return (
    <Router>
      <LanguageProvider>
        <UserAuthProvider>
          <CartProvider>
            <Routes>
              <Route path="/"                    element={<Layout><Home /></Layout>} />
              <Route path="/products"            element={<Layout><Products /></Layout>} />
              <Route path="/product/:id"         element={<Layout><ProductDetail /></Layout>} />
              <Route path="/about"               element={<Layout><About /></Layout>} />
              <Route path="/blogs"               element={<Layout><Blogs /></Layout>} />
              <Route path="/blog/:id"            element={<Layout><BlogPost /></Layout>} />
              <Route path="/contact"             element={<Layout><Contact /></Layout>} />
              <Route path="/login"               element={<Layout><Login /></Layout>} />
              <Route path="/cart"                element={<Layout><Cart /></Layout>} />
              <Route path="/privacy-policy"      element={<Layout><PrivacyPolicy /></Layout>} />
              <Route path="/terms-and-conditions" element={<Layout><TermsAndConditions /></Layout>} />
              <Route path="/refund-policy"       element={<Layout><RefundPolicy /></Layout>} />
              <Route path="/shipping-policy"     element={<Layout><ShippingPolicy /></Layout>} />
              <Route path="/faq"                 element={<Layout><FAQ /></Layout>} />
              <Route path="*"                    element={<Layout><NotFound /></Layout>} />
            </Routes>
            <ToastContainer position="top-right" autoClose={3000} theme="light" style={{ zIndex: 9999 }} />
          </CartProvider>
        </UserAuthProvider>
      </LanguageProvider>
    </Router>
  );
}

export default App;
