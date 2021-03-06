import {gql} from '@apollo/client';

export const PUBLISH = gql`
    mutation publishMutation($file: Upload!) {
        publish(file: $file) {
            status
            urlFile
        }
    }
`;

export const GET_PUBLICATIONS = gql`
    query GetPublications($username: String!) {
        getPublications(username: $username) {
            id
            author {
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
            file
            fileType
            createdAt
            updatedAt
        }
    }
`;

export const GET_PUBLICATIONS_FOLLOWING = gql`
    query GetPublicationsFollowing {
        getPublicationsFollowing {
            id
            author {
                id
                name
                username
                email
                avatar
                web
                description
                updatedAt
                createdAt
            }
            file
            fileType
            createdAt
            updatedAt
        }
    }
`;
