import React, {useState, useEffect} from 'react';
import { Product } from './Data.tsx';
import products from './productsData.ts';
import './Catalog.css'

const Catalog: React.FC = () => {
    // Button-up 
    const [isStickyBtn, setStickyBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          setStickyBtn(window.scrollY > 100);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    // Button-up 
    
    // Фильтрация продуктов по выбранной категории
    const [selectedCategory, setSelectedCategory] = useState<string>('Все');
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    useEffect(() => {
        if (selectedCategory === 'Все') {
          setFilteredProducts(products);
        } else {
          const filtered = products.filter((product) => product.name === selectedCategory);
          setFilteredProducts(filtered);
        }
    }, [selectedCategory]);

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
    };
    // Фильтрация продуктов по выбранной категории

    const categoryButtons = [
        'Все',
        'Подшипники',
        'Смазки, масла',
        'Стопорные кольца',
        'Шпонки, шпоночная сталь',
        'Шпильки',
        'Сальники',
        'Инструмент',
        'Пресс-масленки',
    ];

    const [cartQuantities, setCartQuantities] = useState<{ [key: string]: number }>({});
    const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

    const handleAddToCart = (product: Product) => {
        // Update cart quantity for the specific product
        setCartQuantities((prevQuantities) => ({
        ...prevQuantities,
        [product.article]: (prevQuantities[product.article] || 0) + 1,
        }));
    };

    const handleDecreaseQuantity = (article) => {
        const updatedQuantities = { ...cartQuantities };
        if (updatedQuantities[article] > 0) {
            updatedQuantities[article] -= 1;
            setCartQuantities(updatedQuantities);
        }
    };

    // Function to handle increasing quantity
    const handleIncreaseQuantity = (article) => {
        const updatedQuantities = { ...cartQuantities };
        updatedQuantities[article] = (updatedQuantities[article] || 0) + 1;
        setCartQuantities(updatedQuantities);
    };
    
  return (
    <div className="catalog-page-container">
        <img 
            src="/img/button_up.png" 
            alt="button_circle_up" 
            onClick={scrollToTop} 
            className={isStickyBtn ? 'button-up' : "button-up-hide"}
        />
        <p className='catalog-page-breadcrumbs'>SITENAME / <span>Catalog</span></p>
        <p className='catalog-page-head'>КАТАЛОГ</p>
        <p className='catalog-page-head-2'>
            Более 15 лет мы работаем в сфере подшипников и комплектующих,<br/>
            обеспечивая их доставку до конечного потребителя.<br/>
            Мы предлагаем импортные подшипники, а так же отечественных производителей, любых модификаций.
        </p>
        <div className='catalog-page-serch-input-container'>
            <p className='catalog-page-searching-text'>Поиск</p>
            <label className='catalog-page-label'>
                <img src='./img/edit.png' alt='edit-svg' className='catalog-page-edit-svg'/>
                <input 
                    placeholder='Введите наименование, код, каталожный номер или производителя' 
                    className='catalog-page-input-params'
                />
            </label>
        </div>
        <div className='catalog-page-button-container'>
            {categoryButtons.map((category) => (
                <button
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className={selectedCategory === category ? 'isActive' : ''}
                >
                    {category}
                </button>
            ))}
        </div>
        <div className='catalog-page-result-container'>
            {filteredProducts.map((product) => (
                <div key={product.article} >
                    {product.img && <img src={product.img} alt={product.name} />}
                    <p>{product.name}</p>
                    <p>{product.brandName}</p>
                    <p style={{ color: product.isAvailable ? '#0CC540' : '#FF0000' }}>
                        {product.isAvailable ? 'Есть в наличии' : 'Нет в наличии'}
                    </p>
                    <p><span>Размеры: </span>{product.sizes}</p>
                    <p><span>Арт.: </span>{product.article}</p>
                    <p className='catalog-page-result-price'>{product.pricePerUnit}</p>
                    <button
                        onClick={() => handleAddToCart(product)}
                        onMouseEnter={() => setHoveredProduct(product.article)}
                        onMouseLeave={() => setHoveredProduct(null)}
                        className={cartQuantities[product.article] ? 'btn-in-cart' : 'btn-not-in-cart'}
                    >
                        {hoveredProduct === product.article ? (
                            <div>
                                <button onClick={() => handleDecreaseQuantity(product.article)}>-</button>
                                {cartQuantities[product.article] || 0}
                                <button onClick={() => handleIncreaseQuantity(product.article)}>+</button>
                            </div>
                        ) : (
                            'В корзину'
                        )}
                    </button>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Catalog;
