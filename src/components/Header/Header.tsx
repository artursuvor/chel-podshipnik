import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <img src='./img/main-logo.png' alt='header-main-logo' className='header-main-logo'/>
      <div className='header-right-side'>
        <div className="header-contact-info">
            <a href="">8 (351) 777-25-20, </a>
            <a href="">777-25-20</a>
        </div>
        <img src='./img/shopping-cart.png' alt='header-shopping-cart-svg' className='header-shopping-cart-svg'/>
        <img src='./img/user.png' alt='header-user-svg' className='header-user-svg'/>
      </div>
    </div>
  );
}

export default Header;
