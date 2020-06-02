const path = require('path');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const morgan = require('morgan');
const dotEnv = require('dotenv');
const cors = require('cors');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

// setting up the env variables
dotEnv.config();

const app = express();

// cors middleware
app.use(cors());

//setting up the morgan logger middleware
app.use(morgan('dev'));

//body parser middleware
app.use(express.json());

// setting up the apollo server middleware

const apolloServer = new ApolloServer({
	typeDefs,
	resolvers
});

apolloServer.applyMiddleware({ app, path: '/graphql' });

// configure production env
app.use(express.static('public'));

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
	console.log(`Server listening at port ${PORT}`);
	console.log(`Graphql endpoint: ${apolloServer.graphqlPath}`);
});
