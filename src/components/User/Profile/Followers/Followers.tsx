import './Followers.scss';

interface IProps {
  username: string;
}

export const Followers = ({username}: IProps) => {
  return (
    <div className="followers">
      <p>
        <span>50</span> publicaciones
      </p>
      <p className="link">
        <span>6777</span> seguidores
      </p>
      <p className="link">
        <span>20</span> seguidos
      </p>
    </div>
  );
};
