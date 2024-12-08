'use client';

import { ApolloProvider } from "@apollo/client";
// import client from "@/graphql/apolloClient"; // Make sure the path is correct


const ApolloProviderWrapper = ({ children }: { children: React.ReactNode }) => {
   return <ApolloProvider>{children}</ApolloProvider>;
};

export default ApolloProviderWrapper;
