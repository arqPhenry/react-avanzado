import React from 'react';
import { useParams } from 'react-router';
import { ListOfCategories } from '@components/ListOfCategories/index.jsx';
import { ListOfPhotoCardsContainer } from '../containers/ListOfPhotoCardsContainer.jsx';

export const Home = () => {
  const params = useParams();

  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCardsContainer categoryId={params.categoryId} />
    </>
  );
};
