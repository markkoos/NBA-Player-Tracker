import { gql } from '@apollo/client';

// executes mutations defined on typeDefs file on server side

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
            }
        }
    }
`;

export const LOGIN_USER = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            token
            user {
                _id
            }
        }
    }
`;

export const ADD_PLAYER = gql`
    mutation addPlayer($_id: ID!, $input: PlayerInput) {
        addPlayer(_id: $_id, input: $input) {
            _id
            username
            email
            players {
                player_id
                first_name
                last_name
            }
        }
    }
`;