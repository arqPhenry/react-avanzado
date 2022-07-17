import React from 'react';
import { PhotoCardDetail } from '../components/PhotoCardDetail';
import { getPhotoById } from '../hooks/useGetPhotos.js';
import { useQuery } from '@apollo/client';
import { LoadingPhotoCard } from '../components/LoadingPhotoCards/LoPhotoCard.jsx';

export const PhotoCardWithQuery = ({ id }) => {
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
    <PhotoCardDetail {...data.photo} />
  );
};
