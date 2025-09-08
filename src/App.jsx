import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from './actions/authActions';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Welcome from './components/Welcome';
import PrivateRoute from './components/PrivateRoute';
import './styles/index.css';

function App() {
  const { isAuthenticated, user, getAccessTokenSilently, isLoading } = useAuth0();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTokenAndSetUser = async () => {
      if (isAuthenticated && user) {
        try {
          const token = await getAccessTokenSilently();
          dispatch(setCurrentUser(user, token));
        } catch (error) {
          console.error('Error fetching token:', error);
        }
      }
    };

    fetchTokenAndSetUser();
  }, [isAuthenticated, user, getAccessTokenSilently, dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<PrivateRoute component={Welcome} />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;