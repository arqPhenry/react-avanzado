import React from 'react';
import { Link, Grid, Image } from './styles';

const ListOfFavs = ({ favs = [] }) => {
  return (
    <Grid>
      {favs.length >= 1 && favs.map(fav => <Link key={fav.id} to={`/detail/${fav.id}`}><Image src={fav.src} /></Link>)}
      {favs.length < 1 && <p>You don't have favorites, like them and come back</p>}
    </Grid>
  );
};

export { ListOfFavs };
