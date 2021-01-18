import {GraphQLServer} from "graphql-yoga"
import resolvers from './graphql/resolvers'

const server = new GraphQLServer({
    typeDefs: "graphql/shema.graphql",
    resolvers,
});

server.start(() => console.log("Graphql server Running"))