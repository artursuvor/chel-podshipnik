import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Product } from '../../pages/Catalog/Data.tsx';
import './HeaderMobile.css'

const HeaderMobile = () => {
  const [isSticky, setSticky] = useState(false);
  const [isCartVisible, setCartVisible] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(event.target.value));
  };

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
      article: 'A1234',
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
    <header className={isHomePage ? (isSticky ? 'sticky-header-mobile' : '') : 'header-not-main-mobile'}>
      <img 
        src='./img/main-logo.png' 
        alt='header-main-logo' 
        className='header-main-logo-mobile' 
        onClick={() => window.location.href = '/'}
      />
      <div className='header-right-side-mobile'>
        {/* <div className={isHomePage ? "header-contact-info-mobile" : "header-contact-info-not-main-mobile"}>
            <a href="tel:+73517772520">8 (351) 777-25-20</a><span>, </span>
            <a href="tel:+73517772520">777-25-20</a>
        </div> */}
        <div className='header-shopping-cart-cont-mobile'>
          <img 
            src='./img/shopping-cart-m.svg' 
            alt='header-shopping-cart-svg' 
            className='header-shopping-cart-svg-mobile'
            onClick={toggleCartVisibility}
          />
          {isCartVisible && (
            <div className='header-shopping-cart-mobile'>
              <p className='header-shopping-cart-head-mobile'>КОРЗИНА</p>
              <p className='header-shopping-cart-count-text-mobile'>В вашей корзине {sampleProductsToAddToCart.length} товаров</p>
              <div className='header-shopping-cart-grid-container-mobile'>
                {sampleProductsToAddToCart.map((sampleProduct) => (
                  <div key={sampleProduct.article} className="cart-item-mobile">
                    <div className='sc-img-and-description-mobile'>
                      <img src={sampleProduct.img} alt={sampleProduct.name} />
                      <div className='sc-description-mobile'>
                        <p>{sampleProduct.name}</p>
                        <p>{sampleProduct.brandName}</p>
                        <p><span>Размеры: </span>{sampleProduct.sizes}</p>
                        <p><span>Арт.: </span>{sampleProduct.article}</p>
                      </div>
                    </div>
                    <div className="sc-quantity-controls-mobile">
                      <p>{sampleProduct.pricePerUnit}</p>
                      <div className='sc-quantity-controls-buttons-mobile'>
                        <button onClick={() => handleDecreaseQuantity(sampleProduct.article)}>-</button>
                        <p>{getCartItemQuantity(sampleProduct.article)}</p>
                        <button onClick={() => handleIncreaseQuantity(sampleProduct.article)}>+</button>
                      </div>
                    </div>
                    <div className='sc-delete-btn-container-mobile'>
                      <img src='/img/trash.svg' alt='trash' />
                      <button onClick={() => removeFromCart(sampleProduct)}>Удалить</button>
                    </div>
                  </div>
                ))}
              </div>
              <div className='sc-continue-order-button-container-mobile'>
                <button 
                  onClick={toggleCartVisibility} 
                  className='continue-order-btn-mobile'
                >
                  Продолжить покупки
                </button>
                <button className='checkout-btn-mobile'>Оформить заказ</button>
              </div>
            </div>
          )}
        </div>
        <Link to={`/login`}>
          <img 
            src={isAccPage || isRegPage ? '/img/user-b-m.svg' : '/img/user-m.svg'}
            alt='header-user-svg' 
            className='header-user-svg-mobile'
          />
        </Link>
      </div>
    </header>
  );
}

export default HeaderMobile;
