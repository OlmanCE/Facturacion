// ProductoFormulario.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { getBillById, insertFactura, updateFactura } from '../../../dataService/DataStorage';

const FormBill = () => {
  const navigate = useNavigate();


  const { id } = useParams();
  const [isEdicion, setIsEdicion] = useState(false);
  const [factura, setFactura] = useState({fecha: ' ', total: '', cliente: '', estado: '' });

  useEffect(() => {
    if (id!=="-1") {
      // Simulación de carga de datos para editar un producto existente
        const facturaParaEditar = getBillById(parseInt( id, 10));
        setFactura(facturaParaEditar);
        setIsEdicion(true);
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFactura({ ...factura, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(factura.fecha !== '' && factura.total !== '' && factura.cliente !== '' && factura.estado !== ''){
        isEdicion? updateFactura(parseInt( id, 10), factura):insertFactura(factura)
        setFactura({ fecha: '', total: '', cliente: '', estado: '' });
        navigate(-1);
    }
    else
        alert('Debe completar todos los espacios del formulario')
        
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', margin: 'auto', marginTop: '150px' }}>
      <TextField
        label="Fecha"
        name="fecha"
        type='date'
        defaultValue={' '}
        value={factura.fecha}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
      />
      <TextField
        label="Total"
        name="total"
        type='number'
        value={factura.total}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
      />
      <TextField
        label="Cliente"
        name="cliente"
        value={factura.cliente}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
      />
      <TextField
        label="Estado"
        name="estado"
        value={factura.estado}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
      />
      <Button type="submit" variant="contained" color="primary" sx={{ marginTop: '20px' }}>
        {isEdicion ? 'Actualizar' : 'Guardar'}
      </Button>
    </Box>
  );
};

export default FormBill;
