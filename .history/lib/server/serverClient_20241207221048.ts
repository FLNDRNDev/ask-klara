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