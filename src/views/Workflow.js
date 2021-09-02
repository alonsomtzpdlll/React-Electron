import React,{useState} from "react";
import Titulos from "../components/Titulos";
import CardT from "../components/CardT";
import { Grid,Button } from "@material-ui/core";
import DTabl from "../components/DTabl";

const Work = () => {
  const [ini,setini]=useState([''])
  const [med,setmed]=useState([''])
  const [final,setfinal]=useState([''])

  const rows = [
    { id: 1, Prod: '1kg Lav', Estado: 'ini'},
    { id: 2, Prod: '1kg Lav', Estado: 'med'},
    { id: 3, Prod: '1kg Lav', Estado: 'fin'},
    { id: 4, Prod: '1kg Lav', Estado: 'ini'},
  ];

  const columns = [
    { field: 'id', headerName: 'Ticket', width: 8 },
    {
      field: 'Prod',
      headerName: 'Producto',
      width: 119,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Descripcion',
      width:119,
      editable: true,
    },
    {
      field: '',
      headerName: 'Accion',
      width: 119,
      renderCell: (params) => {
          return <Button variant="contained" onClick={()=> console.log("Hey")} color="primary">Pass</Button>;}
    
    },
  ];

  const fillini = (rows) => {
    var inis=[] 
    rows.map((item)=>{

    if (item.Estado==='ini'){
      inis.push(item)
    }
  
  })
  return inis
}

const fillmed = (rows) => {
  var inis=[] 
  rows.map((item)=>{

  if (item.Estado==='med'){
    inis.push(item)
  }

})
return inis
}

const fillfinal = (rows) => {
  var inis=[] 
  rows.map((item)=>{

  if (item.Estado==='fin'){
    inis.push(item)
  }

})
return inis
}


  var inis=fillini(rows)
  var medi=fillmed(rows)
  var fin=fillfinal(rows)
  return (
    <div>
      <Titulos titulo="Carga de Trabajo" />
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <CardT product="Por procesar" t={<DTabl columns={columns} rows={inis} />} />
        </Grid>
        <Grid item xs={4}>
          <CardT product="Procesando" t={<DTabl columns={columns} rows={medi} />} />
        </Grid>
        <Grid item xs={4}>
          <CardT product="Por entregar" t={<DTabl columns={columns} rows={fin} />} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Work;
