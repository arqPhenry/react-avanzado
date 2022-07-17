import React from 'react';
import { Link, Image, Div, Span, Par } from './styles';

const Category = ({ cover, path = '/', name, emoji, fixed }) => {
  return (
    <Link className='Anchor' to={path} fixed={fixed ? 'true' : 'false'}>
      <Image className='Image' src={cover} alt='image' />
      <Div className='container' fixed={fixed}>
        <Span>{emoji}</Span>
        <Par>{name}</Par>
      </Div>
    </Link>
  );
};

export { Category };
