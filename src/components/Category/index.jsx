import React from 'react';
import { Anchor, Image } from './styles';

const Category = ({ cover, path }) => {
  return (
    <Anchor className='Anchor' href={path}>
      <Image className='Image' src={cover} alt='image' />
    </Anchor>
  );
};

export { Category };
