import './Profile.scss';
import {useQuery} from '@apollo/client';
import {GET_USER} from '../../gql/user';

interface IProps {
  username: string;
}

export const Profile = ({username}: IProps) => {
  const {data, loading, error} = useQuery(GET_USER, {
    variables: {
      username,
    },
  });

  if (loading) return null;
  if (error) return <h1>Usuario no encontrado</h1>;

  return (
    <div>
      <h1>Profile</h1>
    </div>
  );
};
