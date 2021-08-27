import Titulos from '../components/Titulos';

const Admin = () =>{
   
    let sections=[
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
    return(
        <div>
        <Titulos titulo="Admin"/>
        {/*<CardT t={<Repo sect={sections}/>} />*/}
        </div>
    );
}

export default Admin;