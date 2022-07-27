import React from 'react';
import { Link, Nav } from './styles';
import { MdOutlineHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md';

export const NavBar = () => {
  const SIZE = '32px';

  return (
    <Nav>
      <Link to='/' id='home'><MdOutlineHome size={SIZE} /></Link>
      <Link to='/favs' id='favs'><MdFavoriteBorder size={SIZE} /></Link>
      <Link to='/user' id='user'><MdPersonOutline size={SIZE} /></Link>
    </Nav>
  );
};
