import React, { useState, useEffect, useRef } from 'react';
import { Category } from '@components/Category/index.jsx';
import { LoadingCategory } from '@components/LoadingCategory/index.jsx';
import { List, Item } from './styles.js';

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

  /* useEffect(function () {
    const observer = new window.IntersectionObserver(function (entries) {
      const { isIntersecting } = entries[0];
      if (isIntersecting) {
        console.log('Intersecta lista');
        setFixed(false);
      } else {
        console.log('No intersecta lista');
        setFixed(true);
      }
    });
    observer.observe(list.current);
  }, [list]); */

  /* useEffect(function () {
    const onScroll = e => {
      const isShowFixed = window.scrollY > 160;
      setFixed(isShowFixed);
      // console.log('ejecutando');
    };

    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll);
  }, [fixed]); */

  const renderCategories = () => (
    categories.map(category =>
      <Item key={category.id}>
        <Category {...category} />
      </Item>)
  );

  const renderList = () => (
    <List ref={list}>
      {renderCategories()}
    </List>
  );
  const renderListFixed = () => (
    <List fixed={fixed}>
      {renderCategories()}
    </List>
  );
  return (
    <>
      {loading ? <LoadingCategory /> : renderList()}
      {fixed && renderListFixed()}
    </>
  );
};

export { ListOfCategories };
