import React from 'react';
import './styles.scss';

export const LoadingPhotoCard = () => {
  return (
    <article className='LoadingPhotoCard'>
      <figure className='LoadingPhotoCard-figure' />
      <div className='LoadingPhotoCard-div'>
        <div className='LoadingPhotoCard-span-uno' />
        <div className='LoadingPhotoCard-span-dos' />
      </div>
    </article>
  );
};
