import React from 'react'
import Logo from './Logo'
import Userprofile from './Userprofile'
import Stack from '@mui/material/Stack';

function Header() {
  return (
    <Stack direction={"row"} justifyContent={"space-between"} >
    
      <Logo></Logo>
      <Userprofile></Userprofile>

    </Stack>
    
  )
}

export default Header
