import React from 'react';
import { Category } from '@Category/index.jsx';
import { List, Item } from './styles.js';
import { categories } from '../../../api/db.json';

const ListOfCategories = () => {
  return (
    <List>
      {
        categories.map(category => <Item key={category.id}> <Category {...category} /> </Item>)
      }
    </List>
  );
};

export { ListOfCategories };
