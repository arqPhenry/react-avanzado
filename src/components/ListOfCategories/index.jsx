import React, { useState, useEffect } from 'react';
import { Category } from '@components/Category/index.jsx';
import { LoadingCategory } from '@components/LoadingCategory/index.jsx';
import { List, Item } from './styles.js';

const useCategoriesData = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await window.fetch('https://petgram-server-phenry.vercel.app/categories');

      const data = await response.json();

      setCategories(data);
      setloading(false);
    };

    fetchCategories();
  }, []);

  return { categories, loading };
};

const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData();
  const [fixed, setFixed] = useState(false);

  useEffect(function () {
    const onScroll = e => {
      const isShowFixed = window.scrollY > 160;
      setFixed(isShowFixed);
      // console.log('ejecutando');
    };

    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll);
  }, [fixed]);

  const renderList = () => (
    <List>
      {
            categories.map(category => <Item key={category.id}> <Category {...category} /> </Item>)
          }
    </List>
  );
  const renderListFixed = () => (
    <List fixed={fixed}>
      {
            categories.map(category => <Item key={category.id}> <Category {...category} /> </Item>)
            }
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
