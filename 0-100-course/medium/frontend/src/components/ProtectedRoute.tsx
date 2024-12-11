// components/ProtectedRoute.tsx
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useUser } from "../context/useUser";

export const ProtectedRoute = () => {
  const { isAuthenticated, user } = useUser();
  const location = useLocation();
  
  console.log('ProtectedRoute Debug:', {
    isAuthenticated,
    user,
    currentPath: location.pathname,
    localStorage: {
      token: localStorage.getItem('token'),
      user: localStorage.getItem('user'),
    }
  });

  if (!isAuthenticated) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return <Outlet />;
};
