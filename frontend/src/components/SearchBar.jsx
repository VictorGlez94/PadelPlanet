import { TextField, IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ onSearchChange }) => {
  const handleChange = (event) => {
    onSearchChange(event.target.value);
  };

  return (
    <TextField
      sx = {{marginTop: '20px'}}
      variant="outlined"
      placeholder="Buscar..."
      onChange={handleChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      fullWidth
    />
  );
};

export default SearchBar;
