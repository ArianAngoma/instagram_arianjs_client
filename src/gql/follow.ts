import {gql} from '@apollo/client';

export const IS_FOLLOW = gql`
    query Query($username: String!) {
        isFollow(username: $username)
    }
`;

export const FOLLOW = gql`
    mutation Mutation($username: String!) {
        follow(username: $username)
    }
`;
