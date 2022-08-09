import React, { useContext, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PublicRoute } from './PublicRoute';
// import { PrivateRoute } from './PrivateRoute';
/* import { Home } from '../pages/Home';
import { Detail } from '../pages/Detail';
import { Favs } from '../pages/Favs';
import { Register } from '../pages/Register';
import { Login } from '../pages/Login';
import { User } from '../pages/User'; */
import { AppContext } from '@context/AppContext';
import { NavBar } from '@components/NavBar/index';
import Spinner from '../components/Spinner';

const Favs = React.lazy(() => import('../pages/Favs'));
const Home = React.lazy(() => import('../pages/Home'));
const Detail = React.lazy(() => import('../pages/Detail'));
const Register = React.lazy(() => import('../pages/Register'));
const Login = React.lazy(() => import('../pages/Login'));
const User = React.lazy(() => import('../pages/User'));

const Router = () => {
  const { state } = useContext(AppContext);

  return (
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<PublicRoute />}>
            <Route index element={<Home />} />
            <Route exact path='/pet/:categoryId' element={<Home />} />
            <Route exact path='/detail/:detailId' element={<Detail />} />
          </Route>
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          {state.isLoged
            ? <>
              <Route exact path='/favs' noThrow element={<Favs />} />
              <Route exact path='/user' noThrow element={<User />} />
            </>
            : <>
              <Route exact path='/favs' element={<Navigate noThrow to='/login' />} />
              <Route exact path='/user' element={<Navigate noThrow to='/login' />} />
            </>}
        </Routes>
        <NavBar />
      </BrowserRouter>
    </Suspense>

  );
};

export { Router };
