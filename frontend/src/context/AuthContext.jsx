import React, { createContext, useState, useContext, useEffect } from 'react';
import { userAuthAPI } from '../utils/api';
import { toast } from 'react-toastify';

const UserAuthContext = createContext();

export const useUserAuth = () => {
  const context = useContext(UserAuthContext);
  if (!context) {
    throw new Error('useUserAuth must be used within UserAuthProvider');
  }
  return context;
};

export const UserAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication on mount
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const token = localStorage.getItem('userToken');
    if (token) {
      try {
        const response = await userAuthAPI.verify();
        setUser(response.data.user);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Token verification failed:', error);
        localStorage.removeItem('userToken');
        setUser(null);
        setIsAuthenticated(false);
      }
    }
    setLoading(false);
  };

  const register = async (userData) => {
    try {
      const response = await userAuthAPI.register(userData);
      localStorage.setItem('userToken', response.data.token);
      setUser(response.data.user);
      setIsAuthenticated(true);
      
      toast.success(`Welcome ${response.data.user.name}! Registration successful.`, {
        position: "top-right",
        autoClose: 3000,
      });
      
      return response.data;
    } catch (error) {
      const errorMsg = error.response?.data?.message || 'Registration failed';
      toast.error(errorMsg, {
        position: "top-right",
        autoClose: 3000,
      });
      throw error;
    }
  };

  const login = async (credentials) => {
    try {
      const response = await userAuthAPI.login(credentials);
      localStorage.setItem('userToken', response.data.token);
      setUser(response.data.user);
      setIsAuthenticated(true);
      
      toast.success(`Welcome back, ${response.data.user.name}!`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
      });
      
      return response.data;
    } catch (error) {
      const errorMsg = error.response?.data?.message || 'Login failed';
      toast.error(errorMsg, {
        position: "top-right",
        autoClose: 3000,
      });
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('userToken');
    setUser(null);
    setIsAuthenticated(false);
    
    toast.info('You have been logged out successfully', {
      position: "top-right",
      autoClose: 2000,
    });
  };

  const updateProfile = async (data) => {
    try {
      const response = await userAuthAPI.updateProfile(data);
      setUser(response.data.user);
      
      toast.success('Profile updated successfully!', {
        position: "top-right",
        autoClose: 2000,
      });
      
      return response.data;
    } catch (error) {
      const errorMsg = error.response?.data?.message || 'Profile update failed';
      toast.error(errorMsg, {
        position: "top-right",
        autoClose: 3000,
      });
      throw error;
    }
  };

  return (
    <UserAuthContext.Provider 
      value={{ 
        user, 
        loading, 
        isAuthenticated,
        login, 
        register,
        logout,
        updateProfile,
        checkAuth
      }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};
