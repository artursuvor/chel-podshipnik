import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Product } from '../../pages/Catalog/Data.tsx';
import './Header.css'

const Header = () => {
  const [isSticky, setSticky] = useState(false);
  const [isCartVisible, setCartVisible] = useState(false);

  const toggleCartVisibility = () => {
    setCartVisible(!isCartVisible);
  };

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
  const isAccPage = location.pathname === '/login';
  const isRegPage = location.pathname === '/account';

  const sampleProductsToAddToCart: Product[] = [
    {
      name: 'Подшипники',
      brandName: 'Бренд 3',
      isAvailable: true,
      sizes: 'Various sizes',
      article: '6345063946-39634',
      pricePerUnit: '100 руб./шт',
      img: '/img/bearing-2.png',
      subcategory: 'Подшипниковые узлы, корпуса и комплектующие',
    },
    {
      name: 'Подшипники',
      brandName: 'Бренд 3',
      isAvailable: true,
      sizes: 'Various sizes',
      article: 'A12',
      pricePerUnit: '19.99',
      img: '/img/bearing-2.png',
      subcategory: 'Подшипниковые узлы, корпуса и комплектующие',
    },
    {
      name: 'Подшипники',
      brandName: 'Бренд 3',
      isAvailable: true,
      sizes: 'Various sizes',
      article: 'A123',
      pricePerUnit: '19.99',
      img: '/img/bearing-2.png',
      subcategory: 'Подшипниковые узлы, корпуса и комплектующие',
    },
    {
      name: 'Подшипники',
      brandName: 'Бренд 3',
      isAvailable: true,
      sizes: 'Various sizes',
      article: 'A12345',
      pricePerUnit: '19.99',
      img: '/img/bearing-2.png',
      subcategory: 'Подшипниковые узлы, корпуса и комплектующие',
    },
  ];

  const [cartQuantities, setCartQuantities] = useState<{ [key: string]: number }>({});

  const getCartItemQuantity = (article: string) => {
    return cartQuantities[article] || 0;
  };

  const handleDecreaseQuantity = (article: string) => {
    const updatedQuantities = { ...cartQuantities };
    if (updatedQuantities[article] > 0) {
      updatedQuantities[article] -= 1;
      setCartQuantities(updatedQuantities);
    }
  };

  const handleIncreaseQuantity = (article: string) => {
    const updatedQuantities = { ...cartQuantities };
    updatedQuantities[article] = (updatedQuantities[article] || 0) + 1;
    setCartQuantities(updatedQuantities);
  };

  const removeFromCart = (productSample) => {
    console.log('1');
  };
  return (
    <header className={isHomePage ? (isSticky ? 'sticky-header' : 'not-sticky-header') : 'header-not-main'}>
      <img 
        src='./img/main-logo.png' 
        alt='header-main-logo' 
        className='header-main-logo' 
        onClick={() => window.location.href = '/'}
      />
      <div className='header-right-side'>
        <div className={isHomePage ? "header-contact-info" : "header-contact-info-not-main"}>
            <a href="tel:+73517772520">8 (351) 777-25-20</a><span>, </span>
            <a href="tel:+73517772520">777-25-20</a>
        </div>
        <div className='header-shopping-cart-cont'>
          <img 
            src='/img/shopping-cart.png' 
            alt='header-shopping-cart-svg' 
            className='header-shopping-cart-svg'
            onClick={toggleCartVisibility}
          />
          <img 
            src='/img/shopping-cart-status.svg' 
            alt='header-shopping-cart-status' 
            className={sampleProductsToAddToCart.length > 0 ? 'header-shopping-cart-status-svg' : 'header-shopping-cart-status-hide-svg'}
          />
          {isCartVisible && (
            <div className='header-shopping-cart'>
              <img 
                src='/img/close-btn.svg' 
                alt='shop-cart-close-btn' 
                className='header-shopping-cart-close-btn' 
                onClick={toggleCartVisibility}
              />
              <p className='header-shopping-cart-head'>КОРЗИНА</p>
              <p className='header-shopping-cart-count-text'>В вашей корзине {sampleProductsToAddToCart.length} товаров</p>
              <div className='header-shopping-cart-grid-container'>
                {sampleProductsToAddToCart.map((sampleProduct) => (
                  <div key={sampleProduct.article} className="cart-item">
                    <div className='sc-img-and-description'>
                      <img src={sampleProduct.img} alt={sampleProduct.name} />
                      <div className='sc-description'>
                        <p>{sampleProduct.name}</p>
                        <p>{sampleProduct.brandName}</p>
                        <p><span>Размеры: </span>{sampleProduct.sizes}</p>
                        <p><span>Арт.: </span>{sampleProduct.article}</p>
                      </div>
                    </div>
                    <div className="sc-quantity-controls">
                      <p>{sampleProduct.pricePerUnit}</p>
                      <div className='sc-quantity-controls-buttons'>
                        <button onClick={() => handleDecreaseQuantity(sampleProduct.article)}>-</button>
                        <p>{getCartItemQuantity(sampleProduct.article)}</p>
                        <button onClick={() => handleIncreaseQuantity(sampleProduct.article)}>+</button>
                      </div>
                    </div>
                    <div className='sc-delete-btn-container'>
                      <img src='/img/trash.svg' alt='trash' />
                      <button onClick={() => removeFromCart(sampleProduct)}>Удалить</button>
                    </div>
                  </div>
                ))}
              </div>
              <div className='sc-continue-order-button-container'>
                <button 
                  onClick={toggleCartVisibility} 
                  className='continue-order-btn'
                >
                  Продолжить покупки
                </button>
                <button className='checkout-btn'>Оформить заказ</button>
              </div>
            </div>
          )}
        </div>
        <Link to={`/login`}>
          <img 
            src={isAccPage || isRegPage ? '/img/user-b.png' : '/img/user.png'}
            alt='header-user-svg' 
            className='header-user-svg'
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
