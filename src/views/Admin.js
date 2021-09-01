import Titulos from '../components/Titulos';
import Button from "@material-ui/core/Button";
import { useState,Component } from 'react';
import NotifySuc from '../modals/NotifySuc';
import CardT from '../components/CardT';
import axios from 'axios';

class Infos extends Component{
    
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://pokeapi.co/api/v2/pokemon?offset=5&limit=5`)
      .then(res => {
        const persons = res.data.results;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map((persons) => <li>{persons.name}</li>)}
      </ul>
    )
  }
}

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

  const [open, setOpen] = useState(false);
  return(
   <>
      <Titulos titulo="Admin"/>
      <CardT t2={<Button  variant="contained" color="primary" onClick={()=>setOpen(true)}>Notify</Button>} t3={<Infos/>}/>
      <NotifySuc sta={open} handl={setOpen} ConfigSections={ConfigSections} ADMINsections={ADMINsections} msg={"info"}/>
      {/*<CardT t={<Repo sect={sections}/>} />*/}
     </> 
    )
}
