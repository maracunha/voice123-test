import { Route, Routes } from 'react-router-dom';

import SearchBar from '../../components/SearchBar';
import SearchItems from '../../components/SearchItems';

const Search = () => {
  return (
    <>
      <SearchBar />
      <Routes>
        <Route path="/search" element={<SearchItems />} />
      </Routes>
    </>
  );
};

export default Search;
