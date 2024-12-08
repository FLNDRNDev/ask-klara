'use client'

import { ApolloProvider } from "@apollo/client";


const ApolloProviderWrapper = ({ children }: { children: React.ReactNode }) => {
   return <ApolloProvider>children</ApolloProvider>
};

export default ApolloProviderWrapper;
