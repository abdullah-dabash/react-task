import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';

function ContactUsButton() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
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

    // Handle form submission logic here (e.g., send data to server, clear form fields, etc.)
    console.log('Form submitted:', formData);

    // Clear form fields after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div>
      <Header />
      <div style={{ padding: '20px' }}>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', fontSize: '16px' }}
              required
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="email">Your Email:</label>
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
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', fontSize: '16px', minHeight: '100px' }}
              required
            />
          </div>
          <button type="submit" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUsButton;



