import React from 'react';
import { Router } from './routes/index.jsx';
import { GlobalStyle } from './components/styles/GlobalStyles.js';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};

export { App };
