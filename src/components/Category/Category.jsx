import React from 'react';
import { Anchor, Image } from '../../styles';

const defaultImg = 'https://i.imgur.com/dJa0Hpl.jpeg';

const Category = ({ cover = defaultImg, path, emoji = '?' }) => {
  return (
    <Anchor href={path}>
      <Image src={cover} alt='image' />
      {emoji}
    </Anchor>
  );
};

export { Category };
