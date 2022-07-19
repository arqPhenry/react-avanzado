import React, { useEffect, useState } from 'react';
import { Link, Nav } from './styles';
import { MdOutlineHome, MdHome, MdFavoriteBorder, MdFavorite, MdPersonOutline, MdPerson } from 'react-icons/md';

export const NavBar = () => {
  const SIZE = '32px';
  const [iconHome, setIconHome] = useState('');
  const [iconFav, setIconFav] = useState('');
  const [iconUser, setIconUser] = useState('');

  useEffect(() => {
    const toHome = document.getElementById('home');
    const toFavs = document.getElementById('favs');
    const toUser = document.getElementById('user');

    const showHome = toHome.getAttribute('aria-current');
    const showFavs = toFavs.getAttribute('aria-current');
    const showUser = toUser.getAttribute('aria-current');

    const cambiador = () => {
      setIconHome(showHome);
      setIconFav(showFavs);
      setIconUser(showUser);
    };

    cambiador();
  }, []);

  return (
    <Nav>
      <Link to='/' id='home'>{iconHome ? <MdHome size={SIZE} /> : <MdOutlineHome size={SIZE} />}</Link>
      <Link to='/favs' id='favs'>{iconFav ? <MdFavorite size={SIZE} /> : <MdFavoriteBorder size={SIZE} />}</Link>
      <Link to='/user' id='user'>{iconUser ? <MdPerson size={SIZE} /> : <MdPersonOutline size={SIZE} />}</Link>
    </Nav>
  );
};
