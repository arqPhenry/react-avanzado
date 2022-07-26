import React from 'react';
import { Router } from './routes/index.jsx';
import { GlobalStyle } from './components/styles/GlobalStyles.js';
import { AppContext } from '@context/AppContext';
import { useInitialState } from '@hooks/useInitialState';

const App = () => {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <GlobalStyle />
      <Router />
    </AppContext.Provider>
  );
};

export { App };
