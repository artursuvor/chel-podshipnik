import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginMobile.css'

interface LoginProps {
  onLogin: (email: string, password: string) => void;
  onRegister: () => void;
  onForgotPassword: () => void;
}

const LoginMobile: React.FC<LoginProps> = ({ onLogin, onRegister, onForgotPassword }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showRegistration, setShowRegistration] = useState(false);

  const handleLogin = () => {
    onLogin(email, password);
  };

  const handleToggleRegistration = () => {
    setShowRegistration(!showRegistration);
  };

  return (
    <div className='login-page-mobile'>
      <div>
        <p className='login-page-head-mobile'>{showRegistration ? `РЕГИСТРАЦИЯ` : `АВТОРИЗАЦИЯ`}</p>
        <div className='login-page-input-container-mobile'>
          <p className='login-page-input-text-mobile'>e-mail</p>
          <label>
              <input 
                  className='login-page-input-mobile'
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='adress@mail.ru' 
              />
          </label>
        </div>
        <div className='login-page-input-container-2-mobile'>
          <p className='login-page-input-text-mobile'>Пароль</p>
          <label>
              <input 
                  className='login-page-input-mobile'
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  placeholder='не менее 6 знаков'
              />
          </label>
        </div>
        <div className='login-page-fgt-pass-btn-cont-mobile'>
          {showRegistration ? '' : <button className='login-page-fgt-pass-btn-mobile' onClick={onForgotPassword}>Напомнить пароль</button>}
        </div>
      </div>
      <div className='login-page-button-container-mobile'>
          <div>
            <Link to={`/account`}>
              <button className='login-page-aut-btn-mobile' onClick={handleLogin}>{showRegistration ? `Зарегистрироваться` : `Авторизоваться`}</button>
            </Link>
          </div>
          <div className='login-page-reg-btn-cont-mobile'>
            {showRegistration ? '' : <button className='login-page-reg-btn-mobile' onClick={handleToggleRegistration}>Зарегистрироваться</button>}
          </div>
      </div>
    </div>
  );
};

export default LoginMobile;
