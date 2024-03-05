import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
          setSticky(window.scrollY > 160);
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <header className={isHomePage ? (isSticky ? 'sticky-header' : '') : 'header-not-main'}>
      <img src='./img/main-logo.png' alt='header-main-logo' className='header-main-logo' onClick={() => window.location.href = '/'}/>
      <div className='header-right-side'>
        <div className={isHomePage ? "header-contact-info" : "header-contact-info-not-main"}>
            <a href="tel:+73517772520">8 (351) 777-25-20</a><span>, </span>
            <a href="tel:+73517772520">777-25-20</a>
        </div>
        <img src='./img/shopping-cart.png' alt='header-shopping-cart-svg' className='header-shopping-cart-svg'/>
        <Link to={`/login`}><img src='./img/user.png' alt='header-user-svg' className='header-user-svg'/></Link>
      </div>
    </header>
  );
}

export default Header;
