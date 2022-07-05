import React, { useState, useEffect } from 'react';
import { Category } from '@components/Category/index.jsx';
import { List, Item } from './styles.js';

const ListOfCategories = () => {
  const [categories, setCategories] = useState([]);
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await window.fetch('https://petgram-server-phenry.vercel.app/categories');

      const data = await response.json();

      setCategories(data);
    };

    fetchCategories();
  }, []);

  useEffect(function () {
    const onScroll = e => {
      const isShowFixed = window.scrollY > 160;
      setFixed(isShowFixed);
    };

    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll);
  }, [fixed]);

  return (
    <>
      <List>
        {
          categories.map(category => <Item key={category.id}> <Category {...category} /> </Item>)
        }
      </List>
      {fixed &&
        <List className={fixed ? 'fixed' : ''}>
          {
          categories.map(category => <Item key={category.id}> <Category {...category} /> </Item>)
        }
        </List>}
    </>
  );
};

export { ListOfCategories };
