import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import './App.css';
import Login from './pages/login page/Login';
import ProfilePage from './pages/mondoub pages/profile page/ProfilePage';
import SignUp from './pages/sign up page/SignUp';
import { useAuthContext } from './hooks/useAuthContext';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { theme } from './configs/theme';


function App() {
  const { auth, dispatch } = useAuthContext();

  useEffect(() => {
    // Check local storage for auth data and dispatch it
    const storedAuth = localStorage.getItem('auth');
    if (storedAuth) {
      dispatch({ type: 'LOGIN', payload: JSON.parse(storedAuth) });
    }
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/profile/home">Profile</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/signup"
            element={<SignUp />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/profile/*"
            element={<ProfilePage />}
          />
        </Routes>
      </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;
