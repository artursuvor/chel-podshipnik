import React, { useState } from 'react';
import { ordersData, Order } from './dataOrders.ts';
import './AccountMobile.css'

interface AccountProps {}

const AccountMobile: React.FC<AccountProps> = () => {
  const [activeTab, setActiveTab] = useState<'contact' | 'orders'>('contact');

  const handleTabChange = (tab: 'contact' | 'orders') => {
    setActiveTab(tab);
  };

  return (
    <div className='account-page-mobile'>
        <p className='account-page-head-mobile'>Личный кабинет</p>
        <div className='account-page-btn-cont-mobile'>
            <button onClick={() => handleTabChange('contact')} className={activeTab === 'contact' ? 'active-mobile' : ''}>
            Контактные данные
            </button>
            <button onClick={() => handleTabChange('orders')} className={activeTab === 'orders' ? 'active-mobile' : ''}>
            Заказы
            </button>
        </div>

        {activeTab === 'contact' && (
            <div className='account-page-input-container-mobile'>
                <label>
                    <p className='account-page-input-container-p-text-mobile'>Ваше имя</p>
                    <input type="text" placeholder='ФИО'/>
                </label>
                <label>
                    <p className='account-page-input-container-p-text-mobile'>Отображаемое имя</p>
                    <input type="text" placeholder='loginname'/>
                </label>
                <label>
                    <p className='account-page-input-container-p-text-mobile'>Номер телефона</p>
                    <input type="tel" placeholder='+7 xxx xxx xxx'/>
                </label>
                <label>
                    <p className='account-page-input-container-p-text-mobile'>Ваша Почта</p>
                    <input type="email" placeholder='ama@adress.com'/>
                </label>
                <label className='account-page-last-input-mobile'>
                    <p className='account-page-input-container-p-text-mobile'>Ваш адрес</p>
                    <input type="text" placeholder='Рыбинск, Ивановский проезд, 13к5'/>
                </label>
                <div className='account-page-exit-btn-cont-mobile'>
                    <img src='/img/exit.svg' alt='exit' className='account-page-exit-btn-mobile'/>
                    <p>Выйти</p>
                </div>
            </div>
        )}

        {activeTab === 'orders' && (
            <div>
                {ordersData.map((order: Order) => (
                <div key={order.id} className='account-page-order-container-mobile'>
                    <p className='account-page-order-number-text-mobile'>{order.number}</p>
                    <div>
                        <p className={`${order.statusClassname}-mobile`}>{order.status}</p>
                        <p className='account-page-order-delivery-text-mobile'>{order.delivery}</p>
                    </div>
                    <p className='account-page-order-details-text-mobile'>{order.details}</p>
                </div>
                ))}
            </div>
        )}
    </div>
  );
};

export default AccountMobile;
