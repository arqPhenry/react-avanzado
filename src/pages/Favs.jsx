import React from 'react';
import { FavsWithQuery } from '../containers/FavsWithQuery';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

export const H1 = styled.h1`
    margin-bottom: 32px;
`;

const Favs = ({ favs = [] }) => {
  return (
    <>
      <Helmet>
        <title>PetGram | 💖 Favs</title>
        <meta name='description' content='My favorites photos on Petgram' />
      </Helmet>
      <H1>Favorites</H1>
      <FavsWithQuery />
    </>
  );
};

export default Favs;
