import { NextRequest } from "next/server";


export async function POST(request: NextRequest) {
   const { query, variables } = await request.json();

   try {
      let result;

      if (query.trim().startsWith("mutation")) {
         // Handle mutations

      }
      else {
         // Handle queries

      }
      
   } 
   catch (error) {
      
   }

}