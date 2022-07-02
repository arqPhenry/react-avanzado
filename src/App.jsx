import React from 'react';
import { ListOfCategories } from '@ListOfCategories/index.jsx';
import { GlobalStyle } from './GlobalStyles.js';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ListOfCategories />
      <h1>
        Here we go, React
      </h1>
    </>
  );
};

export { App };
