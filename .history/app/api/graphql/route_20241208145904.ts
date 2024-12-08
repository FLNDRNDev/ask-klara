import { serverClient } from "@/lib/server/serverClient";
import { NextRequest } from "next/server";


export async function POST(request: NextRequest) {
   const { query, variables } = await request.json();

   try {
      let result;

      if (query.trim().startsWith("mutation")) {
         // Handle mutations
         result = await serverClient.mutate({
            mutation: gql`
               ${query}
            `,
            variables,
         });

      }
      else {
         // Handle queries
         result = await serverClient.query({
            query: gql`
               ${query}
            `,
            variables,
         });
      }
      
   } 
   catch (error) {
      
   }

}
