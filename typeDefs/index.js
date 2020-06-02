const { gql } = require('apollo-server-express');

const userTypeDef = require('./user');

const jokesDefs = require('./jokes');

const rootTypeDefs = gql`
	scalar Date

	type Query {
		_: String
	}

	type Mutation {
		_: String
	}
`;

module.exports = [ rootTypeDefs, jokesDefs, userTypeDef ];
