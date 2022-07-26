import React from 'react';
import { useParams } from 'react-router';
import { PhotoCardWithQuery } from '../containers/PhotoCardWithQuery.jsx';

export const Detail = () => {
  const params = useParams();

  return (
    <>
      <PhotoCardWithQuery id={params.detailId} />
    </>

  );
};
