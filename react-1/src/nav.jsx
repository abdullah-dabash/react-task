
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("email") !== null;
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("email"); 
    setIsLoggedIn(false); 
    window.location.href = '/signup'; 
  };

  return (
    <div style={{ backgroundColor: '#f0f0f0', padding: '10px' }}>
      <nav>
        <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', justifyContent: 'center' }}>
          <li style={{ margin: '0 10px' }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Homepage</Link>
          </li>
          <li style={{ margin: '0 10px' }}>
            <Link to="/catalog" style={{ textDecoration: 'none', color: 'black' }}>Catalog</Link>
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
