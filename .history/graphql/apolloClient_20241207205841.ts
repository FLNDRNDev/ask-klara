import {
   ApolloClient,
   DefaultOptions,
   InMemoryCache,
   createHttpLink,
}  from '@apollo/client';
import { graphql } from 'graphql';


export const BASE_URL = 
   process.env.NODE_ENV !== "development" 
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : "http://localhost:3000";


const httpLink =  createHttpLink({
   uri: `${BASE_URL/api/graphql}`,     // Point to the new API route
});