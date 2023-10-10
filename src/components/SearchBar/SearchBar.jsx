import './SearchBar.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

const SearchBar = () => {
  return (
    <Box
      style={{
        height: '4em',
        display: 'flex',
        alignItems: 'center',
      }}
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '60ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon style={{ color: 'yellow' }} />
              </InputAdornment>
            ),
            classes: { root: 'borde-input' },
          }}
          id="outlined-search"
          // label="Encontra lo que buscas! "
          type="search"
        />
      </div>
    </Box>
  );
};

export default SearchBar;
//
