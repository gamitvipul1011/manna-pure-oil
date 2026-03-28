import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link, useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Contexts
import { UserAuthProvider } from './context/AuthContext';
import { AdminAuthProvider, useAdminAuth } from './context/AdminAuthContext';
import { LanguageProvider } from './context/LanguageContext';
import { CartProvider, useCart } from './context/CartContext';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ProtectedRoute from './components/ProtectedRoute';
import Loader from './components/Loader';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
import Blogs from "./pages/Blogs";
import BlogPost from './pages/BlogPost';
import Login from './pages/Login';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound';

// Admin Pages
import AdminLogin from './pages/admin/AdminLogin';
import Dashboard from './pages/admin/Dashboard';
import ProductManagement from './pages/admin/ProductManagement';
import CategoryManagement from './pages/admin/CategoryManagement';

// Admin Layout Component
const AdminLayout = ({ children }) => {
  const { admin, logout } = useAdminAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (!admin) {
    return <Navigate to="/admin/login" replace />;
  }

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      logout();
      navigate('/admin/login');
    }
  };

  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { path: '/admin/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/admin/products', label: 'Products', icon: '📦' },
    { path: '/admin/categories', label: 'Categories', icon: '📁' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100">
      {/* Admin Navigation */}
      <nav className="bg-gradient-to-r from-brand-purple-800 via-brand-purple-700 to-brand-purple-900 shadow-2xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/admin/dashboard" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-2">
                <svg className="w-8 h-8 text-brand-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Admin Panel</h1>
                <p className="text-xs text-brand-green-300">Maana Pure Oil</p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? 'bg-white/20 text-brand-orange-400 shadow-lg'
                      : 'text-white hover:text-brand-orange-400 hover:bg-white/10'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              ))}
              
              <a 
                href="/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-white hover:text-brand-green-400 transition-colors font-medium px-4 py-2 rounded-lg hover:bg-white/10"
              >
                <span>🌐</span>
                <span>View Site</span>
              </a>
              
              {/* User Info & Logout */}
              <div className="flex items-center space-x-3 pl-4 ml-4 border-l border-white/20">
                <div className="text-right hidden lg:block">
                  <p className="text-white font-semibold text-sm">{admin?.name || 'Admin'}</p>
                  <p className="text-brand-green-300 text-xs">{admin?.email}</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="px-5 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105 text-sm"
                >
                  Logout
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all ${
                    isActive(item.path)
                      ? 'bg-white/20 text-brand-orange-400'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              ))}
              <a 
                href="/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-white hover:bg-white/10 px-4 py-3 rounded-lg font-medium"
              >
                <span>🌐</span>
                <span>View Site</span>
              </a>
              <div className="px-4 py-3 bg-white/10 rounded-lg">
                <p className="text-white font-semibold text-sm">{admin?.name}</p>
                <p className="text-brand-green-300 text-xs mb-2">{admin?.email}</p>
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-2 bg-red-500 text-white font-semibold rounded-lg"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Admin Content */}
      <div className="max-w-7xl mx-auto">
        {children}
      </div>

      {/* Admin Footer */}
      <footer className="bg-white/50 backdrop-blur-sm mt-20 py-6 border-t border-purple-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Maana Pure Oil - Admin Panel
          </p>
        </div>
      </footer>
    </div>
  );
};

// Public Layout Component with Cart Count
const PublicLayoutInner = ({ children }) => {
  const { getCartCount } = useCart();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Loader />
      <Navbar cartCount={getCartCount()} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

// Main App Component
function App() {
  return (
    <Router>
      <Loader />
      <LanguageProvider>
        <UserAuthProvider>
          <AdminAuthProvider>
            <CartProvider>
              <Routes>
                {/* ========== PUBLIC ROUTES ========== */}
                <Route path="/" element={<PublicLayoutInner><Home /></PublicLayoutInner>} />
                <Route path="/products" element={<PublicLayoutInner><Products /></PublicLayoutInner>} />
                <Route path="/product/:id" element={<PublicLayoutInner><ProductDetail /></PublicLayoutInner>} />
                <Route path="/about" element={<PublicLayoutInner><About /></PublicLayoutInner>} />
                <Route path="/blogs" element={<PublicLayoutInner><Blogs /></PublicLayoutInner>} />
                <Route path="/blog/:id" element={<PublicLayoutInner><BlogPost /></PublicLayoutInner>} />
                <Route path="/contact" element={<PublicLayoutInner><Contact /></PublicLayoutInner>} />
                <Route path="/login" element={<PublicLayoutInner><Login /></PublicLayoutInner>} />
                <Route path="/privacy-policy" element={<PublicLayoutInner><PrivacyPolicy /></PublicLayoutInner>} />
                <Route path="/terms-and-conditions" element={<PublicLayoutInner><TermsAndConditions /></PublicLayoutInner>} />
                <Route path="/refund-policy" element={<PublicLayoutInner><RefundPolicy /></PublicLayoutInner>} />
                <Route path="/shipping-policy" element={<PublicLayoutInner><ShippingPolicy /></PublicLayoutInner>} />
                <Route path="/faq" element={<PublicLayoutInner><FAQ /></PublicLayoutInner>} />

                {/* ========== PROTECTED ROUTES (Login Required) ========== */}
                <Route 
                  path="/cart" 
                  element={
                    <ProtectedRoute>
                      <PublicLayoutInner><Cart /></PublicLayoutInner>
                    </ProtectedRoute>
                  } 
                />

                {/* ========== ADMIN ROUTES ========== */}
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route 
                  path="/admin/dashboard" 
                  element={
                    <AdminLayout>
                      <Dashboard />
                    </AdminLayout>
                  } 
                />
                <Route 
                  path="/admin/products" 
                  element={
                    <AdminLayout>
                      <ProductManagement />
                    </AdminLayout>
                  } 
                />
                <Route 
                  path="/admin/categories" 
                  element={
                    <AdminLayout>
                      <CategoryManagement />
                    </AdminLayout>
                  } 
                />

                {/* ========== REDIRECTS ========== */}
                <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
                <Route path="*" element={<PublicLayoutInner><NotFound /></PublicLayoutInner>} />
              </Routes>

              {/* Toast Notifications */}
              <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                style={{ zIndex: 9999 }}
                toastClassName="shadow-2xl"
                bodyClassName="text-sm font-medium"
                progressClassName="bg-gradient-to-r from-brand-orange-500 to-brand-orange-600"
              />
            </CartProvider>
          </AdminAuthProvider>
        </UserAuthProvider>
      </LanguageProvider>
    </Router>
  );
}

export default App;
