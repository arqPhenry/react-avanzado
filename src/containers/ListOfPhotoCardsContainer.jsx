import React from 'react';
import { getPhotos } from '../hooks/useGetPhotos.js';
import { ListOfPhotoCards } from '../components/ListOfPhotoCards/index.jsx';
import { useQuery } from '@apollo/client';

export const ListOfPhotoCardsContainer = ({ categoryId }) => {
  const { loading, error, data } = useQuery(getPhotos, {
    variables: { categoryId }
  });

  if (error) {
    return <h2>Internal Server Error</h2>;
  } else if (loading) {
    return <h2>Loading...</h2>;
  }

  return <ListOfPhotoCards data={data} />;
};
