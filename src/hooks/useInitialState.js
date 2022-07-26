import { useState } from 'react';

const initialState = {
  isLoged: false,
  isRegistered: false
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const loginUser = (estado) => {
    setState({
      ...state,
      isLoged: estado
    });
  };

  const registerUser = (estado) => {
    setState({
      ...state,
      isRegistered: estado
    });
  };

  return {
    state,
    loginUser,
    registerUser
  };
};

export { useInitialState };
