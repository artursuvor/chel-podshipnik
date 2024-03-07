import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Layout from '../Layout/Layout.tsx';
import LayoutMobile from '../Layout/LayoutMobile.tsx';
import Home from '../../pages/Home/Home.tsx';
import HomeMobile from '../../pages/Home/HomeMobile.tsx';
import Catalog from '../../pages/Catalog/Catalog.tsx';
import CatalogMobile from '../../pages/Catalog/CatalogMobile.tsx';
import Login from '../../pages/Login/Login.tsx';
import LoginMobile from '../../pages/Login/LoginMobile.tsx';
import Account from '../../pages/Account/Account.tsx';
import AccountMobile from '../../pages/Account/AccountMobile.tsx';

function DesktopApp(): JSX.Element {
  const handleLogin = (email: string, password: string) => {
    // Implement your login logic here
    console.log('Login with:', email, password);
  };

  const handleRegister = () => {
    // Implement your registration logic here
    console.log('Register');
  };

  const handleForgotPassword = () => {
    // Implement your forgot password logic here
    console.log('Forgot Password');
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="catalog"
            element={<Catalog />}
          />
          <Route
            path="login"
            element={
              <Login
                onLogin={handleLogin}
                onRegister={handleRegister}
                onForgotPassword={handleForgotPassword}
              />
            }
          />
          <Route path='account' element={<Account />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


function MobileApp(): JSX.Element {
  const handleLogin = (email: string, password: string) => {
    // Implement your login logic here
    console.log('Login with:', email, password);
  };

  const handleRegister = () => {
    // Implement your registration logic here
    console.log('Register');
  };

  const handleForgotPassword = () => {
    // Implement your forgot password logic here
    console.log('Forgot Password');
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutMobile />}>
          <Route index element={<HomeMobile />} />
          <Route
            path="catalog"
            element={<CatalogMobile />}
          />
          <Route
            path="login"
            element={
              <LoginMobile
                onLogin={handleLogin}
                onRegister={handleRegister}
                onForgotPassword={handleForgotPassword}
              />
            }
          />
          <Route path='account' element={<AccountMobile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


function App(): JSX.Element {
  const isMobile = useMediaQuery({ query: '(max-width: 555px)' });

  return isMobile ? <MobileApp /> : <DesktopApp />;
}

export default App;
