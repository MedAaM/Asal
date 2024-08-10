import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Login from './pages/login page/Login';
import ProfilePage from './pages/mondoub pages/profile page/ProfilePage';
import SignUp from './pages/sign up page/SignUp';

function App() {
  return (
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
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/*" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
