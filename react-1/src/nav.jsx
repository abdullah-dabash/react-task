import React from 'react'
import { Link } from 'react-router-dom';

function Nav({ authenticated }) {
  return (
    <div style={{ backgroundColor: '#f0f0f0', padding: '10px' }}>
      <nav>
        <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', justifyContent: 'center' }}>
          <li style={{ margin: '0 10px' }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Homepage</Link>
          </li>
          {!authenticated && (
            <>
              <li style={{ margin: '0 10px' }}>
                <Link to="/signup" style={{ textDecoration: 'none', color: 'black' }}>Sign Up</Link>
              </li>
            </>
          )}
          <li style={{ margin: '0 10px' }}>
            <Link to="/contactus" style={{ textDecoration: 'none', color: 'black' }}>Contact Us</Link>
          </li>
          {authenticated && (
            <>
              <li style={{ margin: '0 10px' }}>
                <Link to="/logout" style={{ textDecoration: 'none', color: 'black' }}>Logout</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Nav;


