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

export const UN_FOLLOW = gql`
    mutation Mutation($username: String!) {
        unFollow(username: $username)
    }
`;
