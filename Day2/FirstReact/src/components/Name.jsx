import { Button } from '@mui/material'
import React, { useState } from 'react'

const Name = () => {
    var[name,setname]=useState()
    const React=()=>{
        setname("React")

    }
    const Python=()=>{
        setname("Python")


    }
    const Java=()=>{
        setname("Java")


    }

  return (
    <div>
        <h1>WELCOME {name}</h1>
        <Button variant='contained' color='warning' onClick={React}>React</Button>&nbsp; &nbsp;
        <Button variant='contained' color='primary' onClick={Java}>Java</Button>&nbsp; &nbsp;
        <Button variant='contained' color='success' onClick={Python}>Python</Button>&nbsp; &nbsp;
        

    </div>
  )
}

export default Name