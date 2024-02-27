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
    </div>
  );
};

export default Home;