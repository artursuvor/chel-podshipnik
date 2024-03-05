import React, { useState } from 'react';
import './Login.css'

interface LoginProps {
  onLogin: (email: string, password: string) => void;
  onRegister: () => void;
  onForgotPassword: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, onRegister, onForgotPassword }) => {
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
    <div className='login-page'>
      <p className='login-page-head'>{showRegistration ? `РЕГИСТРАЦИЯ` : `ВХОД В ЛИЧНЫЙ КАБИНЕТ`}</p>
      <div className='login-page-input-container'>
        <p className='login-page-input-text'>e-mail</p>
        <label>
            <input 
                className='login-page-input'
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                placeholder='adress@mail.ru' 
            />
        </label>
      </div>
      <div className='login-page-input-container-2'>
        <p className='login-page-input-text'>Пароль</p>
        <label>
            <input 
                className='login-page-input'
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder='не менее 6 знаков'
            />
        </label>
      </div>
      {showRegistration ? '' : <button className='login-page-fgt-pass-btn' onClick={onForgotPassword}>Напомнить пароль</button>}
      <button className='login-page-aut-btn' onClick={handleLogin}>{showRegistration ? `Зарегистрироваться` : `Авторизоваться`}</button>
      {showRegistration ? '' : <button className='login-page-reg-btn' onClick={handleToggleRegistration}>Зарегистрироваться</button>}
    </div>
  );
};

export default Login;
