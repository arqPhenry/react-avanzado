import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { Figure, Image } from './styles';

const Logo = () => {
  return (
    <Figure>
      <Link to='/'>
        <Image src={logo} alt='logo' />
      </Link>
    </Figure>
  );
};

export { Logo };
