import React from 'react';
import { Link, Nav } from './styles';
import { MdOutlineHome, MdHome, MdFavoriteBorder, MdFavorite, MdPersonOutline, MdPerson } from 'react-icons/md';

export const NavBar = () => {
  const SIZE = '32px';

  const iconHome = '';
  const iconFav = '';
  const iconUser = '';

  return (
    <Nav>
      <Link to='/' id='home'>{iconHome ? <MdHome size={SIZE} /> : <MdOutlineHome size={SIZE} />}</Link>
      <Link to='/favs' id='favs'>{iconFav ? <MdFavorite size={SIZE} /> : <MdFavoriteBorder size={SIZE} />}</Link>
      <Link to='/user' id='user'>{iconUser ? <MdPerson size={SIZE} /> : <MdPersonOutline size={SIZE} />}</Link>
    </Nav>
  );
};
