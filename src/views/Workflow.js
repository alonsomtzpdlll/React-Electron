import React, { useState,useEffect } from "react";
import Titulos from "../components/Titulos";
import CardT from "../components/CardT";
import { Grid,Button } from "@material-ui/core";
import DTabl from "../components/DTabl";
import Notify from '../modals/Notify';

const Work = () => {
  const [open,setOpen]=useState(false);
  const [ini,setini]=useState([]);
  const [med,setmed]=useState([]);
  const [fin,setfin]=useState([]);

  const rows = [
    { id: 1, Prod: '1kg Lav', Estado: 'ini'},
    { id: 2, Prod: '1kg Lav', Estado: 'med'},
    { id: 3, Prod: '1kg Lav', Estado: 'fin'},
    { id: 4, Prod: '1kg Lav', Estado: 'ini'},
    { id: 5, Prod: '2kg Lav', Estado: 'fin'},
    { id: 6, Prod: '2kg Lav', Estado: 'med'},    
  ];


  const Updater=()=>{
    useEffect(()=>{
      rows.filter(item=>item.Estado==="ini").map(item=>setini(ini=>[...ini,item]))
      rows.filter(item=>item.Estado==="med").map(item=>setmed(med=>[...med,item]))
      rows.filter(item=>item.Estado==="fin").map(item=>setfin(fin=>[...fin,item]))
    },[])
  }

  Updater();

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
          return <Button variant="contained" onClick={()=>{
            if(params.row.Estado==="ini"){
              rows[params.row.id-1]["Estado"]="med";
              setmed(med=>[...med,rows[params.row.id-1]]);
              let init = ini.filter((value) => value.id !== params.row.id );
              setini(init);
            }
            else if(params.row.Estado==="med"){
              rows[params.row.id-1]["Estado"]="fin";
              setfin(fin=>[...fin,rows[params.row.id-1]]);
              let medt = med.filter((value) => value.id !== params.row.id );
              setmed(medt);
            }
            else if(params.row.Estado==="fin"){
              let fint = fin.filter((value) => value.id !== params.row.id );
              setfin(fint);
              setOpen(true);
            }
          }} color="primary">Pass</Button>;}
    
    },
  ];

  return (
    <div>
      <Titulos titulo="Carga de Trabajo" />
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <CardT product="Por procesar" t={<DTabl columns={columns} rows={ini} />} />
        </Grid>
        <Grid item xs={4}>
          <CardT product="Procesando" t={<DTabl columns={columns} rows={med} />} />
        </Grid>
        <Grid item xs={4}>
          <CardT product="Por entregar" t={<DTabl columns={columns} rows={fin} />} />
        </Grid>
      </Grid>
      <Notify sta={open} handl={setOpen} msg={"Finalizo producto!"} type={"success"} />
    </div>
  );
};

export default Work;
