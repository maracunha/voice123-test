import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import SearchBar from '../../components/SearchBar';
import SearchItems from '../../components/SearchItems';

const Search = () => {
  return (
    <Box p={3} maxWidth="80rem" m="auto">
      <SearchBar />
      <Routes>
        <Route path="/search" element={<SearchItems />} />
      </Routes>
    </Box>
  );
};

export default Search;
