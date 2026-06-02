import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <h3>ICT</h3>&nbsp; &nbsp;
                <Link to='/login'>
                <Button variant="contained">login</Button> 
                </Link>
                &nbsp; &nbsp;
                <Link to='/'>
                <Button variant="contained">signup</Button> 
                </Link>
                &nbsp; &nbsp;
                <Link to='/state'>
                <Button variant='contained'>state</Button>
                </Link>

            </Toolbar>
        </AppBar>
    </div>
  )
}

export default NavBar