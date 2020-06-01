const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const morgan = require("morgan");
const dotEnv = require("dotenv");
const cors = require("cors");

// setting up the env variables
dotEnv.config();

const app = express();

// cors middleware
app.use(cors());

//seting up the morgan logger middleware
app.use(morgan("dev"));

//body parser middleware
app.use(express.json());

// setting up the apollo server middleware
const typeDefs = gql`
    type Query {
        hello: String!
    }
`;

const resolvers = {
    Query: {
        hello: () => "Hello world!",
    },
};

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
});

apolloServer.applyMiddleware({ app, path: "/graphql" });

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
    console.log(`Graphql endpoint: ${apolloServer.graphqlPath}`);
});
