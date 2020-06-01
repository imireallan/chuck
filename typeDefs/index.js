const { gql } = require("apollo-server-express");

const jokesDefs = require("./jokes");

const rootTypeDefs = gql`
    type Query {
        _: String
    }
`;

module.exports = [rootTypeDefs, jokesDefs];
