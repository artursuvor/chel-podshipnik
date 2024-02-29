import React, { useState, useEffect } from 'react';
import './Header.css'

const Header = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
          setSticky(window.scrollY > 130);
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  return (
    <header className={isSticky ? 'sticky-header' : ''}>
      <img src='./img/main-logo.png' alt='header-main-logo' className='header-main-logo'/>
      <div className='header-right-side'>
        <div className="header-contact-info">
            <a href="tel:+73517772520">8 (351) 777-25-20</a><span>, </span>
            <a href="tel:+73517772520">777-25-20</a>
        </div>
        <img src='./img/shopping-cart.png' alt='header-shopping-cart-svg' className='header-shopping-cart-svg'/>
        <img src='./img/user.png' alt='header-user-svg' className='header-user-svg'/>
      </div>
    </header>
  );
}

export default Header;
