
import React from 'react';
import Header from './header';
import Nav from './nav';
import Footer from './footer';

const AboutUs = () => {
  const aboutUsStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f8f8f8',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    fontSize: '1.6rem',
    lineHeight: '1.6',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  };

  const subheadingStyle = {
    fontSize: '1.8rem',
    marginTop: '2rem',
    marginBottom: '1rem',
  };

  return (
    <div>
      <Header />
      <Nav />
      
      <div style={aboutUsStyle}>
        <h2 style={headingStyle}>About Us</h2>
        <p>Welcome to Our Company!</p>
        
        <p>
          At [Your Company Name], we are dedicated to [describe your mission or purpose]. 
          Founded in [year], we have been [briefly describe your journey or growth].
        </p>

        <h3 style={subheadingStyle}>Our Mission:</h3>
        <p>[Insert your mission statement or main objective here.]</p>

        <h3 style={subheadingStyle}>What We Offer:</h3>
        <ul style={{ marginLeft: '20px' }}>
          <li>[List key products/services]</li>
          <li>[Highlight any unique features or benefits]</li>
        </ul>

        <h3 style={subheadingStyle}>Why Choose Us:</h3>
        <ul style={{ marginLeft: '20px' }}>
          <li>[Explain what sets you apart from competitors]</li>
          <li>[Mention any awards, recognitions, or certifications]</li>
        </ul>

        <h3 style={subheadingStyle}>Our Team:</h3>
        <p>Meet the dedicated individuals who drive [Your Company Name] forward. [Briefly introduce key team members or departments.]</p>

        <h3 style={subheadingStyle}>Get in Touch:</h3>
        <p>We are always ready to assist you. [Provide contact information or a call to action.]</p>

        {/* Optional: Add a quote from a founder or a customer testimonial */}
        {/* <blockquote>[Quote here]</blockquote> */}
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
