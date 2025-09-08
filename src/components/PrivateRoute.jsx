import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component }) => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const isAuthorized = user?.email_verified;

  if (!isAuthorized) {
    return <Navigate to="/login" />;
  }

  return <Component />;
};

export default PrivateRoute;