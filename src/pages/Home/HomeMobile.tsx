import React, { useState } from 'react';
import { Link } from "react-router-dom";
import FooterMobile from "../../components/Footer/FooterMobile.tsx";
import './HomeMobile.css'; 

const HomeMobile: React.FC = () => {
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

    // Work with menu
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

    // Message label input
    const [messageText, setMessageText] = useState('');

    const handleMessageTextChange = (e) => {
        const inputValue = e.target.value;
        if (inputValue.length <= 500) {
            setMessageText(inputValue);
        }
    };

    //form inputs
    const [mailText, setMailText] = useState('');
    const [telephoneText, setTelephoneText] = useState('');
    const [captchaText, setCaptchaText] = useState('');
    
    const handleMailTextChange = (e) => setMailText(e.target.value);
    const handleTelephoneTextChange = (e) => setTelephoneText(e.target.value);
    const handleCaptchaTextChange = (e) => setCaptchaText(e.target.value);

// Функция для обработки отправки формы
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Здесь вы можете добавить логику для отправки данных на сервер
    // Например, использовать fetch или axios для отправки данных

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mail: mailText,
          telephone: telephoneText,
          message: messageText,
          captcha: captchaText,
        }),
      });

      if (response.ok) {
        // Обработка успешного ответа от сервера
        console.log('Форма успешно отправлена');
      } else {
        // Обработка ошибки от сервера
        console.error('Ошибка при отправке формы');
      }
    } catch (error) {
      // Обработка ошибок сети или других ошибок
      console.error('Произошла ошибка:', error);
    }
  };

  return (
    <div className="home-container-mobile">
        <div className='home-main-menu-section-mobile'>
            <p className='home-main-menu-section-size-text-1-mobile'>БОЛЬШЕ, ЧЕМ<br/>ПРОСТО<br/>ПОДШИПНИКИ</p>
            <div className='home-main-cont'>
                <div className='home-main-menu-section-size-mobile'>
                    <img src='/img/section-size-m.png' alt='section-size-ph' className='section-size-ph-mobile'/>
                    <p className='home-main-menu-section-size-text-2-mobile'>ПОДОБРАТЬ РАЗМЕР</p>
                </div>
            </div>
            <div className='home-main-cont'>
                <div className='home-main-menu-section-catalog-mobile' onClick={() => window.location.href = '/catalog'}>
                    <img src='/img/catalog-ph-1-m.png' alt='catalog-ph-1' className='home-main-menu-section-catalog-ph-1-mobile'/>
                    <img src='/img/catalog-ph-2-m.png' alt='catalog-ph-2' className='home-main-menu-section-catalog-ph-2-mobile'/>
                    <p className='home-main-menu-section-text-2-mobile'>КАТАЛОГ</p>
                </div>
            </div>
            <div className='home-main-flex-cont'>
                <div className='home-main-cont-2'>
                    <div className='home-main-menu-section-delivery-mobile'>
                        <p className='home-main-menu-section-text-2-mobile'>ДОСТАВКА</p>
                    </div>
                </div>
                <div className='home-main-cont-3'>
                    <div className='home-main-menu-section-contacts-mobile'>
                        <p className='home-main-menu-section-text-2-mobile'>КОНТАКТЫ</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='home-details-searching-mobile'>
            <p className='home-details-searching-head-mobile'>ПОИСК ДЕТАЛИ<br/> ПО РАЗМЕРУ</p>
            <div className='home-details-searching-container-mobile'>
                <div className='home-details-searching-params-mobile'>
                    <p className='home-details-searching-text-mobile'>Параметры поиска</p>
                    <label className='input-mobile'>
                        <input 
                            placeholder='Введите наименование, код...' 
                            className='input-params-mobile'
                            value={searchText}
                            onChange={handleSearchTextChange}
                        />
                    </label>
                </div>
                <div className='home-details-searching-container-2-mobile'>
                    <div className='home-details-searching-inside-diameter-mobile'>
                        <p className='home-details-searching-text-mobile'>Внутренний диаметр. d</p>
                        <label className='input-mobile'>
                            <input 
                                placeholder='от' 
                                className='input-inside-diameter-from-mobile'
                                value={insideDiameterFrom}
                                onChange={handleInsideDiameterFromChange}
                            />
                        </label>
                        <label className='input-mobile'>
                            <input 
                                placeholder='до' 
                                className='input-inside-diameter-to-mobile'
                                value={insideDiameterTo}
                                onChange={handleInsideDiameterToChange}
                            />
                        </label>
                    </div>
                    <div className='home-details-searching-outside-diameter-mobile'>
                        <p className='home-details-searching-text-mobile'>Наружный диаметр. d</p>
                        <label className='input-mobile'>
                            <input 
                                placeholder='от'
                                className='input-outside-diameter-from-mobile'
                                value={outsideDiameterFrom}
                                onChange={handleOutsideDiameterFromChange}
                            />
                        </label>
                        <label className='input-mobile'>
                            <input 
                                placeholder='до' 
                                className='input-outside-diameter-to-mobile'
                                value={outsideDiameterTo}
                                onChange={handleOutsideDiameterToChange}
                            />
                        </label>
                    </div>
                    <div className='home-details-searching-width-mobile'>
                        <p className='home-details-searching-text-mobile'>Внутренний диаметр. d</p>
                        <label className='input-mobile'>
                            <input 
                                placeholder='от' 
                                className='input-inside-searching-width-from-mobile'
                                value={widthFrom}
                                onChange={handleWidthFromChange}
                            />
                        </label>
                        <label className='input-mobile'>
                            <input 
                                placeholder='до' 
                                className='input-inside-searching-width-to-mobile'
                                value={widthTo}
                                onChange={handleWidthToChange}
                            />
                        </label>
                    </div>
                </div>
                <div className='home-details-searching-buttons-container-mobile'>
                    <button className='home-details-show-button-mobile' onClick={handleShowResults}>Показать</button>
                    <button className='home-details-clear-button-mobile' onClick={handleReset}>Сбросить</button>
                </div>
            </div>
        </div>
        <div className='home-catalog-section-mobile'>
            <p className='home-catalog-heading-mobile'>КАТАЛОГ</p>
            <p className='home-catalog-heading-text-mobile'>
                Более 15 лет мы работаем в сфере подшипников и комплектующих,<br/>
                обеспечивая их доставку до конечного потребителя.<br/> 
                Мы предлагаем импортные подшипники, а так же отечественных производителей, любых модификаций.
            </p>
            <button className='home-catalog-watch-all-button-mobile' onClick={() => window.location.href = '/catalog'}>
                Смотреть все
            </button>
            <div className='home-catalog-grid-mobile-1'>
                <div className='home-catalog-grid-bearings-mobile'>
                    <div className='home-catalog-grid-bearings-background-mobile'>
                        <img src='/img/ph-grid-1.png' alt='home-catalog-ph-1' className='home-catalog-bearing-1-mobile'/>
                    </div>
                    <p>ПОДШИПНИКИ</p>
                </div>
                <div className='home-cat-flex-1'>
                    <div className='home-catalog-grid-pins-mobile'>
                        <div className='home-catalog-grid-pins-background-mobile'>
                            <img src='/img/ph-grid-2.png' alt='home-catalog-ph-2' className='home-catalog-bearing-2-mobile'/>
                        </div>
                        <p>ШПИЛЬКИ</p>
                    </div>
                    <div className='home-catalog-grid-oil-mobile'>
                        <div className='home-catalog-grid-oil-background-mobile'>
                            <img src='/img/bearing-2.png' alt='home-catalog-ph-3' className='home-catalog-bearing-3-mobile'/>
                        </div>
                        <p>САЛЬНИКИ</p>
                    </div>
                </div>
            </div>
            <div className='home-catalog-grid-mobile-2'>
                <div className='home-catalog-grid-key-mobile'>
                    <div className='home-catalog-grid-key-background-mobile'>
                        <img src='/img/ph-grid-1.png' alt='home-catalog-ph-1' className='home-catalog-bearing-1-mobile'/>
                    </div>
                    <p>ШПОНКИ И ШПОНОЧНАЯ СТАЛЬ</p>
                </div>
                <div className='home-cat-flex-1'>
                    <div className='home-catalog-grid-lubricant-mobile'>
                        <div className='home-catalog-grid-lubricant-background-mobile'>
                            <img src='/img/ph-grid-2.png' alt='home-catalog-ph-2' className='home-catalog-bearing-2-mobile'/>
                        </div>
                        <p>СМАЗКИ, МАСЛА</p>
                    </div>
                    <div className='home-catalog-grid-instrument-mobile'>
                        <div className='home-catalog-grid-instrument-background-mobile'>
                            <img src='/img/bearing-2.png' alt='home-catalog-ph-2' className='home-catalog-bearing-3-mobile'/>
                        </div>
                        <p>ИНСТРУМЕНТ</p>
                    </div>
                </div>
            </div>
            <div className='home-catalog-grid-bearings-background-mobile'>
                <img src='/img/ph-grid-1.png' alt='home-catalog-ph-1' className='home-catalog-bearing-1-mobile'/>
            </div>
            <p className='home-catalog-grid-text-mobile'>СТОПОРНЫЕ КОЛЬЦА</p>
            <div className='home-catalog-grid-bearings-background-mobile'>
                <img src='/img/ph-grid-1.png' alt='home-catalog-ph-1' className='home-catalog-bearing-1-mobile'/>
            </div>
            <p className='home-catalog-grid-text-mobile'>ПРЕСС-МАСЛЕНКИ</p>
        </div>
        <div className='home-delivery-section-mobile'>
            <div>
                <p className='home-delivery-head-mobile'>ДОСТАВКА</p>
                <div className='home-delivery-drop-menu-mobile'>
                    <div className='home-delivery-drop-menu-1-mobile' onClick={toggleMenu1}>
                        <p className='home-delivery-drop-menu-head-text-1-mobile'>
                            Доставка курьером <br/>или транспортной компанией
                        </p>
                        <img 
                            src='./img/arrow_down.png' 
                            alt='arrow_down' 
                            className={menu1Visible ? `arrow-down-mobile` : `arrow-down-anim-mobile`}
                        />
                    </div>
                    {menu1Visible && (
                        <div className='home-delivery-drop-menu-text-1-mobile'>
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
                            <img src='./img/companies.png' alt='companies' className='companies'/>
                        </div>
                    )}
                    <div className='home-delivery-drop-menu-2-mobile' onClick={toggleMenu2}>
                        <p className='home-delivery-drop-menu-head-text-2-mobile'>Самовывоз</p>
                        <img 
                            src='./img/arrow_down.png' 
                            alt='arrow_down' 
                            className={menu2Visible ? `arrow-down-mobile` : `arrow-down-anim-mobile`}
                        />
                    </div>
                    {menu2Visible && (
                        <div className='home-delivery-drop-menu-text-2-mobile'>
                            <p>Самовывоз возможен в будни с 09–00 до 17–00, в субботу с 09–30 до 14–00.</p>
                        </div>
                    )}
                </div>
            </div>
            <div>
            </div>
        </div>
        <div className='home-contacts-section-mobile'>
            <p className='home-contacts-head-mobile'>КОНТАКТЫ</p>
            <div className='home-contacts-container-mobile'>
                <div className='home-contacts-container-5-mobile'>
                    <img src='./img/clock.png' alt='clock'/>
                    <p>пн-пт 08:30 – 17:30<br/>сб 09:00 – 14:00 вс – выходной</p>
                </div>
                <div className='home-contacts-container-1-mobile'>
                    <img src='./img/phone.png' alt='phone'/>
                    <p>8 (351) 256-97-97, 256-97-49</p>
                </div>
                <div className='home-contacts-container-2-mobile'>
                    <img src='./img/device-phone-mobile.png' alt='device-phone-mobile'/>
                    <p>8 (351) 777-25-20, 777-25-30</p>
                </div>
                <div className='home-contacts-container-3-mobile'>
                    <img src='./img/envelope.png' alt='envelope'/>
                    <p>tdchelps@mail.ru</p>
                </div>
                <div className='home-contacts-container-4-mobile'>
                    <img src='./img/home.png' alt='home'/>
                    <p>454108 г. Челябинск ул. Харлова 14 к. 2 офис 205</p>
                </div>
            </div>    
            <div className='map-container-mobile'>
                <iframe
                    title="Yandex Map"
                    src="https://yandex.ru/profile/1022366044?no-distribution=1&view-state=mini&source=wizbiz_new_map_single"
                    width="100%"
                    frameBorder="0"
                    allowFullScreen
                />
            </div>        
        </div>
        <div className='home-form-sending-section-mobile' onSubmit={handleSubmit}>
            <p className='home-form-sending-head-mobile'>СВЯЖИТЕСЬ С НАМИ</p>
            <form className='home-form-mobile'>
                <div className='home-form-cont'>
                    <label className='input-mobile'>
                        <p className='home-details-searching-text-mobile'>Ваша почта</p>
                        {/* <img src='./img/edit.png' alt='edit-svg' className='edit-svg-input-mail-mobile'/> */}
                        <input 
                            placeholder='На эту почту придет ответ' 
                            className='input-mail-mobile'
                            value={mailText}
                            onChange={handleMailTextChange}
                        />
                    </label>
                </div>
                <div className='home-form-cont'>
                    <label className='input-mobile'>
                        <p className='home-details-searching-text-mobile'>Ваш телефон</p>
                        <input 
                            className='input-telephone-mobile'
                            placeholder='+7 (xxx) xxx-xx-xx' 
                            value={telephoneText}
                            onChange={handleTelephoneTextChange}
                        />
                    </label>
                </div>
                <div className='home-form-cont'>
                    <p className='home-details-searching-text-mobile'>Ваше сообщение</p>
                    <label className='input-mobile'>
                        <textarea
                            name="message"
                            value={messageText}
                            onChange={handleMessageTextChange}
                            maxLength={225}
                            placeholder='Опишите в нескольких предложениях ваш вопрос..' 
                            className='input-message-mobile'
                        />
                        <span className='char-count-mobile'>{messageText.length}/225</span>
                    </label>
                </div>  
                <div className='home-form-cont-4'>
                    <p className='home-details-searching-text-mobile'>CAPTCHA</p>
                    <label className='input-mobile'>
                        {/* <img src='./img/edit.png' alt='edit-svg' className='edit-svg-input-captcha-mobile'/> */}
                        <input 
                            placeholder='Напишите цифрой сколько будет' 
                            className='input-captcha-mobile'
                            value={captchaText}
                            onChange={handleCaptchaTextChange}
                        />
                    </label>
                </div>
                <div className='home-details-searching-button-container-mobile'>
                    <button type="submit" className="home-details-searching-submit-button-mobile">Отправить</button>
                </div>
            </form>
        </div>
        <FooterMobile />
    </div>
  );
};

export default HomeMobile;