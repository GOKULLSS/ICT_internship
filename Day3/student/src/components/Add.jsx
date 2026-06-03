import { Button, TextField } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div>
        <h1>Add</h1>
        <TextField label='Name'></TextField><br /><br />
        <TextField label='Age'></TextField><br /><br />
        <TextField label='Department'></TextField><br /><br />
        <TextField label='Mark'></TextField><br /><br />
        <Button variant='contained' color='success'>Submit</Button>




        
        
    </div>
  )
}

export default Add