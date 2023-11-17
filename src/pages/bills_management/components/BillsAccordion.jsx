import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'
import { TableBills } from './TableBills';

export const BillsAccordion = ({ id, fecha, total, cliente, estado }) => {
  const [deleted, setDeleted] = React.useState(false);

  function handleDelete(){
    setDeleted(true);
  }
  
  return (
    <>
    {deleted === false?(
    <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography>Factura {id}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <TableBills
        key={id}
        id={id}
        fecha={fecha}
        total={total}
        cliente={cliente}
        estado={estado}
        onDelete={handleDelete}/>
    </AccordionDetails>
  </Accordion>):(<></>)
  }
  </>
  )
}
