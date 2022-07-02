import React from 'react';
import { Anchor, Image } from './styles';

const Category = ({ cover, path, emoji }) => {
  return (
    <Anchor href={path}>
      <Image src={cover} alt='image' />
      {emoji}
    </Anchor>
  );
};

export { Category };
