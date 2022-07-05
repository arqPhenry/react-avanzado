import React from 'react';
import { GlobalStyle } from './components/styles/GlobalStyles.js';
import { ListOfCategories } from '@components/ListOfCategories/index.jsx';
import { ListOfPhotoCards } from '@components/ListOfPhotoCards/index.jsx';
import { Logo } from '@components/Logo/index.jsx';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCards />
    </>
  );
};

export { App };
