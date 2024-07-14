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

    // Save email to indicate user is logged in
    localStorage.setItem('email', formData.email);

    // Redirect to home page
    window.location.href = '/';  // Direct redirection method

    // Alternatively, if you're using React Router, you could use:
    // history.push('/');
  };

  return (
    <>
      <Header />
      <div className="bg-gray-100 p-6">
        <h2 className="text-3xl font-bold mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="firstName" className="block mb-2">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 rounded-md border border-gray-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block mb-2">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-2 rounded-md border border-gray-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded-md border border-gray-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 rounded-md border border-gray-300"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
          >
            Sign Up
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default SignUpButton;
