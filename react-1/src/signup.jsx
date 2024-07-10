import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';
import HomepageButton from './home'; // Adjust import path as necessary

function SignUpButton() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save form data to local storage (optional)
    localStorage.setItem('formData', JSON.stringify(formData));

    // Redirect to home page
    window.location.href = '/';  // Direct redirection method

    // Alternatively, if you're using React Router, you could use:
    // history.push('/');
  };

  return (
    <>
      <Header />
      <div style={{ padding: '20px' }}>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }} htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', fontSize: '16px' }}
              required
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }} htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', fontSize: '16px' }}
              required
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }} htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', fontSize: '16px' }}
              required
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }} htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', fontSize: '16px' }}
              required
            />
          </div>
          <button type="submit" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Sign Up</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default SignUpButton;
