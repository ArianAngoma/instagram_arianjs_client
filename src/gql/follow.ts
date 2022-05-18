import {gql} from '@apollo/client';

export const IS_FOLLOW = gql`
    query Query($username: String!) {
        isFollow(username: $username)
    }
`;

export const FOLLOW = gql`
    mutation followMutation($username: String!) {
        follow(username: $username)
    }
`;

export const UN_FOLLOW = gql`
    mutation unFollowMutation($username: String!) {
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

export const GET_FOLLOWING = gql`
    query GetFollowing($username: String!) {
        getFollowing(username: $username) {
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
