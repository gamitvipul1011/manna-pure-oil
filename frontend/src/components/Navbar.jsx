import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaUser, FaShoppingCart, FaSearch, FaWhatsapp, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useUserAuth } from '../context/AuthContext';
import { useState } from 'react';
import logoImg from '../assets/logo1.jpeg';

const Navbar = ({ cartCount = 0 }) => {
  const { t, i18n } = useTranslation();
  const { user, isAuthenticated, logout } = useUserAuth();
  const navigate = useNavigate();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang);
  };

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
    navigate('/');
  };

  const navLinks = [
    { path: '/',        label: t('home') },
    { path: '/products',label: t('products') },
    { path: '/about',   label: t('about') },
    { path: '/blogs',   label: t('blog') },
    { path: '/contact', label: t('contact') },
  ];

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-brand-purple-800 via-brand-purple-700 to-brand-purple-800 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">

          {/* ✅ LOGO - actual image */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-15 h-14 rounded-full overflow-hidden border-2 border-white/30 shadow-lg group-hover:scale-105 transition-transform duration-500 bg-white">
              <img src={logoImg} alt="Manna Pure Oil" className="w-full h-full object-cover" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-green-500 tracking-wide leading-tight">Manna Pure Oil</h1>
              <p className="text-xs text-green-300 font-medium">100% Natural & Pure</p>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-6 font-semibold text-sm">
            {navLinks.map((item) => (
              <NavLink key={item.path} to={item.path}
                className={({ isActive }) =>
                  `relative py-1 transition-all duration-200 ${isActive
                    ? 'text-brand-orange-400'
                    : 'text-white hover:text-brand-green-300'}`
                }>
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-3">

            {/* Language Toggle */}
            <div className="flex items-center bg-white/10 rounded-full overflow-hidden text-xs font-bold">
              <button onClick={() => changeLang('en')}
                className={`px-3 py-1.5 transition-all ${i18n.language === 'en' ? 'bg-brand-orange-500 text-white' : 'text-white hover:text-brand-green-300'}`}>
                EN
              </button>
              <button onClick={() => changeLang('gu')}
                className={`px-3 py-1.5 transition-all ${i18n.language === 'gu' ? 'bg-brand-orange-500 text-white' : 'text-white hover:text-brand-green-300'}`}>
                GU
              </button>
            </div>

            {/* User */}
            {isAuthenticated ? (
              <div className="relative">
                <button onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-full hover:bg-white/20 transition">
                  <FaUser className="text-white text-sm" />
                  <span className="text-white text-sm font-semibold hidden sm:inline">{user?.name?.split(' ')[0]}</span>
                </button>
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl py-2 z-50 border border-gray-100">
                    <div className="px-4 py-3 border-b">
                      <p className="font-bold text-brand-purple-700 text-sm">{user?.name}</p>
                      <p className="text-xs text-gray-500">{user?.email}</p>
                    </div>
                    <button onClick={handleLogout}
                      className="w-full text-left px-4 py-2.5 hover:bg-red-50 text-red-600 flex items-center gap-2 transition text-sm">
                      <FaSignOutAlt /><span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login"
                className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-full hover:bg-white/20 transition">
                <FaUser className="text-white text-sm" />
                <span className="text-white text-sm font-semibold hidden sm:inline">Login</span>
              </Link>
            )}

            {/* Cart */}
            <Link to="/cart" className="relative p-2">
              <FaShoppingCart className="text-xl text-white hover:text-brand-orange-400 transition" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold shadow">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white p-2">
              {mobileOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="md:hidden bg-brand-purple-800 border-t border-white/10 px-4 pb-4">
            {navLinks.map(item => (
              <Link key={item.path} to={item.path} onClick={() => setMobileOpen(false)}
                className="block py-3 text-white font-semibold border-b border-white/10 hover:text-brand-orange-400 transition">
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* WhatsApp float */}
      <a href="https://wa.me/917874239595?text=Hello%20I%20want%20to%20order%20Manna%20Pure%20Oil"
        target="_blank" rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300">
        <FaWhatsapp className="text-3xl" />
      </a>

      <div className="h-[72px]"></div>
    </>
  );
};

export default Navbar;
