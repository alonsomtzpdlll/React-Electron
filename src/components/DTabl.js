import React,{useState} from 'react';
import { DataGrid } from '@material-ui/data-grid';

const DTabl = ({columns,rows}) => {
  
  return (
    <div style={{ height: 480, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        disableSelectionOnClick 
      />
    </div>
  );
}

export default DTabl;
