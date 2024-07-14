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
    <div className="bg-gray-200 py-2">
      <nav className="container mx-auto">
        <ul className="flex justify-center">
          <li className="mx-2">
            <Link to="/" className="text-black hover:text-gray-700">Homepage</Link>
          </li>
          <li className="mx-2">
            <Link to="/catalog" className="text-black hover:text-gray-700">Catalog</Link>
          </li>
          <li className="mx-2">
            <Link to="/aboutus" className="text-black hover:text-gray-700">About Us</Link>
          </li>
          <li className="mx-2">
            <Link to="/contactus" className="text-black hover:text-gray-700">Contact Us</Link>
          </li>
          <li className="mx-2">
            {isLoggedIn ? (
              <button onClick={handleLogout} className="text-black hover:text-gray-700">Logout</button>
            ) : (
              <Link to="/signup" className="text-black hover:text-gray-700">Sign Up</Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
