import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBox, FaList, FaChartLine, FaUsers, FaLock, FaEye, FaEyeSlash, FaCheckCircle } from 'react-icons/fa';
import { productAPI, categoryAPI, adminAuthAPI } from '../../utils/api';
import { toast } from 'react-toastify';

const Dashboard = () => {
  const [stats, setStats] = useState({ totalProducts: 0, totalCategories: 0, recentProducts: [] });
  const [loading, setLoading] = useState(true);

  // Password change state
  const [pwForm, setPwForm] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' });
  const [pwLoading, setPwLoading] = useState(false);
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => { fetchStats(); }, []);

  const fetchStats = async () => {
    try {
      const [productsRes, categoriesRes] = await Promise.all([productAPI.getAll(), categoryAPI.getAll()]);
      setStats({
        totalProducts: productsRes.data.length,
        totalCategories: categoriesRes.data.length,
        recentProducts: productsRes.data.slice(0, 5)
      });
    } catch (error) {
      console.error('Failed to fetch stats', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    if (pwForm.newPassword !== pwForm.confirmPassword) {
      toast.error('New passwords do not match!');
      return;
    }
    if (pwForm.newPassword.length < 6) {
      toast.error('Password must be at least 6 characters!');
      return;
    }
    setPwLoading(true);
    try {
      await adminAuthAPI.changePassword({
        currentPassword: pwForm.currentPassword,
        newPassword: pwForm.newPassword
      });
      toast.success('✅ Password changed successfully!');
      setPwForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to change password');
    } finally {
      setPwLoading(false);
    }
  };

  const cards = [
    { title: 'Total Products', value: stats.totalProducts, icon: <FaBox className="text-5xl" />, color: 'from-blue-500 to-blue-600', link: '/admin/products' },
    { title: 'Categories', value: stats.totalCategories, icon: <FaList className="text-5xl" />, color: 'from-green-500 to-green-600', link: '/admin/categories' },
    { title: 'Total Sales', value: '₹0', icon: <FaChartLine className="text-5xl" />, color: 'from-orange-500 to-orange-600', link: '#' },
    { title: 'Customers', value: '0', icon: <FaUsers className="text-5xl" />, color: 'from-purple-500 to-purple-600', link: '#' }
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-brand-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-brand-purple-800 mb-8">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {cards.map((card, index) => (
          <Link
            key={index}
            to={card.link}
            className="bg-white rounded-2xl shadow-lg hover:shadow-premium transition-all duration-300 transform hover:-translate-y-2 p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-4 rounded-2xl bg-gradient-to-br ${card.color} text-white`}>
                {card.icon}
              </div>
            </div>
            <h3 className="text-gray-600 text-sm font-semibold mb-1">{card.title}</h3>
            <p className="text-3xl font-bold text-brand-purple-800">{card.value}</p>
          </Link>
        ))}
      </div>

      {/* Two column layout: Recent Products + Change Password */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Recent Products */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-brand-purple-800 mb-6">Recent Products</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-3 font-semibold text-gray-700 text-sm">Image</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700 text-sm">Name</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700 text-sm">Price</th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-700 text-sm">Stock</th>
                </tr>
              </thead>
              <tbody>
                {stats.recentProducts.map((product) => (
                  <tr key={product._id} className="border-b border-gray-100 hover:bg-purple-50 transition-colors">
                    <td className="py-3 px-3">
                      <img
                        src={product.image || '/api/placeholder/48/48'}
                        alt={product.name}
                        className="w-10 h-10 object-cover rounded-lg"
                      />
                    </td>
                    <td className="py-3 px-3 font-medium text-gray-800 text-sm">{product.name}</td>
                    <td className="py-3 px-3 text-gray-600 text-sm">₹{product.price}</td>
                    <td className="py-3 px-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${product.inStock !== false ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'}`}>
                        {product.inStock !== false ? 'In Stock' : 'Out'}
                      </span>
                    </td>
                  </tr>
                ))}
                {stats.recentProducts.length === 0 && (
                  <tr><td colSpan="4" className="text-center py-8 text-gray-400">No products yet</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* ✅ Change Password Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-brand-purple-600 to-brand-purple-700 rounded-2xl">
              <FaLock className="text-white text-xl" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-brand-purple-800">Change Password</h2>
              <p className="text-gray-400 text-sm">Update your admin password</p>
            </div>
          </div>

          <form onSubmit={handlePasswordChange} className="space-y-4">

            {/* Current Password */}
            <div>
              <label className="text-xs font-bold text-gray-500 mb-1 block uppercase tracking-wide">
                Current Password
              </label>
              <div className="relative">
                <input
                  type={showCurrent ? 'text' : 'password'}
                  value={pwForm.currentPassword}
                  onChange={e => setPwForm({ ...pwForm, currentPassword: e.target.value })}
                  required
                  placeholder="Enter current password"
                  className="w-full border-2 border-gray-200 px-4 py-3 pr-12 rounded-xl focus:border-brand-purple-500 focus:outline-none text-sm transition"
                />
                <button
                  type="button"
                  onClick={() => setShowCurrent(!showCurrent)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showCurrent ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* New Password */}
            <div>
              <label className="text-xs font-bold text-gray-500 mb-1 block uppercase tracking-wide">
                New Password
              </label>
              <div className="relative">
                <input
                  type={showNew ? 'text' : 'password'}
                  value={pwForm.newPassword}
                  onChange={e => setPwForm({ ...pwForm, newPassword: e.target.value })}
                  required
                  placeholder="Enter new password"
                  className="w-full border-2 border-gray-200 px-4 py-3 pr-12 rounded-xl focus:border-brand-purple-500 focus:outline-none text-sm transition"
                />
                <button
                  type="button"
                  onClick={() => setShowNew(!showNew)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showNew ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Confirm New Password */}
            <div>
              <label className="text-xs font-bold text-gray-500 mb-1 block uppercase tracking-wide">
                Confirm New Password
              </label>
              <div className="relative">
                <input
                  type={showConfirm ? 'text' : 'password'}
                  value={pwForm.confirmPassword}
                  onChange={e => setPwForm({ ...pwForm, confirmPassword: e.target.value })}
                  required
                  placeholder="Re-enter new password"
                  className={`w-full border-2 px-4 py-3 pr-12 rounded-xl focus:outline-none text-sm transition ${
                    pwForm.confirmPassword && pwForm.newPassword !== pwForm.confirmPassword
                      ? 'border-red-400 focus:border-red-500'
                      : pwForm.confirmPassword && pwForm.newPassword === pwForm.confirmPassword
                      ? 'border-green-400 focus:border-green-500'
                      : 'border-gray-200 focus:border-brand-purple-500'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirm ? <FaEyeSlash /> : <FaEye />}
                </button>
                {pwForm.confirmPassword && pwForm.newPassword === pwForm.confirmPassword && (
                  <FaCheckCircle className="absolute right-9 top-1/2 -translate-y-1/2 text-green-500 text-xs" />
                )}
              </div>
              {pwForm.confirmPassword && pwForm.newPassword !== pwForm.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">Passwords do not match</p>
              )}
            </div>

            <button
              type="submit"
              disabled={pwLoading || (pwForm.confirmPassword && pwForm.newPassword !== pwForm.confirmPassword)}
              className="w-full py-3 bg-gradient-to-r from-brand-purple-600 to-brand-purple-700 text-white font-bold rounded-xl hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed mt-2"
            >
              {pwLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Changing...
                </span>
              ) : (
                '🔒 Change Password'
              )}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
