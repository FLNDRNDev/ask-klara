import { 
   ApolloClient,
   DefaultOptions,
   HttpLink,
   InMemoryCache,
} from '@apollo/client';


const defaultOptions: DefaultOptions = {
   watchQuery: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
   },
   query: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
   },
   mutate: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
   },
};

export const serverClient = new ApolloClient({
   ssrMode: true,
   link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_GRAPQL_ENDPOINT,   // Replace your GraphQL endpoint
      headers: {
         Authorization: `Apikey ${process.env.GRAPHQL_TOKEN}`
      }
   },
   fetch,
});
