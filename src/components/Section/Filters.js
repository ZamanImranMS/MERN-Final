import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function Filters() {
  return (
    <div>
    <FormGroup>
      <FormControlLabel control={<Checkbox/>} label="Typography" />
      <FormControlLabel control={<Checkbox/>} label="Biologist" />
      <FormControlLabel control={<Checkbox/>} label="Chemistry Capital" />
      <FormControlLabel control={<Checkbox/>} label="Web Designers" />
      <FormControlLabel control={<Checkbox/>} label="Black Magician" />
      <FormControlLabel control={<Checkbox/>} label="Lame gamer Boys" />
    </FormGroup>
    </div>
  )
}

export default Filters
