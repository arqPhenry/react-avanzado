import React, { useState, useEffect, useRef } from 'react';
import { Category } from '@components/Category/index.jsx';
import { LoadingCategory } from '@components/LoadingCategory/index.jsx';
import { List, Item, Button } from './styles.js';
import './style.scss';
import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md';

const ListOfCategories = () => {
  const [fixed, setFixed] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loading, setloading] = useState(true);
  const list = useRef(null);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await window.fetch('https://petgram-server-phenry.vercel.app/categories');
      const data = await response.json();
      setCategories(data);
      setloading(false);

      const observer = new window.IntersectionObserver(function (entries) {
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          // console.log('Intersecta lista');
          setFixed(false);
        } else {
          // console.log('No intersecta lista');
          setFixed(true);
        }
      });
      observer.observe(list.current);

      return () => {
        observer.disconnect();
      };
    };

    fetchCategories();
  }, []);

  const renderCategories = () => (
    categories.map(category =>
      <Item key={category.id} fixed={fixed}>
        <Category {...category} fixed={fixed} path={`/pet/${category.id}`} />
      </Item>)
  );
  const renderList = () => (
    <List ref={list} className='lista'>
      <Button type='button' className='izquierdo' onClick={scrollLeft}><MdArrowBackIos /></Button>
      <ul className='carrousel'>
        {renderCategories()}
      </ul>
      <Button type='button' className='derecho' onClick={scrollRight}><MdArrowForwardIos /></Button>
    </List>
  );
  const renderListFixed = () => (
    <List fixed={fixed}>
      <Button type='button' className='izquierdo' onClick={scrollLeftFixed} fixed={fixed}><MdArrowBackIos /></Button>
      <ul className='carrouselFixed'>
        {renderCategories()}
      </ul>
      <Button type='button' className='derecho' onClick={scrollRightFixed} fixed={fixed}><MdArrowForwardIos /></Button>
    </List>
  );
  const scrollRight = () => {
    const carrousel = document.querySelector('ul.carrousel');
    carrousel.scrollLeft >= 194 ? carrousel.scrollLeft = 0 : carrousel.scrollLeft += carrousel.offsetWidth;
  };
  const scrollLeft = () => {
    const carrousel = document.querySelector('ul.carrousel');
    carrousel.scrollLeft -= carrousel.offsetWidth;
  };
  const scrollRightFixed = () => {
    const carrousel = document.querySelector('ul.carrouselFixed');
    carrousel.scrollLeft >= 206 ? carrousel.scrollLeft = 0 : carrousel.scrollLeft += carrousel.offsetWidth;
  };
  const scrollLeftFixed = () => {
    const carrousel = document.querySelector('ul.carrouselFixed');
    carrousel.scrollLeft -= carrousel.offsetWidth;
  };
  return (
    <>
      {loading ? <LoadingCategory /> : renderList()}
      {fixed && renderListFixed()}
    </>
  );
};

export { ListOfCategories };
