const { gql } = require('apollo-server-express');

const typeDefs = gql`
    input PlayerInput {
        player_id: Number!
        first_name: String!
        last_name: String!  
    }

    type User {
        _id: ID!
        username: String!
        email: String!
        players: [Players]
    }

    type Players {
        player_id: Number!
        first_name: String!
        last_name: String!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addPlayer(_id: ID!, input: PlayerInput): User
    }
`

module.exports = typeDefs;

