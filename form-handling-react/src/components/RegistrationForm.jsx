import React, { useState } from 'react';

function RegistrationForm() {
  // Step 1: Create state for each input
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Step 2: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    // Basic validation
    if (!username || !email || !password) {
      alert('Please fill all fields!');
      return;
    }
    // Show success message and log form data
    alert(`Registration successful!\nUsername: ${username}\nEmail: ${email}`);
    console.log({ username, email, password });
    
    // Optional: reset form after submission
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration Form</h2>
      <div style={{ marginBottom: '10px' }}>
        <label>Username:</label><br />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Email:</label><br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Password:</label><br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;

