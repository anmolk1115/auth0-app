import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../actions/authActions';
import userFallbackIcon from '../assets/icon-user.svg';
import '../styles/index.css';

const Welcome = () => {
  const { logout } = useAuth0();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  if (!user) {
    return <div>Loading user data...</div>;
  }

  return (
    <div>
      <h1>Welcome Screen</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <img src={user.picture ?? userFallbackIcon} alt="Profile" width="100" />
      <p>Other details: {JSON.stringify(user, null, 2)}</p>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default Welcome;