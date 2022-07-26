import React from 'react';
import { useInputValue } from '../../hooks/useInputValue.js';
import { Form, Input, Button, Label, Div } from './styles.js';

export const UserForm = ({ onSubmit }) => {
  const email = useInputValue('');
  const password = useInputValue('');

  return (
    <Form onSubmit={onSubmit}>
      <Label htmlFor='email'>Email address</Label>
      <Input type='email' placeholder='johndoe@example.com' id='email' {...email} />

      <Label htmlFor='password'>Password</Label>
      <Input type='password' placeholder='********' id='password' {...password} />
      <Div>
        <Button>Log in</Button>
      </Div>
    </Form>
  );
};
