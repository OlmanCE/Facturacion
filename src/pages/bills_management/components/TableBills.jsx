import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import { deleteFactura } from '../../../dataService/DataStorage';

export const TableBills = ({ id, fecha, total, cliente, estado ,onDelete}) => {
  const handleDelete = () => {
    deleteFactura(id);
    onDelete();
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="center">Fecha</TableCell>
            <TableCell align="center">Total</TableCell>
            <TableCell align="center">Cliente</TableCell>
            <TableCell align="center">Estado</TableCell>
            <TableCell align="center">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow
              key={id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{id}</TableCell>
              <TableCell component="th" scope="row" align='center'>
                {fecha}
              </TableCell>
              <TableCell align="center">${total}</TableCell>
              <TableCell align="right">{cliente}</TableCell>
              <TableCell align="center">{estado}</TableCell>
              <TableCell align="center"> 
                <Link to={'./form/'+id}><Button><EditIcon sx={{color:'yellow'}}/></Button></Link>
                <Button onClick={handleDelete}><DeleteForeverOutlinedIcon sx={{color:'red'}}/></Button>
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}