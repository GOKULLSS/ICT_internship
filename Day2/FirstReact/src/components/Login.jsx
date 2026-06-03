import { Button, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
        <h3>Login page</h3><br />
        <TextField id="outlined-basic" label="Email" variant="outlined" /><br /><br />
        <TextField id="outlined-basic" label="Password" variant="outlined" /><br /><br />

        <Button variant='contained'>submit</Button><br /><br />
        
        
        
        
    </div>
  )
}

export default Login


