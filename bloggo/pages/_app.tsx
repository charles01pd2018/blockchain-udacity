// dependencies
import 'reflect-metadata'; // FIXES A MONGODB BUG FOR NEXT-AUTH *DO NOT REMOVE*
import { Provider } from 'next-auth/client';
import { useEffect } from 'react';
// client
import { ApolloProvider } from '@apollo/react-hooks';
import useApollo from '../db/client/apolloClient';
// types
import type { AppProps } from 'next/app'
// styles
import '../styles/styles.scss';


const BloggoApp = ( { Component, pageProps }: AppProps ) => {
  const { initialApolloState, session } = pageProps;
  const apolloClient = useApollo( initialApolloState );
  
  // necessary to remove chrome animation bug
  useEffect( () => {
    document.body.classList?.remove('loading');
  }, [] );

  return (
        <ApolloProvider client={apolloClient}>
            <Provider session={session}>
                <Component {...pageProps} />
            </Provider>
        </ApolloProvider>
    );
}

export default BloggoApp;