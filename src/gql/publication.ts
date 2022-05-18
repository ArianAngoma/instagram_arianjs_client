import {gql} from '@apollo/client';

export const PUBLISH = gql`
    mutation publishMutation($file: Upload!) {
        publish(file: $file) {
            status
            urlFile
        }
    }
`;
