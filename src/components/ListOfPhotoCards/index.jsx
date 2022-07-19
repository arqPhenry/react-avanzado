import React from 'react';
import { PhotoCard } from '../PhotoCard/index.jsx';
import './styles.scss';

export const ListOfPhotoCards = ({ data }) => {
  return (
    <ul className='ListOfPhotoCards'>
      {data.photos.map((photo) => <PhotoCard key={photo.id} {...photo} />)}
    </ul>
  );
};
