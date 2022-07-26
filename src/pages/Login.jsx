import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '@context/AppContext';
import { UserForm } from '../components/UserForm';
import { Container, SecundaryButton, Span, Container2 } from '../components/UserForm/styles';

const Login = () => {
  const { loginUser } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(true);
  };

  return (
    <Container>
      <div>
        <UserForm onSubmit={handleSubmit} />
      </div>
      <Container2>
        <Span>Forgot my password</Span>
        <Link to='/register'><SecundaryButton>Sign up</SecundaryButton></Link>
      </Container2>
    </Container>
  );
};

export { Login };
