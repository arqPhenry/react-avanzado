import React from 'react';
import logo from '../../assets/logo.png';
import { Figure, Image } from './styles';

const Logo = () => {
  return (
    <Figure>
      <Image src={logo} alt='logo' />
    </Figure>
  );
};

export { Logo };
