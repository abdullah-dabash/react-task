
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Nav() {
  // State to manage login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Effect to check login status on component mount
  useEffect(() => {
    // Check if user is logged in based on local storage
    const loggedIn = localStorage.getItem("email") !== null;
    setIsLoggedIn(loggedIn);
  }, []);

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("email"); // Remove user login data from local storage
    setIsLoggedIn(false); // Update login status
    // Redirect to signup page or home page after logout
    window.location.href = '/signup'; // Adjust this to your actual signup page route
  };

  return (
    <div style={{ backgroundColor: '#f0f0f0', padding: '10px' }}>
      <nav>
        <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', justifyContent: 'center' }}>
          <li style={{ margin: '0 10px' }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Homepage</Link>
          </li>
          <li style={{ margin: '0 10px' }}>
            <Link to="/aboutus" style={{ textDecoration: 'none', color: 'black' }}>About Us</Link>
          </li>
          <li style={{ margin: '0 10px' }}>
            <Link to="/contactus" style={{ textDecoration: 'none', color: 'black' }}>Contact Us</Link>
          </li>
          <li style={{ margin: '0 10px' }}>
            {isLoggedIn ? (
              <button onClick={handleLogout} style={{ textDecoration: 'none', color: 'black', background: 'none', border: 'none', cursor: 'pointer' }}>Logout</button>
            ) : (
              <Link to="/signup" style={{ textDecoration: 'none', color: 'black' }}>Sign Up</Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
