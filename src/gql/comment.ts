import {gql} from '@apollo/client';

export const ADD_COMMENT = gql`
    mutation AddComment($input: AddCommentInput!) {
        addComment(input: $input) {
            id
            publicationId
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
            comment
            createdAt
            updatedAt
        }
    }
`;

export const GET_COMMENTS = gql`
    query GetComments($publicationId: ID!) {
        getComments(publicationId: $publicationId) {
            id
            publicationId
            comment
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
            createdAt
            updatedAt
        }
    }
`;
