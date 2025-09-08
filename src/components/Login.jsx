import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/index.css';

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && user) {
      navigate('/welcome');
    }
  }, [isAuthenticated, user, navigate]);

  return (
    <div>
      <h1>Login Screen</h1>
      <button onClick={() => loginWithRedirect()}>Log In with Auth0</button>
    </div>
  );
};

export default Login;