import React, { useState } from 'react';

import {
  Box,
  Button,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core';

import { Search } from '@material-ui/icons';

import SORT_OPTIONS from '../../constants/sortOptions';

const SearchOptions = function SearchComponent({ onSearch }) {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');

  const handleChangeSearch = e => setSearch(e.target.value);
  const handleChangeSort = e => setSort(e.target.value);

  return (
    <Grid container justifyContent="center" alignContent="center">
      <Grid item xs={12} sm={8}>
        <TextField
          fullWidth
          id="search"
          label="Search for your next favorite contributors here"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
            value: search,
            onChange: handleChangeSearch,
          }}
        />
      </Grid>
      <Grid item xs={12} sm={2}>
        <Box px={2}>
          <FormControl variant="filled" fullWidth>
            <InputLabel id="sort-by-label">Sort by</InputLabel>
            <Select
              labelId="sort-by-label"
              id="sort-by-select"
              value={sort}
              onChange={handleChangeSort}
              variant="outlined"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>

              {SORT_OPTIONS.map(item => (
                <MenuItem key={item.value} value={item.value}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Grid>
      <Grid item xs={12} sm={2}>
        <Box px={2}>
          <Button
            type="button"
            variant="contained"
            color="primary"
            size="large"
            onClick={() => onSearch(search, sort)}
          >
            Search
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SearchOptions;
