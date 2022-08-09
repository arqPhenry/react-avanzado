import React, { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
import { AppContext } from '@context/AppContext';
import { UserFormRegister } from '../components/UserFormRegister/index';
import { Container, Span, Container2, Link } from '../components/UserForm/styles';
import { useRegisterMutation } from '../containers/RegisterMutation';
import { Helmet } from 'react-helmet';

const Register = () => {
  const { registerUser, state } = useContext(AppContext);
  const { registerMutation, loading, error } = useRegisterMutation();
  // const navigate = useNavigate();

  const onSubmit = ({ email, password }) => {
    const input = { email, password };
    const variables = { input };
    registerMutation({ variables })
      .then(async ({ data }) => {
        const { signup } = data;
        await registerUser(signup);
      })
      .then(() => {
        if (state.isRegistered) {
          window.location.assign('/login');
        } else {
          console.log(error);
        }
      });
  };

  const errorMsg = error && 'User already exist';

  return (
    <Container>
      <Helmet>
        <title>PetGram | 🐱‍🏍 Register</title>
        <meta name='description' content='Register on Petgram, and start your adventure in the world of the cutest pets.' />
      </Helmet>
      <div>
        <UserFormRegister onSubmit={onSubmit} error={errorMsg} disabled={loading} />
      </div>
      <Container2>
        <Link to='/login'><Span>Already registered? Go to login</Span></Link>
      </Container2>
    </Container>
  );
};

export default Register;
