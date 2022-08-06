import React from 'react'
import SearchBox from './SearchBox'
import Datatable from './Datatable'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import Filters from './Filters';
import { Typography } from '@mui/material';
function SectionBox() {
  return (
    <Box>
        <Grid container spacing={2}>
            <Grid item xs={4}>
            <SearchBox></SearchBox>
            </Grid>
            <Grid item xs={8}>
                <Stack direction={"row"} spacing={2} sx={{marginTop:3,}}>
                <PersonOutlinedIcon/>
                <Typography sx={{fontFamily:"Roboto"}}>Students</Typography>
                <Button variant="contained">New</Button>
                </Stack>
            </Grid>
            <Grid item xs={4}>
            <Filters></Filters>
            </Grid>
            <Grid item xs={8}>
            <Datatable></Datatable>
            </Grid>
        </Grid>
    </Box>
  )
}

export default SectionBox
