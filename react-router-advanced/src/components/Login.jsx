import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const login = () => {
    localStorage.setItem('isAuthenticated', 'true');
    navigate('/profile');
  };

  return (
    <div>
      <h1>Login (Simulated)</h1>
      <p>Click the button to simulate logging in.</p>
      <button onClick={login}>Login</button>
    </div>
  );
}
