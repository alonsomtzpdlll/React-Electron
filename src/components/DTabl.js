import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {Button} from '@material-ui/core';
const columns = [
  { field: 'id', headerName: 'Ticket', width: 8 },
  {
    field: 'firstName',
    headerName: 'Entrega',
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
    renderCell: () => {
        return <Button variant="contained" color="primary">Pass</Button>;
    }
  
  },
];


const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon'},
  { id: 2, lastName: 'Lannister', firstName: 'Cersei'},
  { id: 3, lastName: 'Lannister', firstName: 'Jaime'},
  { id: 4, lastName: 'Stark', firstName: 'Arya'},
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys'},
  { id: 6, lastName: 'Melisandre', firstName: null},
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara'},
  { id: 8, lastName: 'Frances', firstName: 'Rossini'},
  { id: 9, lastName: 'Roxie', firstName: 'Harvey'},
];

const DTabl = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        
      />
    </div>
  );
}

export default DTabl;
