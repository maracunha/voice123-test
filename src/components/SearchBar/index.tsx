import { styled, alpha } from '@mui/material/styles';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { Button, Box, InputBase, AppBar, Toolbar, Typography, ButtonProps } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { lightBlue } from '@mui/material/colors';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.primary.main, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const CustomButton = styled(Button)<ButtonProps>(() => ({
  color: 'white',
  backgroundColor: lightBlue[500],
  '&:hover': {
    backgroundColor: lightBlue[700],
  },
}));

const SearchItem = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      navigate(`/search?keywords=${search}`, { replace: true });
    }
  };

  const handleClick = () => {
    navigate(`/search?keywords=${search}`, { replace: true });
  };

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1, mb: 2 }}>
      <AppBar component="div" position="static">
        <Toolbar component="div">
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            The Test!
          </Typography>
          <Box display="flex" width="80%" justifyContent="space-between">
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleOnChange}
              onKeyPress={handleSearch}
            />
          </Search>
          <CustomButton variant="contained" onClick={handleClick}>Search</CustomButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default SearchItem;
