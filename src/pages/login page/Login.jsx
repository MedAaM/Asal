import React, { useState, useEffect } from 'react';
import './login.css';
import { usePostData } from '../../hooks/usePostData';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { dispatch, auth } = useAuthContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { data, loading, error, postData } = usePostData('user/login', false); // Adjust the API endpoint as needed
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      localStorage.setItem('auth', JSON.stringify(data));
      dispatch({ type: "LOGIN", payload: data });
    }
  }, [data, dispatch]); 
  
  useEffect(() => {
    if (auth) {
      navigate('/profile/home');
    }
  }, [auth, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postData({ email, password });
  };

  return (
    <div className="login--container">
      <form onSubmit={handleSubmit} className="form">
        <h1 className="form__title">Sign Up</h1>
        <p className="form__description">Get unlimited access to the latest design trends</p>

        <div className="form__group">
          <input
            type="text"
            id="email"
            className="form__input"
            placeholder=" "
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email" className="form__label">Email</label>
        </div>

        <div className="form__group">
          <input
            type="password"
            id="password"
            className="form__input"
            placeholder=" "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password" className="form__label">Password</label>
        </div>

        <button className="form__button" type="submit" disabled={loading}>
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>

        {error && <p className="form__error">Error: {error}</p>}
        {data && <p className="form__success">Success: {data.token}</p>}
      </form>
    </div>
  );
}

export default Login;
