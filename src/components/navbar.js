import React from 'react';

import '../stylesheets/navbar.css';

export default function NavBar(props) {
  return (
    <nav>
        <div id="menu">
            <a href='/dashboard' className="menuitem">Dashboard</a>
            <a href='/' className="menuitem">About</a>
            <a href="/searchChef.html" className="menuitem">Search Chefs</a>
            <a href="/login.html" className="menuitem">Login</a>
            <a href="/signup.html" className="menuitem">Signup</a>
        </div>
  </nav>
  )
}