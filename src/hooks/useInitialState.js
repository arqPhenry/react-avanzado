import { useState } from 'react';

const initialState = {
  isLoged: window.sessionStorage.getItem('tokenlogin') ? window.sessionStorage.getItem('tokenlogin') : false,
  isRegistered: window.sessionStorage.getItem('tokenregister') ? window.sessionStorage.getItem('tokenregister') : false
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const loginUser = (token) => {
    setState({
      ...state,
      isLoged: window.sessionStorage.setItem('tokenlogin', token)
    });
  };

  const registerUser = (token) => {
    setState({
      ...state,
      isRegistered: window.sessionStorage.setItem('tokenregister', token)
    });
  };

  return {
    state,
    loginUser,
    registerUser
  };
};

export { useInitialState };
