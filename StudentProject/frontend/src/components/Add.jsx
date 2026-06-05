import { Button, TextField } from '@mui/material'
import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Add = () => {
  let navigate=useNavigate();
  const [form,setForm]=useState({
    name:'',
    age:0,
    department:'',
    mark:0
  })
  let valueUpdate=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})

  }
  let submitInfo=()=>{
    axios.post('http://localhost:3000/newstudent',form)
    .then((res)=>{
      navigate('/view')

    })
    .catch((err)=>{
      console.log(err);

    })

  }
  return (
    <div>
        <h1>Add</h1>
        <TextField label='Name' name='name' value={form.name} onChange={valueUpdate}></TextField><br /><br />
        <TextField label='Age' name='age' value={form.age} onChange={valueUpdate}></TextField><br /><br />
        <TextField label='Department' name='department' value={form.department} onChange={valueUpdate}></TextField><br /><br />
        <TextField label='Mark' name='mark' value={form.mark} onChange={valueUpdate}></TextField><br /><br />
        <Button variant='contained' color='success' onClick={submitInfo}>Submit</Button>




        
        
    </div>
  )
}

export default Add