import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const View = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/").then((res) => {
      setStudents(res.data);
    });
  }, []);
  const deleteStudent = (id) => {
    axios
      .delete(`http://localhost:3000/delete/${id}`)
      .then(() => {
        setStudents(students.filter((student) => student._id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>view</h1>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Mark</TableCell>
              <TableCell>Update</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((val) => {
              return (
                <TableRow key={val._id}>
                  <TableCell>{val.name}</TableCell>
                  <TableCell>{val.age}</TableCell>
                  <TableCell>{val.department}</TableCell>
                  <TableCell>{val.mark}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="warning"
                      onClick={() =>
                        navigate("/update", {
                          state: val,
                        })
                      }
                    >
                      Update
                    </Button>
                  </TableCell>

                  <TableCell>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => deleteStudent(val._id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default View;
