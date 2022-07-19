import React from 'react';
import { useParams } from 'react-router';
import { PhotoCardWithQuery } from '../containers/PhotoCardWithQuery.jsx';
import { NavBar } from '../components/NavBar/index.jsx';

export const Detail = () => {
  const params = useParams();

  return (
    <>
      <PhotoCardWithQuery id={params.detailId} />
      <NavBar />
    </>

  );
};
