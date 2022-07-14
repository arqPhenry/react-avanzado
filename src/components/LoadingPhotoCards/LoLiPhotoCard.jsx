import React from 'react';
import { LoadingPhotoCard } from './LoPhotoCard';
import './listyle.scss';

export const LoadingListPhotoCard = () => {
  return (
    <div className='container'>
      <LoadingPhotoCard />
      <LoadingPhotoCard />
      <LoadingPhotoCard />
      <LoadingPhotoCard />
    </div>
  );
};
