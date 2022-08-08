import React from 'react';
import { useInputValue } from '../../hooks/useInputValue.js';
import registerkitty from '../../assets/register.png';
import { Form, Input, Button, Label, Div, Img, Figure, SpanError } from '../UserForm/styles';

export const UserFormRegister = ({ onSubmit, error, disabled }) => {
  const email = useInputValue('');
  const password = useInputValue('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };

  return (
    <Form onSubmit={handleSubmit} disabled={disabled}>
      <Figure>
        <Img src={registerkitty} />
      </Figure>
      <Label htmlFor='email'>Email address</Label>
      <Input type='email' placeholder='johndoe@example.com' id='email' disabled={disabled} {...email} />

      <Label htmlFor='password'>Password</Label>
      <Input type='password' placeholder='********' id='password' disabled={disabled} {...password} />

      {error && <SpanError>{error}</SpanError>}

      <Div>
        <Button disabled={disabled}>Register</Button>
      </Div>
    </Form>
  );
};
