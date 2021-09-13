import React from "react";
import Titulos from "../components/Titulos";
import CardT from "../components/CardT";
import { useDemoData } from "@material-ui/x-grid-data-generator";
import { Button } from "@material-ui/core";
import TabSear from '../components/TabSear';
import VisibilityIcon from '@material-ui/icons/Visibility';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const Tickets = () => {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 20,
    maxColumns: 9,
  });

  console.log(data);
  const columns = [
    { field: "id", headerName: "# de ticket", width:130 },
    { field: "traderName", headerName: "Fecha de recepcion", width: 130 },
    { field: "price", headerName: "Fecha Entrega", width: 130 },
    { field: "desk", headerName: "Cliente", width: 130 },
    { field: "filledQuantity", headerName: "Contacto", width: 130 },
    { field: "quantity", headerName: "Estado", width: 130 },
    { field: "status", headerName: "Detalles de pago", width: 130 },
    { field: "traderEmail", headerName: "Monto", width: 130 },
    {
      field: "",
      headerName: "",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Button
            variant="contained"
            size="small"
            color="secondary"
            onClick={()=>console.log(params.row)}>
           <DeleteIcon/>
          </Button>
          <IconButton aria-label="delete">
          <VisibilityIcon />
          </IconButton>
          </>
        );
      },
    },
  ];

  return (
    <>
      <Titulos titulo="Tickets" />
      <CardT
        t={
          <div style={{ height: 450, width: "100%" }}>
          <TabSear data={data} columns={columns}/>
          </div>
        }
      />
    </>
  );
};

export default Tickets;
