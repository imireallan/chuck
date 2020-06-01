const { gql } = require("apollo-server-express");

module.exports = gql`
    extend type Query {
        categories: [String!]
        jokes(category: String!): Joke!
    }
    type Joke {
        id: ID!
        value: String!
        categories: [String!]
        icon_url: String!
        url: String!
        created_at: String!
        updated_at: String!
    }
`;
