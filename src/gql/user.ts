import {gql} from '@apollo/client';

export const REGISTER = gql`
    mutation registerMutation($input: UserInput!) {
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
    mutation loginMutation($input: LoginInput!) {
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
    mutation renewTokenMutation {
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
    mutation updateAvatarMutation($file: Upload!) {
        updateAvatar(file: $file) {
            status
            urlAvatar
        }
    }
`;

export const DELETE_AVATAR = gql`
    mutation deleteAvatarMutation {
        deleteAvatar
    }
`;

export const UPDATE_USER = gql`
    mutation updateUserMutation($input: updateUserInput!) {
        updateUser(input: $input)
    }
`;


export const SEARCH = gql`
    query Search($query: String) {
        search(query: $query) {
            id
            name
            username
            email
            avatar
            web
            description
            createdAt
            updatedAt
        }
    }
`;
