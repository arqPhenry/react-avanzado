import React from 'react';
import { Anchor, Image, Div, Span, Par } from './styles';

const Category = ({ cover, path, name, emoji }) => {
  return (
    <Anchor className='Anchor' href={path}>
      <Image className='Image' src={cover} alt='image' />
      <Div className='container'>
        <Span>{emoji}</Span>
        <Par>{name}</Par>
      </Div>
    </Anchor>
  );
};

export { Category };
