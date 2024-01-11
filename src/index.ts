import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import {readFileSync} from "fs";
import {resolvers} from "../src/resolvers/index"


export const typeDefs = readFileSync("./schema/schema.graphql", {encoding: "utf-8"});


const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`Server is running at: ${url}`);
