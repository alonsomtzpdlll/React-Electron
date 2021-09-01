import  React,{useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';

export default function Tabletem({data,columns,flag}) {
  
  return (
    <div style={{ height:'100%', width: '100%' }}>
      <DataGrid
        density="compact"
        pagination
        columns={columns}
        disableSelectionOnClick
        rowsPerPageOptions={[10]}
        rows={data}
        />
    </div>
  );
}