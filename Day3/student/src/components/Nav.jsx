import React from "react";
import { AppBar, Button, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <h3>Student</h3>
          &nbsp; &nbsp;
          <Link to="/add">
            <Button variant="contained">Add</Button>
          </Link>
          &nbsp; &nbsp;
          <Link to="/view">
          <Button variant="contained">view</Button>
          </Link>
          &nbsp; &nbsp;
          
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
