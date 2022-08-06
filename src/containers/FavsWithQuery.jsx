import React from 'react';
import { useGetFavorites } from '../hooks/useGetFavs';
import { LoadingListOfFavs } from '../components/ListOfFavs/loadingindex';
import { ListOfFavs } from '../components/ListOfFavs';

export const FavsWithQuery = () => {
  const { data, loading, error } = useGetFavorites();

  if (error) {
    return <h2>Internal Server Error</h2>;
  } else if (loading) {
    return <LoadingListOfFavs />;
  }

  return <ListOfFavs favs={data.favs} />;
};
