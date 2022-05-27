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
            userId
            file
            fileType
            createdAt
            updatedAt
        }
    }
`;
