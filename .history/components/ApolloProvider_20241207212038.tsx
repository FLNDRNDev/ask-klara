'use client';

import { ApolloProvider } from "@apollo/client";
import client from "@/graphql/apolloClient"; // Make sure the path is correct


const ApolloProviderWrapper = ({ children }: { children: React.ReactNode }) => {
   return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloProviderWrapper;
