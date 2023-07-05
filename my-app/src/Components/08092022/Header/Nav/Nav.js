import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './nav.css';

const Nav = () => {
  return (

    <div>
      <ul className='nav'>
        <li className='nav-list'><Link className='link' to="/home">Home</Link></li>
        <li className='nav-list'><Link className='link' to="/about">About</Link></li>
        <li className='nav-list'><Link className='link' to="/contact">Contact</Link></li>
        <li className='nav-list'><Link className='link' to="/profile">Profile</Link></li>
        <li className='nav-list'><Link className='link' to="/">Log Out</Link></li>
      </ul>
      <Outlet />
    </div>

  )
}

export default Nav;