import React from 'react';
import { useParams } from 'react-router';
import { ListOfPhotoCardsContainer } from '../containers/ListOfPhotoCardsContainer.jsx';

export const Home = () => {
  const params = useParams();

  return (
    <>
      <ListOfPhotoCardsContainer categoryId={params.categoryId} />
    </>
  );
};
