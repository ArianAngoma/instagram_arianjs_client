import {gql} from '@apollo/client';

export const ADD_LIKE = gql`
    mutation AddLike($publicationId: ID!) {
        addLike(publicationId: $publicationId)
    }
`;
