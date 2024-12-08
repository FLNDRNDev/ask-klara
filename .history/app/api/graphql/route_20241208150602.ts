import { NextRequest, NextResponse } from "next/server";

import { serverClient } from "@/lib/server/serverClient";
import { gql } from "@apollo/client";


const corsHeaders = {
   "Access-Control-Allow-Origin" : "*",
   "Access-Control-Allow-Methods" : "GET, POST, PUT, DELETE, OPTIONS",
   "Access-Control-Allow-Headers" : "Content-Type, Authorization", 
};

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

      const data = result.data;
      return NextResponse.json({
         data,
      }, {
         headers: 
      });
      
   } 
   catch (error) {
      
   }

}
