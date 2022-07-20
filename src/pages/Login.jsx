import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <h1>Login page</h1>
      <h4>Not registered? <Link to='/register'>Register</Link></h4>
    </>
  );
};

export { Login };
