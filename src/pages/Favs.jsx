import React from 'react';
import { FavsWithQuery } from '../containers/FavsWithQuery';
import styled from 'styled-components';

export const H1 = styled.h1`
    margin-bottom: 32px;
`;

const Favs = ({ favs = [] }) => {
  return (
    <>
      <H1>Favorites</H1>
      <FavsWithQuery />
    </>
  );
};

export { Favs };
