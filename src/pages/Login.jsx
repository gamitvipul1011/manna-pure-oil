import { useState } from "react";
import { FaEnvelope, FaLock, FaUser, FaPhone } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useUserAuth } from "../context/AuthContext";

const Login = () => {
  const { t } = useTranslation();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", password: "", phone: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login, register } = useUserAuth();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      if (isLogin) {
        await login({ email: formData.email, password: formData.password });
      } else {
        if (!formData.name || !formData.email || !formData.password) {
          setError("Please fill all required fields / કૃપા કરીને બધા જરૂરી ફીલ્ડ ભરો.");
          setLoading(false);
          return;
        }
        await register(formData);
      }
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || (isLogin ? "Login failed" : "Registration failed"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-purple-700 via-brand-purple-600 to-brand-orange-500 px-4">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-brand-purple-700 mb-1">
            {isLogin ? t('loginTitle') : t('registerTitle')}
          </h2>
          <p className="text-brand-purple-400 text-sm mb-1">
            {isLogin ? ' ' : 'login account'}
          </p>
          <p className="text-gray-500 text-sm">
            {isLogin ? "Login to continue shopping" : "Register to start shopping"}
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4 text-sm">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {!isLogin && (
            <div className="relative">
              <FaUser className="absolute left-4 top-4 text-gray-400" />
              <input type="text" name="name" placeholder={t('yourName')}
                value={formData.name} onChange={handleChange} required
                className="w-full pl-12 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-purple-500" />
            </div>
          )}
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-4 text-gray-400" />
            <input type="email" name="email" placeholder={t('yourEmail')}
              value={formData.email} onChange={handleChange} required
              className="w-full pl-12 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-purple-500" />
          </div>
          {!isLogin && (
            <div className="relative">
              <FaPhone className="absolute left-4 top-4 text-gray-400" />
              <input type="tel" name="phone" placeholder={`${t('phone')} / ફોન (Optional)`}
                value={formData.phone} onChange={handleChange}
                className="w-full pl-12 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-purple-500" />
            </div>
          )}
          <div className="relative">
            <FaLock className="absolute left-4 top-4 text-gray-400" />
            <input type="password" name="password" placeholder={`${t('password')} / પાસવર્ડ`}
              value={formData.password} onChange={handleChange} required
              className="w-full pl-12 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-purple-500" />
          </div>
          <button type="submit" disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-brand-orange-500 to-brand-orange-600 text-white rounded-full font-bold hover:shadow-xl transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50">
            {loading ? "Please wait..." : (isLogin ? t('login') : t('register'))}
          </button>
        </form>

        <div className="text-center mt-6">
          <button onClick={() => { setIsLogin(!isLogin); setError(""); setFormData({ name: "", email: "", password: "", phone: "" }); }}
            className="text-brand-purple-600 hover:text-brand-orange-500 font-semibold transition">
            {isLogin ? `${t('dontHaveAccount')} ${t('registerHere')}` : `${t('alreadyHaveAccount')} ${t('loginHere')}`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
