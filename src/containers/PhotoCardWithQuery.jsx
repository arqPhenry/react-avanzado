import React from 'react';
import { PhotoCard } from '../components/PhotoCard';
import { getPhotoById } from '../hooks/useGetPhotos.js';
import { useQuery } from '@apollo/client';
import { LoadingPhotoCard } from '../components/LoadingPhotoCards/LoPhotoCard.jsx';

export const PhotoCardWithQuery = ({ id }) => {
  console.log(id);
  const { loading, error, data } = useQuery(getPhotoById, {
    variables: {
      id
    }
  });
  if (error) {
    return <h2>Internal Server Error</h2>;
  }
  if (loading) {
    return <LoadingPhotoCard />;
  }

  return (
    <PhotoCard {...data.photo} />
  );
};
