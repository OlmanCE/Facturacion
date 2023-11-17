import { Box, Button, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import React from 'react'
import { filterProducts, getDescripcions, getNombres, getProducts } from '../../dataService/DataStorage'
import { ProductAccordion } from './components/ProductAccordion'
import { Link } from 'react-router-dom';

export default function ProductsManagement() {
  const [products, setProducts] = React.useState(getProducts());
  const [nombres, ] = React.useState(getNombres());
  const [descripciones, ] = React.useState(getDescripcions());

  const [name, setName] = React.useState('');
  const [category, setCategory] = React.useState('');

  const handleChangeName = (event) => {
    setName(event.target.value);
    setProducts(filterProducts(event.target.value, category))
  };

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
    setProducts(filterProducts(name, event.target.value))
  };

  return (
    <>
    <Box sx={{width:{xs:"100%", md:"60%"}, alignContent:"center", margin:"100px auto"}}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="10vh" // Ajusta la altura según tus necesidades
        bgcolor={'darkgreen'}
        width={'400px'}
        mx={'auto'}
        my={'40px'}
        borderRadius={'15px'}
      >
        <Typography variant="h4" align="center" color={'white'}>
          Gestión de productos
        </Typography>
      </Box>
      <Box bgcolor={'lightgray'} padding={'20px'} borderRadius={'15px'}>
        <Box display='flex' height='8vh' alignContent='center' justifyContent='center' mx={'auto'}  mb={'20px'}> 
        <Box bgcolor={'gray'} width={'600px'} borderRadius={'20px'} display={'flex'} alignContent={'center'} justifyContent={'center'}>
          <Typography my={'auto'} mr={'20px'} sx={{color:'white'}}>Filtrar por </Typography>
          <Box sx={{ minWidth: 120, mr:'20px', my:'auto'}}>
            <FormControl fullWidth>
              <InputLabel id="select-name-label" sx={{color:'white'}}>Nombre</InputLabel>
              <Select
                labelId="select-name-label"
                id="demo-simple-select-category"
                value={name}
                label="Nombre"
                onChange={handleChangeName}
                sx={{color:'white'}}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {nombres.map(nombre => (
                  <MenuItem value={nombre}>{nombre}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 140, my:'auto'}}>
            <FormControl fullWidth>
              <InputLabel id="select-category-label" sx={{color:'white'}}>Descripción</InputLabel>
              <Select
                labelId="select-category-label"
                id="demo-simple-select-category"
                value={category}
                label="Descripcion"
                onChange={handleChangeCategory}
                sx={{color:'white'}}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {descripciones.map(descripcion => (
                  <MenuItem value={descripcion}>{descripcion}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box display={'flex'} my={'auto'} ml={'50px'}> 
          <Link to={'./form/-1'}><Button variant='contained' sx={{bgcolor:'gray'}} >Agregar Producto</Button></Link>
        </Box>      
        </Box>


        {products.map((producto) => (
        <ProductAccordion
          key={producto.id}
          id={producto.id}
          nombre={producto.nombre}
          descripcion={producto.descripcion}
          precio={producto.precio}
          stock={producto.stock}
        />
      ))}
      </Box>
      
    </Box>
    </>
  )
}
