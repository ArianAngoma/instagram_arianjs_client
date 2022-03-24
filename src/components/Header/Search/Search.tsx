import {useState} from 'react';
import {useQuery} from '@apollo/client';
import {DropdownItemProps, Search as SearchSU} from 'semantic-ui-react';
import './Search.scss';

import {SEARCH} from '../../../gql/user';

export const Search = () => {
  const [search, setSearch] = useState<string | null>(null);
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

  return (
    <SearchSU
      className="search-users"
      input={{
        icon: 'search',
        iconPosition: 'left',
      }}
      onSearchChange={onChange}
    />
  );
};
