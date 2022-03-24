import {Search as SearchSU} from 'semantic-ui-react';
import './Search.scss';

export const Search = () => {
  return (
    <SearchSU
      className="search-users"
      input={{
        icon: 'search',
        iconPosition: 'left',
      }}
    />
  );
};
