import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    let[name,setname]=useState('')
    let[name2,setname2]=useState()
    const inputHandler=(e)=>{
        console.log(e.target)
        setname(e.target.value)
    }
    const submitHandler=()=>{
        setname2(name)
        
    }
  return (
    <div>
        <h3>state </h3>
    <TextField label='Enter' onChange={inputHandler}/><br /><br />
    <Button variant='contained' color='success' onClick={submitHandler}>Click me</Button>
    <h4>{name2}</h4>
    </div>
  )
}

export default StateBasics