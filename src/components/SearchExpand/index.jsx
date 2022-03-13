import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { Box, FormControl, Input, InputAdornment } from '@mui/material'

import { makeStyles } from '@mui/styles'
import { useState } from 'react'

import './search'

const useStyles = makeStyles({
  icon: {
    color: 'white',
    height: '35px',
    width: '35px',
  },
  searchText: {
    color: 'white',
    fontSize: '20px',
    // borderBottom: '2px solid white',
    // transition: 'all 0.2 linear',
    width: '30px',
  },
})

function SearchExpand({searchItem}) {
  const classes = useStyles()
  return (
    <>
      <Box>
        <FormControl variant="standard">
          <Input
            id="input-with-icon-adornment"
            onChange={(e) => searchItem(e)}
            startAdornment={
              <InputAdornment position="start" className={classes.searchText}>
                <SearchIcon className={classes.icon} />
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>
    </>
  )
}

export default SearchExpand
