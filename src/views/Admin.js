import Titulos from '../components/Titulos';
import { useState,useEffect } from 'react';
import Repo from '../components/Repo';
import CardT from '../components/CardT';
import axios from 'axios';

export default function Admin(){

  let ADMINsections=[
    {
        seccion:"Giros de Negocio"
      },
      {
        seccion:"Productos"
      },
      {
        seccion:"Servicios Extras"
      },
      {
        seccion:"Inventarios"
      },
      {
        seccion:"Personal"
      },
      {
        seccion:"Clientes"
      },{
        seccion:"Cuentas Corporativas"
      },
      {
        seccion:"Proveedores"
      },
      {
        seccion:"Documentos"
      },
      {
        seccion:"Motivos de cancelacion"
      }
]

let ConfigSections=[
  {
    seccion:"Datos del Negocio"
  },
  {
    seccion:"Negocio"
  },
  {
    seccion:"Punto de venta"
  },
  {
    seccion:"Carga de trabajo"
  },
  {
    seccion:"Descuentos y Promociones"
  },
  {
    seccion:"Notificaciones"
  },{
    seccion:"Facturacion"
  },
  {
    seccion:"Automatizacion"
  },
  {
    seccion:"Importar y Exportar"
  }
]

/*
const [personas,setPersons]=useState([]);
useEffect(()=>{
  axios.get(`https://pokeapi.co/api/v2/pokemon?offset=5&limit=5`)
  .then(res => {
    const persons = res.data.results;
    setPersons( persons );
  });  
},[]);
 <ul>
        { personas.map((item,key) => <li>{item.name}</li>)}
      </ul>}/>
*/

  return(
   <>
      <Titulos titulo="Admin"/>
      <CardT t1={
            <Repo sect={ADMINsections} />
        }/>
     </> 
    )
}
