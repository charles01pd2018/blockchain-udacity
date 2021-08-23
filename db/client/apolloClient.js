// dependencies
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { useMemo } from 'react';
// utils
import { isSSR } from '../../utils'


/* HELPERS */
const createApolloClient = () => {
    const cache = new InMemoryCache();
    const http = new HttpLink( {
        uri: process.env.NEXT_PUBLIC_API_HOST,
    } );
    const link = ApolloLink.from( [ 
        http
    ] );

    return new ApolloClient( {
        ssrMode: isSSR(),
        link: link,
        cache: cache,
    } );
}

let apolloClient;
const initializeApollo = ( initialState=null ) => {
     // nullish logical operator - only creates apollo client if initial let is null
    const _apolloClient = apolloClient ?? createApolloClient();

    if ( initialState ) {
        const existingCache = _apolloClient.extract();
        // merge existing cache with initial state
        _apolloClient.cache.restore( { ...existingCache, ...initialState } ); 
    }
    // create apolloClient once in the client
    if ( !apolloClient ) apolloClient = _apolloClient; 

    return _apolloClient;
}

/* RETURN */
const useApollo = ( initialState ) => {
    // reinitialize apolloClient only when initialState changes
    const store = useMemo( () => initializeApollo( initialState ), [ initialState ] ); 
    
    return store;
}

export default useApollo;