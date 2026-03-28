import React, { createContext, useState, useContext, useEffect } from 'react';
import { adminAuthAPI } from '../utils/api';

const AdminAuthContext = createContext();

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error('useAdminAuth must be used within AdminAuthProvider');
  }
  return context;
};

export const AdminAuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      try {
        const response = await adminAuthAPI.verify();
        setAdmin(response.data.admin);
      } catch (error) {
        localStorage.removeItem('adminToken');
      }
    }
    setLoading(false);
  };

  const login = async (credentials) => {
    const response = await adminAuthAPI.login(credentials);
    localStorage.setItem('adminToken', response.data.token);
    setAdmin(response.data.admin);
    return response.data;
  };

  const logout = () => {
    localStorage.removeItem('adminToken');
    setAdmin(null);
  };

  return (
    <AdminAuthContext.Provider value={{ admin, loading, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
};
