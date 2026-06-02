import { Button } from '@mui/material'
import React, { useState } from 'react'

const Cou = () => {
    var[a,seta]=useState(0)
    const add=()=> {
        seta(a+1)


    }
    const sub=()=>{
        seta(a-1)

    }

  return (
    <div>
        <h1>count is {a}</h1>
        <Button variant='contained' color='success' onClick={add}>+</Button> &nbsp;

        <Button variant='contained' color='error' onClick={sub}>-</Button>

    </div>
  )
}

export default Cou