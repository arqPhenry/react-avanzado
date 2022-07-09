import React from 'react';
import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md';
import './styles.scss';

const Carrousel = ({ children, scrollLeft, scrollRight }) => {
  return (
    <div className='container'>
      <button type='button' className='izquierdo' onClick={scrollLeft}><MdArrowBackIos /></button>
      <ul className='carrousel'>
        {children}
      </ul>
      <button type='button' className='derecho' onClick={scrollRight}><MdArrowForwardIos /></button>
    </div>
  );
};

export { Carrousel };
