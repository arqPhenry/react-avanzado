import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '@context/AppContext';
import { UserFormRegister } from '../components/UserFormRegister/index';
import { Container, Span, Container2, Link } from '../components/UserForm/styles';
import { useRegisterMutation } from '../containers/RegisterMutation';

const Register = () => {
  const { registerUser } = useContext(AppContext);
  const { loginUser } = useContext(AppContext);
  const { registerMutation, loading, error } = useRegisterMutation();
  const navigate = useNavigate();

  const onSubmit = ({ email, password }) => {
    const input = { email, password };
    const variables = { input };
    registerMutation({ variables })
      .then(registerUser(true))
      .then(loginUser(true))
      .then(navigate('/'));
  };

  const errorMsg = error && 'User already exist';

  return (
    <Container>
      <div>
        <UserFormRegister onSubmit={onSubmit} error={errorMsg} disabled={loading} />
      </div>
      <Container2>
        <Link to='/login'><Span>Already registered? Go to login</Span></Link>
      </Container2>
    </Container>
  );
};

export { Register };
