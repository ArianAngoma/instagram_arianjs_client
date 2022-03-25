import {useEffect, useState} from 'react';
import {useQuery} from '@apollo/client';
import {Link} from 'react-router-dom';
import {
  DropdownItemProps, Image,
  Search as SearchSU,
  SearchResultProps,
} from 'semantic-ui-react';
import './Search.scss';
import ImageNoFound from '../../../assets/png/avatar.png';

import {SEARCH} from '../../../gql/user';
import {IUser} from '../../../interfaces/interfaces';

export const Search = () => {
  const [search, setSearch] = useState<string | null>(null);
  const [results, setResults] = useState<any[]>([]);
  const {data, loading} = useQuery(SEARCH, {
    variables: {
      query: search,
    },
  });

  const onChange = (e: DropdownItemProps) => {
    if (e.target.value) {
      setSearch(e.target.value);
    } else {
      setSearch(null);
    }
  };

  useEffect(() => {
    if (data?.search.length) {
      const users: any[] = [];
      data.search.forEach((user: IUser, index: number) => {
        users.push({
          key: index,
          title: user.name,
          username: user.username,
          avatar: user.avatar,
        });
      });
      setResults(users);
    } else {
      setResults([]);
    }
  }, [data]);

  return (
    <SearchSU
      className="search-users"
      input={{
        icon: 'search',
        iconPosition: 'left',
      }}
      fluid
      loading={loading}
      value={search || ''}
      onSearchChange={onChange}
      results={results}
      resultRenderer={(e) => <ResultSearch data={e}/>}
    />
  );
};

interface IProps {
  data: SearchResultProps;
}

const ResultSearch = ({data}: IProps) => {
  return (
    <Link
      className="search-users__item"
      to={`/${data.username}`}
    >
      <Image src={data.avatar || ImageNoFound}/>
      <div>
        <p>{data.title}</p>
        <p>{data.username}</p>
      </div>
    </Link>
  );
};
