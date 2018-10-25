import React from 'react';

import './Navbar.css';

export default function NavBar(props) {
  return (
    <nav>
        <div id='menu'>
            <a href='/dashboard' className='menuitem'>Dashboard</a>
            <a href='/' className='menuitem'>About</a>
            <a href='/chefsearch' className='menuitem'>Chef Search</a>
            <a href='/registration' className='menuitem'>Registration</a>
            <a href='/login' className='menuitem'>Login</a>
        </div>
  </nav>
  )
}