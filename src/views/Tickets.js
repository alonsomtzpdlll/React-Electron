import React from "react";
import Titulos from "../components/Titulos";
import CardT from "../components/CardT";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";
import { useDemoData } from "@material-ui/x-grid-data-generator";

const Tickets = () => {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 100,
    maxColumns: 6,
  });
  return (
    <>
      <Titulos titulo="Tickets" />
      <CardT
        t={
          <div style={{ height: 450, width: "100%" }}>
            <DataGrid
              {...data}
              components={{
                Toolbar: GridToolbar,
              }}
              filterModel={{
                items: [
                  {
                    columnField: "commodity",
                    operatorValue: "contains",
                    value: "rice",
                  },
                ],
              }}
            />
          </div>
        }
      />
    </>
  );
};

export default Tickets;
