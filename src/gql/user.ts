import {gql} from '@apollo/client';

export const REGISTER = gql`
    mutation Register($input: UserInput!) {
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

export const LOGIN = gql`
    mutation Login($input: LoginInput!) {
        login(input: $input) {
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

export const RENEWTOKEN = gql`
    mutation RenewToken {
        renewToken {
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

export const GET_USER = gql`
    query GetUser($id: ID, $email: String, $username: String) {
        getUser(id: $id, email: $email, username: $username) {
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
    }
`;

export const UPDATE_AVATAR = gql`
    mutation Mutation($file: Upload!) {
        updateAvatar(file: $file) {
            status
            urlAvatar
        }
    }
`;

export const DELETE_AVATAR = gql`
    mutation Mutation {
        deleteAvatar
    }
`;

export const UPDATE_USER = gql`
    mutation Mutation($input: updateUserInput!) {
        updateUser(input: $input)
    }
`;
