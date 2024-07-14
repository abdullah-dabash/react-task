import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';
import Nav from './nav';

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
      <Nav/>
      <div className="bg-gray-100 p-6">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">Your Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 rounded-md border border-gray-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Your Email:</label>
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
            <label htmlFor="message" className="block mb-2">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 rounded-md border border-gray-300 resize-none"
              style={{ minHeight: '100px' }}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUsButton;
