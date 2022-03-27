import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';

import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';

import App from './components/App';


const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`
  }
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})



ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider  client={client}>
    <App />
    </ApolloProvider>


  </React.StrictMode>,
  document.getElementById('root')
);

