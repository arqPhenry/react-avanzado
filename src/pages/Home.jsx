import React from 'react';
import { useParams } from 'react-router';
import { ListOfCategories } from '@components/ListOfCategories/index.jsx';
import { ListOfPhotoCardsContainer } from '../containers/ListOfPhotoCardsContainer.jsx';
import { Logo } from '@components/Logo/index.jsx';

export const Home = () => {
  const params = useParams();

  return (
    <>
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCardsContainer categoryId={params.categoryId} />
    </>
  );
};
