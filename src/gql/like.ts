import {gql} from '@apollo/client';

export const ADD_LIKE = gql`
    mutation AddLike($publicationId: ID!) {
        addLike(publicationId: $publicationId)
    }
`;

export const IS_LIKE = gql`
    query IsLike($publicationId: ID!) {
        isLike(publicationId: $publicationId)
    }
`;

export const DELETE_LIKE = gql`
    mutation DeleteLike($publicationId: ID!) {
        deleteLike(publicationId: $publicationId)
    }
`;
