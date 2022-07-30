import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '@context/AppContext';
import { UserForm } from '../components/UserForm';
import { Container, SecundaryButton, Span, Container2 } from '../components/UserForm/styles';
import { useLoginMutation } from '../containers/LoginMutation';

const Login = () => {
  const { loginUser } = useContext(AppContext);
  const { loginMutation, loading, error } = useLoginMutation();
  const navigate = useNavigate();

  const onSubmit = ({ email, password }) => {
    const input = { email, password };
    const variables = { input };
    loginMutation({ variables })
      .then(({ data }) => {
        const { login } = data;
        loginUser(login);
      })
      .then(navigate('/'));
  };

  const errorMsg = error && 'Email or password is invalid';

  return (
    <Container>
      <UserForm onSubmit={onSubmit} error={errorMsg} disabled={loading} />
      <Container2>
        <Span>Forgot my password</Span>
        <Link to='/register'><SecundaryButton>Sign up</SecundaryButton></Link>
      </Container2>
    </Container>
  );
};

export { Login };
