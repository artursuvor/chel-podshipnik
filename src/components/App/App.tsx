import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout.tsx';
import Home from '../../pages/Home/Home.tsx';
import Catalog from '../../pages/Catalog/Catalog.tsx';
import Login from '../../pages/Login/Login.tsx';

function App(): JSX.Element {
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
