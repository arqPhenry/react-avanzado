import React from 'react';
import { Outlet } from 'react-router-dom';
import { Logo } from '@components/Logo/index.jsx';
import { ListOfCategories } from '@components/ListOfCategories/index.jsx';

export const PublicUsableRoute = () => {
  return (
    <>
      <Logo />
      <ListOfCategories />
      <Outlet />
    </>
  );
};
