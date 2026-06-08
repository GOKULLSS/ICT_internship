import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Update = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const [form, setForm] = useState(location.state);

  const valueUpdate = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const updateInfo = () => {

    axios.put(
      `http://localhost:3000/update/${form._id}`,
      form
    )
    .then(() => {
      navigate('/view');
    })
    .catch((err) => {
      console.log(err);
    });
  };

  return (
    <div>
      <h1>Update Student</h1>

      <TextField
        label="Name"
        name="name"
        value={form.name}
        onChange={valueUpdate}
      /><br /><br />

      <TextField
        label="Age"
        name="age"
        value={form.age}
        onChange={valueUpdate}
      /><br /><br />

      <TextField
        label="Department"
        name="department"
        value={form.department}
        onChange={valueUpdate}
      /><br /><br />

      <TextField
        label="Mark"
        name="mark"
        value={form.mark}
        onChange={valueUpdate}
      /><br /><br />

      <Button
        variant="contained"
        color="success"
        onClick={updateInfo}
      >
        Update
      </Button>
    </div>
  );
};

export default Update;