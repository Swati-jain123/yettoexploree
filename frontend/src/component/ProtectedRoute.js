import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function ProtectedRoute({ children }) {
  const { user, role } = useAuth();

  // Handle the case where user or role is not yet determined
  if (user === null || role === null) {
    return <div>Loading...</div>; // You can add a loading spinner here if preferred
  }

  // Redirect to home if user is not logged in or doesn't have admin role
  if (!user || role !== 'admin') {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;
