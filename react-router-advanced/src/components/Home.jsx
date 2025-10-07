import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the React Router Advanced demo.</p>
      <p>Try: <Link to="/profile">Profile</Link>, <Link to="/post/5">Post 5</Link></p>
    </div>
  );
}
