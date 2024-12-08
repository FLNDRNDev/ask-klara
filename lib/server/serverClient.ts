import { 
   ApolloClient,
   DefaultOptions,
   HttpLink,
   InMemoryCache,
} from '@apollo/client';


// Default options for Apollo Client
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

// Create the Apollo Client
export const serverClient = new ApolloClient({
   ssrMode: true, // Enable SSR mode for server-side rendering
   link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT, // Use the GraphQL endpoint
      headers: {
         Authorization: `Apikey ${process.env.GRAPHQL_TOKEN}`, // Include the token
      },
      fetch, // Explicitly pass fetch
   }),
   cache: new InMemoryCache(), // Required cache property
   defaultOptions, // Default options for queries and mutations
});
