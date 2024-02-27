import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../Layout/Layout.tsx';
import Home from '../../pages/Home/Home.tsx';
// import { useMediaQuery } from 'react-responsive';

function App(): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
            </Route>
            </Routes>
        </BrowserRouter>
        );
    }

export default App;