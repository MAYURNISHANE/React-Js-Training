import React from 'react';
import Left_header from './Left-header';
import Right_header from './Right-header';
import './Header.css';

const Header = () => {
  return (
    <div className='header-shadow'>
      <div className='common'>
        <div className='header'>
          <div className='header-left'><Left_header /></div>
          <div className='header-right'> <Right_header /></div>
        </div>

      </div>
    </div>
  );
}

export default Header;