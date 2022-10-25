import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import  SearchIcon  from "@mui/icons-material/Search";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <Paper
    sx={{
      borderRadius: 20,
      border: "1px solid #e3e3e3",
      pl: 3,
      boxShadow: "none",
      mr: { sm: 5 }
    }}
    >
    <form
      onSubmit= {handleSubmit}
    > 
      <input
        className='search-bar'
        placeholder='search...'
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <IconButton
        type="submit"
        sx={{ p: "10px", color: "red" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
      </form>
    </Paper>
  );
}

export default SearchBar;
