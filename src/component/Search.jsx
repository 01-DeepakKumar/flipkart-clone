// Search.jsx
import React from 'react';
import { InputBase, Box, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled(Box)({
  background: '#fff',
  marginLeft: '2%',
  width: '40%',
  borderRadius: 2,
  display: 'flex',
  alignItems: 'center',
  padding: '0 10px',
});

const StyledInput = styled(InputBase)({
  paddingLeft: 10,
  width: '100%',
  fontSize: 14,
});

const Search = () => {
  return (
    <SearchContainer>
      <StyledInput placeholder="Search for products, brands and more" />
      <SearchIcon style={{ color: '#2874f0' }} />
    </SearchContainer>
  );
};

export default Search;
