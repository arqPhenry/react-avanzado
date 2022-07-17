import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home.jsx';
import { GlobalStyle } from './components/styles/GlobalStyles.js';
import { Logo } from '@components/Logo/index.jsx';
import { Detail } from './pages/Detail.jsx';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Logo />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/pet/:categoryId' element={<Home />} />
          <Route exact path='/detail/:detailId' element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export { App };
