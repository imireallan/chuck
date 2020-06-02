const { gql } = require('apollo-server-express');

module.exports = gql`
	extend type Query {
		users: [User!]
		user: User!
	}

	extend type Mutation {
		signUp(input: createUserInput!): User!
		login(input: loginInput!): Token!
	}

	type Token {
		token: String!
	}

	input loginInput {
		email: String!
		password: String!
	}

	input createUserInput {
		name: String!
		email: String!
		password: String!
	}

	type User {
		id: ID!
		name: String!
		email: String!
		createdAt: Date!
		updatedAt: Date!
	}
`;