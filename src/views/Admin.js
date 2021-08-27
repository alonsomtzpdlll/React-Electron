import Titulos from '../components/Titulos';
import CardT from '../components/CardT'; 
import { Button } from '@material-ui/core';


const Admin = () =>{
   
    return(
        <div>
        <Titulos titulo="Admin"/>
        <CardT t={<Button variant="contained" color="primary" >color</Button>} />
        </div>
    );
}

export default Admin;