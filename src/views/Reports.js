import React from 'react';
import CardT from '../components/CardT';
import Titulos from '../components/Titulos';
import Repo from '../components/Repo';


const Reports = () =>{

   return(
        <div>
        <Titulos titulo="Reportes"/>
        <CardT t={
            <Repo/>
        }/>
        </div>
    );
}

export default Reports;