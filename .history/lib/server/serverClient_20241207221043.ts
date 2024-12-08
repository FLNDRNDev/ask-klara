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

const client = new ApolloClient({
   link: httpLink,
   cache: new InMemoryCache(),
   defaultOptions: defaultOptions,
});