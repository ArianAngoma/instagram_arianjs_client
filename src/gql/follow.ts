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

export const GET_FOLLOWERS = gql`
    query GetFollowers($username: String!) {
        getFollowers(username: $username) {
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
