import {gql} from '@apollo/client';

export const ADD_COMMENT = gql`
    mutation AddComment($input: AddCommentInput!) {
        addComment(input: $input) {
            id
            publicationId
            userId
            comment
            createdAt
            updatedAt
        }
    }
`;
