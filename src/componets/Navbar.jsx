import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'

import {logo} from '../utils/constant'

import SearchBar from './SearchBar'

function Navbar() {
  return (
   <Stack direction="row"
   alignItem = "centre"
   p={2}
   sx={{position:'sticky',backgroundColor:'#000',top:'0',justifyContent:'space-between'}}>
   
   <Link to="/" style={{display:'flex',alignItem:'centre'}}>
   <img src={logo} alt="logo" height={45} />
   </Link>
   <SearchBar/>
   </Stack>
  )
}

export default Navbar