import {InputBase, Box, styled} from '@mui/material';
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled(Box)`
    background: #fff;
    width: 38%;
    border-radius: 4px;
    margin-left: 15px;
`;
const InputSearchBase = styled(InputBase)`
    padding-left: 20px;
    width: 100%;

`;
const SearchIconWrapper = styled(SearchIcon)`
    color: black;

`;



function Search() {
  return (
    <SearchContainer style={{ display: 'flex'  }}>
        <InputSearchBase
            placeholder='Search for Products, Brands and more'
        ></InputSearchBase>
        <Box style={{ display: 'flex', alignItems: 'center' }}>
            < SearchIconWrapper />
        </Box>
    </SearchContainer>
  )
}

export default Search