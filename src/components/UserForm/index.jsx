import React from 'react';
import { useInputValue } from '../../hooks/useInputValue.js';
import loginkitty from '../../assets/login.png';
import { Form, Input, Button, Label, Div, Img, Figure, SpanError } from './styles.js';

export const UserForm = ({ onSubmit, disabled, error }) => {
  const email = useInputValue('');
  const password = useInputValue('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };

  return (
    <Form onSubmit={handleSubmit} disabled={disabled}>
      <Figure>
        <Img src={loginkitty} />
      </Figure>

      <Label htmlFor='email'>Email address</Label>
      <Input type='email' placeholder='johndoe@example.com' id='email' disabled={disabled} {...email} />

      <Label htmlFor='password'>Password</Label>
      <Input type='password' placeholder='********' id='password' disabled={disabled} {...password} />

      {error && <SpanError>{error}</SpanError>}

      <Div>
        <Button disabled={disabled}>Log in</Button>
      </Div>
    </Form>
  );
};
