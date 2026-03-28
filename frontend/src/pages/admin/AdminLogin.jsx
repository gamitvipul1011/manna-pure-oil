import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLock, FaUser, FaLeaf } from 'react-icons/fa';
import { useAdminAuth } from '../../context/AdminAuthContext';
import { toast } from 'react-toastify';

const AdminLogin = () => {
  const navigate = useNavigate();
  const { login } = useAdminAuth();
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await login(credentials);
      toast.success('Admin login successful!');
      navigate('/admin/dashboard');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Admin login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-purple-900 via-brand-purple-800 to-brand-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-green-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-orange-400 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 w-full max-w-md px-6">
        {/* Logo & Title */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <FaLeaf className="text-brand-green-400 text-6xl animate-pulse" />
              <FaLeaf className="text-brand-orange-400 text-4xl absolute top-2 -right-2 animate-pulse delay-300" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Admin Panel</h1>
          <p className="text-brand-green-300 text-lg">Maana Pure Oil</p>
        </div>

        {/* Login Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Admin Login
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FaUser className="text-brand-green-400 group-focus-within:text-brand-orange-400 transition-colors" />
              </div>
              <input
                type="email"
                value={credentials.email}
                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/30 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand-orange-400 focus:border-transparent transition-all backdrop-blur-sm"
                placeholder="Email Address"
                required
              />
            </div>

            {/* Password Input */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FaLock className="text-brand-green-400 group-focus-within:text-brand-orange-400 transition-colors" />
              </div>
              <input
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/30 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand-orange-400 focus:border-transparent transition-all backdrop-blur-sm"
                placeholder="Password"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-brand-orange-500 to-brand-orange-600 text-white font-bold rounded-2xl hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Logging in...
                </span>
              ) : (
                'Login to Admin Panel'
              )}
            </button>
          </form>

          {/* Back to Website Link */}
          <div className="mt-6 text-center">
            <a 
              href="/"
              className="text-brand-green-300 hover:text-brand-orange-400 transition-colors text-sm font-medium"
            >
              ← Back to Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
