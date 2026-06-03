import React from "react";
import { Button, TextField } from "@mui/material";
const Signup = () => {
  return (
    <div>
      <h3>signup</h3>
      <TextField id="outlined-basic" label="Name" variant="outlined" />
      <br />
      <br />

      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <br />
      <br />
      <TextField id="outlined-basic" label="Password" variant="outlined" />
      <br />
      <br />

      <Button variant="contained">submit</Button>
      <br />
      <br />
    </div>
  );
};

export default Signup;
