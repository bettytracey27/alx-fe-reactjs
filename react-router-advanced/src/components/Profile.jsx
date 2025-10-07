import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <p>This page is protected and requires login.</p>

      <div style={{ marginBottom: 12 }}>
        <Link to="details" style={{ marginRight: 8 }}>Details</Link>
        <Link to="settings">Settings</Link>
      </div>

      {/* Nested routes will render here */}
      <Outlet />
    </div>
  );
}
