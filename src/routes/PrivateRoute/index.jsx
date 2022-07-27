import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from '../../components/NavBar/index';

export const PrivateRoute = () => {
  return (
    <>
      <Outlet />
      <NavBar />
    </>
  );
};
