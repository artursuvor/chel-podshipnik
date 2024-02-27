import React from 'react';
import { NavLink } from "react-router-dom";
import './Home.css'; 

const Home: React.FC = () => {
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
                        />
                    </label>
                </div>
                <div className='home-details-searching-container-2'>
                    <div className='home-details-searching-inside-diameter'>
                        <p className='home-details-searching-text'>Внутренний диаметр. d</p>
                        <label>
                            <input placeholder='от' className='input-inside-diameter-from'/>
                        </label>
                        <label>
                            <input placeholder='до' className='input-inside-diameter-to'/>
                        </label>
                    </div>
                    <div className='home-details-searching-outside-diameter'>
                        <p className='home-details-searching-text'>Наружный диаметр. d</p>
                        <label>
                            <input placeholder='от' className='input-outside-diameter-from'/>
                        </label>
                        <label>
                            <input placeholder='до' className='input-outside-diameter-to'/>
                        </label>
                    </div>
                    <div className='home-details-searching-width'>
                        <p className='home-details-searching-text'>Внутренний диаметр. d</p>
                        <label>
                            <input placeholder='от' className='input-inside-searching-width-from'/>
                        </label>
                        <label>
                            <input placeholder='до' className='input-inside-searching-width-to'/>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Home;