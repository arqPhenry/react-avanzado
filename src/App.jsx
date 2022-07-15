import React from 'react';
import { GlobalStyle } from './components/styles/GlobalStyles.js';
import { ListOfCategories } from '@components/ListOfCategories/index.jsx';
import { ListOfPhotoCardsContainer } from './containers/ListOfPhotoCardsContainer.jsx';
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery.jsx';
import { Logo } from '@components/Logo/index.jsx';

const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get('detail');
  return (
    <>
      <GlobalStyle />
      <Logo />
      {detailId
        ? <PhotoCardWithQuery id={detailId} />
        : <>
          <ListOfCategories />
          <ListOfPhotoCardsContainer categoryId={1} />
        </>}
    </>
  );
};

export { App };
