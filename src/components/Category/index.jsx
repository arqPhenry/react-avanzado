import React from 'react';
import { Anchor, Image, Div, Span, Par } from './styles';

const Category = ({ cover, path, name, emoji, fixed }) => {
  return (
    <Anchor className='Anchor' href={path} fixed={fixed}>
      <Image className='Image' src={cover} alt='image' fixed={fixed} />
      <Div className='container' fixed={fixed}>
        <Span>{emoji}</Span>
        <Par>{name}</Par>
      </Div>
    </Anchor>
  );
};

export { Category };
