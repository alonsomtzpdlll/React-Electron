import React from 'react';
import CardT from '../components/CardT';
import Titulos from '../components/Titulos';
import Repo from '../components/Repo';


const Reports = () =>{
    let sections = [
        {
          seccion:"General"
        },
        {
          seccion:"Tickets"
        },
        {
          seccion:"Movimientos"
        },
        {
          seccion:"Inventarios"
        },
        {
          seccion:"Clientes"
        },
        {
          seccion:"Frecuencia y Afluencia"
        }
    ]

   return(
        <div>
        <Titulos titulo="Reportes"/>
        <CardT t={
            <Repo sect={sections}/>
        }/>
        </div>
    );
}

export default Reports;