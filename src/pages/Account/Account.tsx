import React, { useState } from 'react';
import { ordersData, Order } from './dataOrders.ts';
import './Account.css'

interface AccountProps {}

const Account: React.FC<AccountProps> = () => {
  const [activeTab, setActiveTab] = useState<'contact' | 'orders'>('contact');

  const handleTabChange = (tab: 'contact' | 'orders') => {
    setActiveTab(tab);
  };

  return (
    <div className='account-page'>
        <p className='account-page-head'>Личный кабинет</p>
        <div className='account-page-btn-cont'>
            <button onClick={() => handleTabChange('contact')} className={activeTab === 'contact' ? 'active' : ''}>
            Контактные данные
            </button>
            <button onClick={() => handleTabChange('orders')} className={activeTab === 'orders' ? 'active' : ''}>
            Заказы
            </button>
        </div>

        {activeTab === 'contact' && (
            <div className='account-page-input-container'>
                <div className='account-page-input-container-2'>
                    <label>
                        <p className='account-page-input-container-p-text'>Ваше имя</p>
                        <input type="text" placeholder='ФИО'/>
                    </label>
                    <label>
                        <p className='account-page-input-container-p-text'>Отображаемое имя</p>
                        <input type="text" placeholder='loginname'/>
                    </label>
                    <label>
                        <p className='account-page-input-container-p-text'>Номер телефона</p>
                        <input type="tel" placeholder='+7 xxx xxx xxx'/>
                    </label>
                    <label>
                        <p className='account-page-input-container-p-text'>Ваша Почта</p>
                        <input type="email" placeholder='ama@adress.com'/>
                    </label>
                </div>
                <label className='account-page-last-input'>
                    <p className='account-page-input-container-p-text'>Ваш адрес</p>
                    <input type="text" placeholder='Рыбинск, Ивановский проезд, 13к5'/>
                </label>
                <div className='account-page-exit-btn-cont'>
                    <img src='/img/exit.svg' alt='exit' className='account-page-exit-btn'/>
                    <p>Выйти</p>
                </div>
            </div>
        )}

        {activeTab === 'orders' && (
            <div>
                {ordersData.map((order: Order) => (
                <div key={order.id} className='account-page-order-container'>
                    <p className='account-page-order-number-text'>{order.number}</p>
                    <div>
                        <p className={order.statusClassname}>{order.status}</p>
                        <p className='account-page-order-delivery-text'>{order.delivery}</p>
                    </div>
                    <p className='account-page-order-details-text'>{order.details}</p>
                </div>
                ))}
            </div>
        )}
    </div>
  );
};

export default Account;
