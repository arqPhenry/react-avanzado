import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PublicRoute } from './PublicRoute';
import { PublicUsableRoute } from './PublicUsableRoute';
import { Home } from '../pages/Home';
import { Detail } from '../pages/Detail';
import { Favs } from '../pages/Favs';
import { Register } from '../pages/Register';
import { Login } from '../pages/Login';
import { User } from '../pages/User';
import { AppContext } from '@context/AppContext';

const Router = () => {
  const { state } = useContext(AppContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<PublicRoute />}>
          <Route exact path='/' element={<PublicUsableRoute />}>
            <Route index element={<Home />} />
            <Route exact path='/pet/:categoryId' element={<Home />} />
            <Route exact path='/detail/:detailId' element={<Detail />} />
          </Route>
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
        </Route>
        {state.isLoged
          ? <>
            <Route exact path='/favs' element={<Favs />} />
            <Route exact path='/user' element={<User />} />
            </>
          : <>
            <Route exact path='/favs' element={<Navigate to='/login' />} />
            <Route exact path='/user' element={<Navigate to='/login' />} />
            </>}

      </Routes>
    </BrowserRouter>
  );
};

export { Router };
