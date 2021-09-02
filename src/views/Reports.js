import React from 'react';
import CardT from '../components/CardT';
import Titulos from '../components/Titulos';
import Repo from '../components/Repo';
import Rgen from '../modals/Rgen';
import Rtick from '../modals/Rtick';
import Rmov from '../modals/Rmov';
import Rinv from '../modals/Rinv';
import Rclien from '../modals/RClien';
import Rfrc from '../modals/Rfrc';


const Reports = () =>{

    let sections = [
      {
        seccion:"General",
        router:<Rgen/>
      },
      {
        seccion:"Tickets",
        router:<Rtick/>
      },
      {
        seccion:"Movimientos",
        router:<Rmov/>
      },
      {
        seccion:"Inventarios",
        router:<Rinv/>
      },
      {
        seccion:"Clientes",
        router:<Rclien/>
      },
      {
        seccion:"Frecuencia y Afluencia",
        router:<Rfrc/>
      }
      
    ]
    console.log(sections)

   return(
        <div>
        <Titulos titulo="Reportes"/>
        <CardT t={
            <Repo sect={sections} />
        }/>
        </div>
    );
}

export default Reports;