import { gql } from '@apollo/client';

// executes queries defined on typeDefs file on server side

export const GET_ME = gql`
    me {
        _id
        username
        email
        players {
            _id
            firstName
            lastName
        }
    }
`