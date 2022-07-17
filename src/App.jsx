import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home.jsx';
import { GlobalStyle } from './components/styles/GlobalStyles.js';
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery.jsx';

const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get('detail');
  return (
    <>
      <GlobalStyle />
      {detailId
        ? <PhotoCardWithQuery id={detailId} />
        : <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/pet/:categoryId' element={<Home />} />
          </Routes>
        </BrowserRouter>}
    </>
  );
};

export { App };
