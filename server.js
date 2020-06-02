const path = require('path');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const dotEnv = require('dotenv');
const cors = require('cors');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const { mongoConnection } = require('./utils');
const {verifyUser} = require('./helpers/context');

// setting up the env variables
dotEnv.config();

const app = express();

// cors middleware
app.use(cors());

// set up mongo db connection
mongoConnection();

//setting up the morgan logger middleware
if (process.env.NODE_ENV === 'development') {
	const morgan = require('morgan');
	app.use(morgan('dev'));
}

//body parser middleware
app.use(express.json());

// setting up the apollo server middleware

const apolloServer = new ApolloServer({
	typeDefs,
	resolvers,
	context: async ({ req }) => {
		await verifyUser(req);
		return { email: req.email };
	}
});

apolloServer.applyMiddleware({ app, path: '/graphql' });

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('public'));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
	});
}

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
	console.log(`Server listening at port ${PORT}`);
	console.log(`Graphql endpoint: ${apolloServer.graphqlPath}`);
});
