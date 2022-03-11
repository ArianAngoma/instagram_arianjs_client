import {gql} from '@apollo/client';

export const REGISTER = gql`
    mutation Register($input: UserInput) {
        register(input: $input) {
            user {
                id
                name
                username
                email
                description
                web
                avatar
                createdAt
                updatedAt
            }
            token
        }
    }
`;
