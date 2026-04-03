import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaUser, FaShoppingCart, FaWhatsapp, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useUserAuth } from '../context/AuthContext';
import { useState, useEffect } from 'react';
import logoImg from '../assets/logo5.jpeg';

const Navbar = ({ cartCount = 0 }) => {
  const { t, i18n } = useTranslation();
  const { user, isAuthenticated, logout } = useUserAuth();
  const navigate = useNavigate();

  const [showUserMenu, setShowUserMenu] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ✅ Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    { path: '/', label: t('home') },
    { path: '/products', label: t('products') },
    { path: '/about', label: t('about') },
    { path: '/blogs', label: t('blog') },
    { path: '/contact', label: t('contact') },
  ];

  return (
    <>
      {/* ✅ UPDATED HEADER */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/70 backdrop-blur-lg border-b border-white/10 shadow-lg"
            : "bg-gradient-to-r from-brand-purple-800 via-brand-purple-700 to-brand-purple-800"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 group">

            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden 
           
            transition-all duration-300 ease-out 
            group-hover:scale-110">

              <div className="absolute inset-0 rounded-full 
              bg-green-400/10 opacity-0 
              group-hover:opacity-100 transition duration-300"></div>

              <img
                src={logoImg}
                alt="Manna Pure Oil"
                className="relative w-full h-full object-contain p-1 z-10"
              />
            </div>

            <div className="hidden sm:block leading-tight">

  <h1 className="text-lg sm:text-xl font-bold tracking-wide 
  text-white">
    Manna <span className="text-green-400">Pure Oil</span>
  </h1>

  <p className="text-xs text-gray-300 tracking-wider font-medium">
    100% Natural & Pure
  </p>

</div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-6 font-semibold text-sm">
            {navLinks.map((item) => (
              <NavLink key={item.path} to={item.path}
                className={({ isActive }) =>
                  `relative py-1 transition-all duration-200 ${
                    isActive
                      ? 'text-brand-orange-400'
                      : 'text-white hover:text-green-400'
                  }`
                }>
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-3">

            {/* Language */}
            <div className="flex items-center bg-white/10 rounded-full overflow-hidden text-xs font-bold">
              <button onClick={() => changeLang('en')}
                className={`px-3 py-1.5 ${
                  i18n.language === 'en'
                    ? 'bg-brand-orange-500 text-white'
                    : 'text-white hover:text-green-400'
                }`}>
                EN
              </button>
              <button onClick={() => changeLang('gu')}
                className={`px-3 py-1.5 ${
                  i18n.language === 'gu'
                    ? 'bg-brand-orange-500 text-white'
                    : 'text-white hover:text-green-400'
                }`}>
                GU
              </button>
            </div>

            {/* USER */}
            {isAuthenticated ? (
              <div className="relative">
                <button onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-full hover:bg-white/20 transition">
                  <FaUser className="text-white text-sm" />
                  <span className="text-white text-sm font-semibold hidden sm:inline">
                    {user?.name?.split(' ')[0]}
                  </span>
                </button>

                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl py-2 z-50">
                    <div className="px-4 py-3 border-b">
                      <p className="font-bold text-sm">{user?.name}</p>
                      <p className="text-xs text-gray-500">{user?.email}</p>
                    </div>

                    <button onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-red-600 flex items-center gap-2 hover:bg-red-50">
                      <FaSignOutAlt /> Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login"
                className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-full hover:bg-white/20 transition">
                <FaUser className="text-white text-sm" />
                <span className="text-white text-sm hidden sm:inline">Login</span>
              </Link>
            )}

            {/* CART */}
            <Link to="/cart" className="relative p-2">
              <FaShoppingCart className="text-xl text-white hover:text-brand-orange-400" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* MOBILE BTN */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white p-2">
              {mobileOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-lg px-4 pb-4">
            {navLinks.map(item => (
              <Link key={item.path} to={item.path}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-white border-b border-white/10 hover:text-green-400">
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* WhatsApp */}
      <a href="https://wa.me/917874239595?text=Hello%20I%20want%20to%20order%20Manna%20Pure%20Oil"
        target="_blank" rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition">
        <FaWhatsapp className="text-3xl" />
      </a>

      <div className="h-[72px]"></div>
    </>
  );
};

export default Navbar;