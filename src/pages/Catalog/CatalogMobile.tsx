import React, {useState, useEffect} from 'react';
import { Product } from './Data.tsx';
import products from './productsData.ts';
import './CatalogMobile.css'
// нужно сдела уникальный ключ id для продуктов, пока что там стоит article
const CatalogMobile: React.FC = () => {
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
    const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([]);
    const [isSubcategoryMount, setIsSubcategoryMount] = useState<boolean>(false);

    const subcategoriesMap: Record<string, string[]> = {
        'Подшипники': [
          'Подшипниковые узлы, корпуса и комплектующие',
          'Шариковые подшипники',
          'Роликовые подшипники',
          // Add more subcategories here...
        ],
        // Add subcategories for other categories if needed...
    };
    
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
     
    useEffect(() => {
        if (selectedCategory === 'Все') {
          setFilteredProducts(products);
        } else {
          const filtered = products.filter((product) => {
            const isCategoryMatch = product.name === selectedCategory;
            const isSubcategoryMatch = selectedSubcategories.length === 0 || selectedSubcategories.includes(product.subcategory);
    
            return isCategoryMatch && isSubcategoryMatch;
          });
    
          setFilteredProducts(filtered);
        }
    }, [selectedCategory, selectedSubcategories]);
    

    const handleCategoryClick = (category: string, subcategory?: string) => {
        setSelectedCategory(category);
    
        if (subcategory) {
            const newSubcategories = selectedSubcategories.includes(subcategory)
            ? selectedSubcategories.filter((s) => s !== subcategory)
            : [...selectedSubcategories, subcategory];
            setSelectedSubcategories(newSubcategories);
        } else {
            setSelectedSubcategories([]);
        }
    
        // Обновление isSubcategoryMount
        const hasSubcategories = subcategoriesMap[category] && subcategoriesMap[category].length > 0;
        setIsSubcategoryMount(hasSubcategories);
    
        const newTrail = ['Catalog', category];
        if (subcategory) {
            newTrail.push(subcategory);
        }
        setBreadcrumbTrail(newTrail);
    };

    // Фильтрация продуктов по выбранной категории


    // Работа с кнопками плюс и минус
    const [cartQuantities, setCartQuantities] = useState<{ [key: string]: number }>({});
    const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

    const handleAddToCart = (product: Product) => {
        // Update cart quantity for the specific product
        
    };
    
    const handleDecreaseQuantity = (article, event) => {
        event.stopPropagation();
        const updatedQuantities = { ...cartQuantities };
        if (updatedQuantities[article] > 0) {
            updatedQuantities[article] -= 1;
            setCartQuantities(updatedQuantities);
        }
    };
    
    const handleIncreaseQuantity = (article, event) => {
        event.stopPropagation();
        const updatedQuantities = { ...cartQuantities };
        updatedQuantities[article] = (updatedQuantities[article] || 0) + 1;
        setCartQuantities(updatedQuantities);
    };
    // Работа с кнопками плюс и минус

    // Хлебные крошки
    const [breadcrumbTrail, setBreadcrumbTrail] = useState<string[]>(['Catalog']);
    const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

    useEffect(() => {
      const breadcrumbs = ['Catalog'];
  
      if (selectedCategory !== 'Все') {
        breadcrumbs.push(selectedCategory);
      }
  
      setBreadcrumbTrail(breadcrumbs);
    }, [selectedCategory]);
  
    const handleBreadcrumbsClick = (index: number) => {
        const newTrail = breadcrumbTrail.slice(0, index + 1);
        setBreadcrumbTrail(newTrail);
    
        const selectedCategory = newTrail[newTrail.length - 1];
        setSelectedCategory(selectedCategory);
    
        // Установка подкатегорий, если они есть
        const hasSubcategories = subcategoriesMap[selectedCategory] && subcategoriesMap[selectedCategory].length > 0;
        setIsSubcategoryMount(hasSubcategories);
    
        // Установка подкатегорий в зависимости от выбранных крошек
        const lastBreadcrumb = newTrail[newTrail.length - 1];
        const lastSubcategory = newTrail.length > 2 ? newTrail[newTrail.length - 2] : null;
    
        if (lastSubcategory) {
            setSelectedSubcategories([lastSubcategory]);
        } else {
            setSelectedSubcategories([]);
        }
    };
    // Хлебные крошки

  return (
    <div className="catalog-page-container-mobile">
        <img 
            src="/img/button_up.png" 
            alt="button_circle_up" 
            onClick={scrollToTop} 
            className={isStickyBtn ? 'button-up-mobile' : "button-up-hide-mobile"}
        />
        <p className='catalog-page-breadcrumbs-mobile'>
            {breadcrumbTrail.map((breadcrumb, index) => (
                <span key={breadcrumb} onClick={() => handleBreadcrumbsClick(index)} className='catalog-page-breadcrumb-mobile'>
                <span className='catalog-page-breadcrumb-slash-mobile'>{index !== 0 && ' / '}</span>
                    {breadcrumb}
                </span>
            ))}
        </p>
        <p className='catalog-page-head-mobile'>КАТАЛОГ</p>
        <p className='catalog-page-head-2-mobile'>
            Более 15 лет мы работаем в сфере подшипников и комплектующих,<br/>
            обеспечивая их доставку до конечного потребителя.<br/>
            Мы предлагаем импортные подшипники, а так же отечественных производителей, любых модификаций.
        </p>
        <div className='catalog-page-serch-input-container-mobile'>
            <p className='catalog-page-searching-text-mobile'>Поиск</p>
            <label className='catalog-page-label-mobile'>
                <img src='./img/edit.png' alt='edit-svg' className='catalog-page-edit-svg'/>
                <input 
                    placeholder='Введите наименование, код, каталожный номер или производителя' 
                    className='catalog-page-input-params-mobile'
                />
            </label>
        </div>
        <div className='catalog-page-button-container-mobile'>
            {categoryButtons.map((category) => (
                <div key={category} className='catalog-page-button-category-mobile'>
                    {isSubcategoryMount ? '' : <button
                        onClick={() => handleCategoryClick(category)}
                        className={selectedCategory === category ? 'isActive-mobile' : ''}
                    >
                        {category}
                    </button> }
                    {subcategoriesMap[category] && selectedCategory === category && (
                        <div className='subcategory-container'>
                            {subcategoriesMap[category].map((subcategory) => (
                            <button
                                key={subcategory}
                                onClick={() => handleCategoryClick(category, subcategory)}
                                className={
                                selectedSubcategories.includes(subcategory) ? 'isActive-mobile' : ''
                                }
                            >
                                {subcategory}
                            </button>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div> 
        <div className="catalog-page-result-custom-select-mobile">
            <select>
                <option value="0">по наличию</option>
                <option value="1">по цене (с дорогих)</option>
                <option value="2">по цене (с дешевых)</option>
            </select>
        </div>
        <div className='catalog-page-result-container-mobile'>
            {filteredProducts.map((product) => (
                <div key={product.article} className='catalog-page-item-container-mobile'>
                    {product.img && <img src={product.img} alt={product.name} />}
                    <p>{product.name}</p>
                    <p>{product.brandName}</p>
                    <p style={{ color: product.isAvailable ? '#0CC540' : '#FF0000' }}>
                        {product.isAvailable ? 'Есть в наличии' : 'Нет в наличии'}
                    </p>
                    <p><span>Размеры: </span>{product.sizes}</p>
                    <p><span>Арт.: </span>{product.article}</p>
                    <p className='catalog-page-result-price-mobile'>{product.pricePerUnit}</p>
                    <button
                        onClick={() => handleAddToCart(product)}
                        onMouseEnter={() => setHoveredProduct(product.article)}
                        onMouseLeave={() => setHoveredProduct(null)}
                        className={cartQuantities[product.article] ? 'btn-in-cart-mobile' : 'btn-not-in-cart-mobile'}
                    >
                        {hoveredProduct === product.article ? (
                            <span className='plus-minus-mobile'>
                                <button 
                                    onClick={(event) => handleDecreaseQuantity(product.article, event)} 
                                    className='minus-mobile'
                                    style={{ color: cartQuantities[product.article] > 0 ? 'white' : 'black' }}
                                >
                                    -
                                </button>
                                <p 
                                    className='plus-minus-text-mobile'
                                    style={{ color: cartQuantities[product.article] > 0 ? 'white' : 'black' }}
                                >
                                    {cartQuantities[product.article] || 0}
                                </p>
                                <button 
                                    onClick={(event) => handleIncreaseQuantity(product.article, event)} 
                                    className='plus-mobile'
                                    style={{ color: cartQuantities[product.article] > 0 ? 'white' : 'black' }}
                                >
                                    +
                                </button>
                            </span>
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

export default CatalogMobile;
