import { ApolloServer } from "apollo-server"; // alternative - express graphql .
import  typeDefs from "./schema/type-defs.mjs";
import  resolvers  from "./schema/resolvers.mjs";
const server = new ApolloServer({typeDefs,resolvers}); // every query defined will be in typeDefs , resolvers are the functions that deal with the data . 

server.listen().then(({url})=>{
    console.log(`API's listening at ${url}`);
})
