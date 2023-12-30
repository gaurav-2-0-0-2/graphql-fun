import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

 const resolvers = {
   Query: {
     books: () => books,
   },
 };

 export const books = [
   {
     title: "The Awakening",
     author: "Mr. Joe",
   },
   {
     title: "City of Glass",
     auhtor: "Paul Auster",
   },
 ];

 export const typeDefs = `

 #graphql

 type Book {
    name:String 
    author:String 
 }

 type Query {
 	books: [Book]
 }

 `;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`Server is running at: ${url}`);
