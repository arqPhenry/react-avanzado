import React, { useContext } from 'react';
import { AppContext } from '@context/AppContext';
import { UserFormRegister } from '../components/UserFormRegister/index';
import { Container, Span, Container2, Link } from '../components/UserForm/styles';

const Register = () => {
  const { registerUser } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(true);
  };

  return (
    <Container>
      <div>
        <UserFormRegister onSubmit={handleSubmit} />
      </div>
      <Container2>
        <Link to='/login'><Span>Already registered? Go to login</Span></Link>
      </Container2>
    </Container>
  );
};

export { Register };
