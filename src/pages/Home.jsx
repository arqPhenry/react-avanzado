import React from 'react';
import { useParams } from 'react-router';
import { ListOfPhotoCardsContainer } from '../containers/ListOfPhotoCardsContainer.jsx';
import { Helmet } from 'react-helmet';

export const Home = () => {
  const params = useParams();

  return (
    <>
      <Helmet>
        <title>PetGram | 🏠 Home</title>
        <meta name='description' content='With Petgram you cand find very nice pictures of pets and domestic animals.' />
      </Helmet>
      <ListOfPhotoCardsContainer categoryId={params.categoryId} />
    </>
  );
};
