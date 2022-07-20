import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ListOfCategories } from '@components/ListOfCategories/index.jsx';
import { Home } from '../pages/Home';
import { Detail } from '../pages/Detail';
import { Logo } from '@components/Logo/index.jsx';
import { Favs } from '../pages/Favs';
import { Register } from '../pages/Register';
import { Login } from '../pages/Login';
import { User } from '../pages/User';

const Router = () => {
  const isLogged = true;
  return (
    <BrowserRouter>
      <Logo />
      <ListOfCategories />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/pet/:categoryId' element={<Home />} />
        <Route exact path='/detail/:detailId' element={<Detail />} />
        <Route exact path='/login' element={<Login />} />
        {isLogged
          ? <>
            <Route exact path='/favs' element={<Favs />} />
            <Route exact path='/user' element={<User />} />
            </>
          : <>
            <Route exact path='/favs' element={<Navigate to='/login' />} />
            <Route exact path='/user' element={<Navigate to='/login' />} />
            </>}
        <Route exact path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export { Router };
