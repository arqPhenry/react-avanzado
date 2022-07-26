import React from 'react';
import { useInputValue } from '../../hooks/useInputValue.js';
import { Form, Input, Button, Label, Div } from '../UserForm/styles';

export const UserFormRegister = ({ onSubmit }) => {
  const email = useInputValue('');
  const password = useInputValue('');
  const username = useInputValue('');

  return (
    <Form onSubmit={onSubmit}>
      <Label htmlFor='email'>Email address</Label>
      <Input type='email' placeholder='johndoe@example.com' id='email' {...email} />

      <Label htmlFor='email'>Username</Label>
      <Input type='text' placeholder='johnpetlover' id='username' {...username} />

      <Label htmlFor='password'>Password</Label>
      <Input type='password' placeholder='********' id='password' {...password} />
      <Div>
        <Button>Register</Button>
      </Div>
    </Form>
  );
};
