import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://petgram-server-phenry.vercel.app/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = window.sessionStorage.getItem('tokenlogin');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,

  document.getElementById('root'));
