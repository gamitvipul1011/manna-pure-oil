import { Navigate, useLocation } from 'react-router-dom';
import { useUserAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useUserAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-50 to-white">
        <div className="relative">
          <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-brand-purple-600"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-brand-green-500 text-2xl">
            🌿
          </div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    // Redirect to login with the page they tried to access
    return (
      <Navigate 
        to="/login" 
        state={{ 
          from: location.pathname,
          message: 'Please login to continue'
        }} 
        replace 
      />
    );
  }

  return children;
};

export default ProtectedRoute;
