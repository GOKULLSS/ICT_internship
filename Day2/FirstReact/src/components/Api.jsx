import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";

const Api = () => {
  const [user, setuser] = useState([]);
  axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
    setuser(res.data);
    console.log(user);
  });

  return (
    <div>
      <h1>API</h1>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>UserName</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>City</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {user.map((val) => {
              return (
                <TableRow>
                  <TableCell>{val.name}</TableCell>
                  <TableCell>{val.username}</TableCell>
                  <TableCell>{val.email}</TableCell>
                  <TableCell>{val.address.city}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Api;
