import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'
import { TableProduct } from './TableProduct';

export const ProductAccordion = ({ id, nombre, descripcion, precio, stock }) => {
const [deleted, setDeleted] = React.useState(false);

  function handleDelete(){
    setDeleted(true);
  }

  return (
    <>
    {deleted===false?(
    <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography>Producto {id}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <TableProduct
        key={id}
        id={id}
        nombre={nombre}
        descripcion={descripcion}
        precio={precio}
        stock={stock}
        onDelete={handleDelete}/>
    </AccordionDetails>
  </Accordion>) :(<></>)
  }
  </>
  )
}
