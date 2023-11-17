import { Box, Button, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import React from 'react'
import { filterBills, getBills, getEstados, getFechas} from '../../dataService/DataStorage'
import { BillsAccordion } from './components/BillsAccordion';
import { Link } from 'react-router-dom';

export default function BillsManagement() {
  const [bills, setBills] = React.useState(getBills());
  const [fechas, ] = React.useState(getFechas());
  const [estados, ] = React.useState(getEstados());

  const [date, setDate] = React.useState('');
  const [state, setState] = React.useState('');

  const handleChangeDate = (event) => {
    setDate(event.target.value);
    setBills(filterBills(event.target.value, state))
  };

  const handleChangeState = (event) => {
    setState(event.target.value);
    setBills(filterBills(date, event.target.value))
  };



  return (
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
          Gestión de facturas
        </Typography>
      </Box>
      <Box bgcolor={'lightgray'} padding={'20px'} borderRadius={'15px'}>
        <Box display='flex' height='8vh' alignContent='center' justifyContent='center' mx={'auto'}  mb={'20px'}> 
        <Box bgcolor={'gray'} width={'600px'} borderRadius={'20px'} display={'flex'} alignContent={'center'} justifyContent={'center'}>
          <Typography my={'auto'} mr={'20px'} sx={{color:'white'}}>Filtrar por </Typography>
          <Box sx={{ minWidth: 120, mr:'20px', my:'auto'}}>
            <FormControl fullWidth>
              <InputLabel id="select-date-label" sx={{color:'white'}}>Fecha</InputLabel>
              <Select
                labelId="select-date-label"
                id="demo-simple-select-date"
                value={date}
                label="Fecha"
                onChange={handleChangeDate}
                sx={{color:'white'}}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {fechas.map(fecha => (
                  <MenuItem value={fecha}>{fecha}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 120, my:'auto'}}>
            <FormControl fullWidth>
              <InputLabel id="select-state-label" sx={{color:'white'}}>Estado</InputLabel>
              <Select
                labelId="select-state-label"
                id="demo-simple-select-state"
                value={state}
                label="Estado"
                onChange={handleChangeState}
                sx={{color:'white'}}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {estados.map(estado => (
                  <MenuItem value={estado}>{estado}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box display={'flex'} my={'auto'} ml={'50px'}> 
          <Link to={'./form/-1'}><Button variant='contained' sx={{bgcolor:'gray'}} >Agregar Factura</Button></Link>
        </Box>      
        </Box>


        {bills.map((factura) => (
        <BillsAccordion
          key={factura.id}
          id={factura.id}
          fecha={factura.fecha}
          total={factura.total}
          cliente={factura.cliente}
          estado={factura.estado}
        />
      ))}
      </Box>
      
    </Box>
  )
}
