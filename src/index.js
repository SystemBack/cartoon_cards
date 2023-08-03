import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <ApolloProvider client={client}>
          <CssBaseline />
          <Container fixed>
            <App />
          </Container>
      </ApolloProvider>
  </React.StrictMode>
);

reportWebVitals();
