import { gql, useQuery } from '@apollo/client';

const getFavorites = gql`
query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`;

export const useGetFavorites = () => {
  const { data, error, loading } = useQuery(getFavorites, { fetchPolicy: 'cache-and-network' });
  return { data, loading, error };
};
