import React from 'react';
import { getPhotos } from '../hooks/useGetPhotos.js';
import { ListOfPhotoCards } from '../components/ListOfPhotoCards/index.jsx';
import { useQuery } from '@apollo/client';
import { LoadingListPhotoCard } from '../components/LoadingPhotoCards/LoLiPhotoCard.jsx';

export const ListOfPhotoCardsContainer = ({ categoryId }) => {
  const { loading, error, data } = useQuery(getPhotos, {
    variables: { categoryId }
  });

  if (error) {
    return <h2>Internal Server Error</h2>;
  } else if (loading) {
    return <LoadingListPhotoCard />;
  }

  return <ListOfPhotoCards data={data} />;
};
