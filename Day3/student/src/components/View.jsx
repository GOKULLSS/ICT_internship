import { Table, TableCell, TableContainer, TableHead } from '@mui/material'
import React from 'react'

const View = () => {
  return (
    <div>
        <h1>view</h1>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableCell>Name</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Department</TableCell>
                    <TableCell>Mark</TableCell>
                </TableHead>
            </Table>
        </TableContainer>
    </div>
  )
}

export default View