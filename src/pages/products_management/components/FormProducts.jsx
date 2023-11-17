// ProductoFormulario.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { getProductById, insertProducto, updateProducto } from '../../../dataService/DataStorage';

const FormProducts = () => {
  const navigate = useNavigate();


  const { id } = useParams();
  const [isEdicion, setIsEdicion] = useState(false);
  const [producto, setProducto] = useState({nombre: '', descripcion: '', precio: '', stock: '' });

  useEffect(() => {
    if (id!=="-1") {
      // Simulación de carga de datos para editar un producto existente
        const productoParaEditar = getProductById(parseInt( id, 10));
        setProducto(productoParaEditar);
        setIsEdicion(true);
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(producto.nombre !== '' && producto.descripcion !== '' && producto.precio !== '' && producto.stock !== ''){
        isEdicion? updateProducto(parseInt( id, 10), producto):insertProducto(producto)
        setProducto({ nombre: '', descripcion: '', precio: '', stock: '' });
        navigate(-1);
    }
    else
        alert('Debe completar todos los espacios del formulario')
        
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', margin: 'auto', marginTop: '150px' }}>
      <TextField
        label="Nombre"
        name="nombre"
        value={producto.nombre}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
      />
      <TextField
        label="Descripción"
        name="descripcion"
        value={producto.descripcion}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
      />
      <TextField
        label="Precio"
        name="precio"
        type="number"
        value={producto.precio}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
      />
      <TextField
        label="Stock"
        name="stock"
        type="number"
        value={producto.stock}
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

export default FormProducts;
