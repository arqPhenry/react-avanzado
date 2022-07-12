import React from 'react';
import { GlobalStyle } from './components/styles/GlobalStyles.js';
import { ListOfCategories } from '@components/ListOfCategories/index.jsx';
import { ListOfPhotoCardsContainer } from './containers/ListOfPhotoCardsContainer.jsx';
import { Logo } from '@components/Logo/index.jsx';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCardsContainer categoryId={1} />
    </>
  );
};

export { App };
