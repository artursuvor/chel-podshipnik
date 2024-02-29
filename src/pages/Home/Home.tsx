import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import './Home.css'; 

const Home: React.FC = () => {
    const [searchText, setSearchText] = useState('');
    const [insideDiameterFrom, setInsideDiameterFrom] = useState('');
    const [insideDiameterTo, setInsideDiameterTo] = useState('');
    const [outsideDiameterFrom, setOutsideDiameterFrom] = useState('');
    const [outsideDiameterTo, setOutsideDiameterTo] = useState('');
    const [widthFrom, setWidthFrom] = useState('');
    const [widthTo, setWidthTo] = useState('');

    // Функции для обработки изменений в input'ах
    const handleSearchTextChange = (e) => setSearchText(e.target.value);
    const handleInsideDiameterFromChange = (e) => setInsideDiameterFrom(e.target.value);
    const handleInsideDiameterToChange = (e) => setInsideDiameterTo(e.target.value);
    const handleOutsideDiameterFromChange = (e) => setOutsideDiameterFrom(e.target.value);
    const handleOutsideDiameterToChange = (e) => setOutsideDiameterTo(e.target.value);
    const handleWidthFromChange = (e) => setWidthFrom(e.target.value);
    const handleWidthToChange = (e) => setWidthTo(e.target.value);

    // Функция для сброса значений input'a
    const handleReset = () => {
        setSearchText('');
        setInsideDiameterFrom('');
        setInsideDiameterTo('');
        setOutsideDiameterFrom('');
        setOutsideDiameterTo('');
        setWidthFrom('');
        setWidthTo('');
    };

    // Функция для обработки показа результатов (вам нужно добавить логику)
    const handleShowResults = () => {
    };

    const [menu1Visible, setMenu1Visible] = useState(false);
    const [menu2Visible, setMenu2Visible] = useState(false);

    const toggleMenu1 = () => {
        setMenu1Visible(!menu1Visible);
        setMenu2Visible(false); 
    };

    const toggleMenu2 = () => {
        setMenu2Visible(!menu2Visible);
        setMenu1Visible(false); 
    };
  return (
    <div className="home-container">
        <div className='home-main-menu-section'>
            <div className='home-main-menu-section-size'></div>
            <div className='home-main-menu-section-catalog'></div>
            <div className='home-main-menu-section-delivery'></div>
            <div className='home-main-menu-section-contacts'></div>
        </div>
        <div className='home-details-searching'>
            <p className='home-details-searching-head'>ПОИСК ДЕТАЛИ ПО РАЗМЕРУ</p>
            <div className='home-details-searching-container'>
                <div className='home-details-searching-params'>
                    <p className='home-details-searching-text'>Параметры поиска</p>
                    <label>
                        <img src='./img/edit.png' alt='edit-svg' className='edit-svg'/>
                        <input 
                            placeholder='Введите наименование, код, каталожный номер или производителя' 
                            className='input-params'
                            value={searchText}
                            onChange={handleSearchTextChange}
                        />
                    </label>
                </div>
                <div className='home-details-searching-container-2'>
                    <div className='home-details-searching-inside-diameter'>
                        <p className='home-details-searching-text'>Внутренний диаметр. d</p>
                        <label>
                            <input 
                                placeholder='от' 
                                className='input-inside-diameter-from'
                                value={insideDiameterFrom}
                                onChange={handleInsideDiameterFromChange}
                            />
                        </label>
                        <label>
                            <input 
                                placeholder='до' 
                                className='input-inside-diameter-to'
                                value={insideDiameterTo}
                                onChange={handleInsideDiameterToChange}
                            />
                        </label>
                    </div>
                    <div className='home-details-searching-outside-diameter'>
                        <p className='home-details-searching-text'>Наружный диаметр. d</p>
                        <label>
                            <input 
                                placeholder='от'
                                className='input-outside-diameter-from'
                                value={outsideDiameterFrom}
                                onChange={handleOutsideDiameterFromChange}
                            />
                        </label>
                        <label>
                            <input 
                                placeholder='до' 
                                className='input-outside-diameter-to'
                                value={outsideDiameterTo}
                                onChange={handleOutsideDiameterToChange}
                            />
                        </label>
                    </div>
                    <div className='home-details-searching-width'>
                        <p className='home-details-searching-text'>Внутренний диаметр. d</p>
                        <label>
                            <input 
                                placeholder='от' 
                                className='input-inside-searching-width-from'
                                value={widthFrom}
                                onChange={handleWidthFromChange}
                            />
                        </label>
                        <label>
                            <input 
                                placeholder='до' 
                                className='input-inside-searching-width-to'
                                value={widthTo}
                                onChange={handleWidthToChange}
                            />
                        </label>
                    </div>
                </div>
                <div className='home-details-searching-buttons-container'>
                    <button className='home-details-clear-button' onClick={handleReset}>Сбросить</button>
                    <button className='home-details-show-button' onClick={handleShowResults}>Показать</button>
                </div>
            </div>
        </div>
        <div className='home-catalog-section'>
            <p className='home-catalog-heading'>КАТАЛОГ</p>
            <p className='home-catalog-heading-text'>
                Более 15 лет мы работаем в сфере подшипников и комплектующих,<br/>
                обеспечивая их доставку до конечного потребителя.<br/> 
                Мы предлагаем импортные подшипники, а так же отечественных производителей, любых модификаций.
            </p>
            <div className='home-catalog-grid'>
                <div className='home-catalog-grid-bearings'>
                    <div className='home-catalog-grid-bearings-background'></div>
                    <p>ПОДШИПНИКИ</p>
                </div>
                <div className='home-catalog-grid-pins'>
                    <div className='home-catalog-grid-pins-background'></div>
                    <p>ШПИЛЬКИ</p>
                </div>
                <div className='home-catalog-grid-oil'>
                    <div className='home-catalog-grid-oil-background'></div>
                    <p>САЛЬНИКИ</p>
                </div>
            </div>
            <div className='home-catalog-grid-2'>    
                <div className='home-catalog-grid-lubricant'>
                    <div className='home-catalog-grid-lubricant-background'></div>
                    <p>СМАЗКИ И МАСЛА</p>
                </div>
                <div className='home-catalog-grid-instrument'>
                    <div className='home-catalog-grid-instrument-background'></div>
                    <p>ИНСТРУМЕНТ</p>
                </div>
                <div className='home-catalog-grid-key'>
                    <div className='home-catalog-grid-key-background'></div>
                    <p>ШПОНКИ И ШПОНОЧНАЯ СТАЛЬ</p>
                </div>
            </div>
            <button className='home-catalog-watch-all-button'>Смотреть все</button>
        </div>
        <div className='home-delivery-section'>
            <div>
                <p className='home-delivery-head'>ДОСТАВКА</p>
                <div className='home-delivery-drop-menu'>
                    <div className='home-delivery-drop-menu-1' onClick={toggleMenu1}>
                        <p className='home-delivery-drop-menu-head-text-1'>
                            Доставка курьером <br/>или транспортной компанией
                        </p>
                        <img 
                            src='./img/arrow_down.png' 
                            alt='arrow_down' 
                            className={menu1Visible ? `arrow-down` : `arrow-down-anim`}
                        />
                    </div>
                    <div className='home-delivery-drop-menu-2' onClick={toggleMenu2}>
                        <p className='home-delivery-drop-menu-head-text-2'>Самовывоз</p>
                        <img 
                            src='./img/arrow_down.png' 
                            alt='arrow_down' 
                            className={menu2Visible ? `arrow-down` : `arrow-down-anim`}
                        />
                    </div>
                </div>
            </div>
            <div>
                {menu1Visible && (
                    <div className='home-delivery-drop-menu-text-1'>
                        <p>
                            Стоимость доставки не входит в цену товара и оплачивается по соответствующим тарифам транспортной компании или курьерской службы.
                            <br/><br/>
                            Стоимость доставки можно рассчитать на сайте выбранной вами транспортной компании или курьерской службы.
                            До терминала транспортной компании по г. Челябинска мы доставляем товар бесплатно.
                            <br/><br/>
                            Срок доставки определяется графиком работы выбранной вами транспортной компании.
                            <br/><br/>
                            Доставка в другие регионы России осуществляется следующими транспортными компаниями:
                        </p>
                        <img src='./img/companies.png' alt='companies'/>
                    </div>
                )}
                {menu2Visible && (
                    <div className='home-delivery-drop-menu-text-2'>
                        <p>Самовывоз возможен в будни с 09–00 до 17–00, в субботу с 09–30 до 14–00.</p>
                    </div>
                )}
            </div>
        </div>
        <div className='home-contacts-section'>
            <p className='home-contacts-head'>КОНТАКТЫ</p>
            <div className='home-contacts-container'>
                <div>
                    <img src='./img/phone.png' alt='phone'/>
                    <p>8 (351) 256-97-97,  256-97-49</p>
                </div>
                <div>
                    <img src='./img/device-phone-mobile.png' alt='device-phone-mobile'/>
                    <p>8 (351) 777-25-20, 777-25-30</p>
                </div>
                <div>
                    <img src='./img/envelope.png' alt='envelope'/>
                    <p>tdchelps@mail.ru</p>
                </div>
                <div>
                    <img src='./img/home.png' alt='home'/>
                    <p>454108 г. Челябинск ул. Харлова 14 к. 2 офис 205</p>
                </div>
                <div>
                    <img src='./img/clock.png' alt='clock'/>
                    <p>пн-пт 08:30 – 17:30 сб 09:00 – 14:00 вс – выходной</p>
                </div>
                <div className='map-container'>
                    <iframe
                        title="Yandex Map"
                        src="https://yandex.ru/profile/1022366044?no-distribution=1&view-state=mini&source=wizbiz_new_map_single"
                        width="100%"
                        frameBorder="0"
                        allowFullScreen
                    />
                </div>
            </div>            
        </div>
    </div>
  );
};

export default Home;