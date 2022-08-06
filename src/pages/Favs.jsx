import React from 'react';
import { FavsWithQuery } from '../containers/FavsWithQuery';

const Favs = ({ favs = [] }) => {
  return (
    <>
      <h1>Favorites</h1>
      <FavsWithQuery />
    </>
  );
};

export { Favs };
