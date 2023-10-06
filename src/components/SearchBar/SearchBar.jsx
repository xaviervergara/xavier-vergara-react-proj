import './SearchBar.css';

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const SearchBar = () => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          className="SearchBar"
          id="outlined-search"
          //   label="Search field"
          type="search"
        />
      </div>
    </Box>
  );
};

export default SearchBar;
//
