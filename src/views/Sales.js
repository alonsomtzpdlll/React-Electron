import React, { useState } from "react";
import {
  Grid,
  InputBase,
  Box,
  Typography,
  Button,
  TextField,
} from "@material-ui/core";
import CardT from "../components/CardT";
import Titulos from "../components/Titulos";
import { useDemoData } from "@material-ui/x-grid-data-generator";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "1px",
    display: "flex",
    alignItems: "center",
    width: 400,
    borderColor: "5px Black",
  },
  focused: {
    backgroundColor: "grey",
    borderColor: "2px solid green",
    borderWidth: 10,
  },
}));

const Punto = () => {
  const [sub, setSub] = useState(0);

  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 10,
    maxColumns: 5,
  });

  const classes = useStyles();

  return (
    <>
      <Titulos titulo="Punto de Venta" />
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <CardT
            t={
              <InputBase
                classes={{ root: classes.root, focused: classes.focused }}
                placeholder="Buscar"
              />
            }
            t2={
              <div style={{ height: 458, width: "100%" }}>
                <DataGrid
                  {...data}
                  components={{ Toolbar: GridToolbar }}
                  filterModel={{
                    items: [
                      { columnField: "commodity", operatorValue: "contains" },
                    ],
                  }}
                />
              </div>
            }
          />
        </Grid>

        <Grid item xs={6}>
          <CardT
            t={
              <InputBase
                inputProps={{
                  "aria-label": "search google maps",
                }}
                style={{ flex: 1, borderBotom: "1px" }}
                placeholder="Codigo de Barras"
              />
            }
            t2={
              <div style={{ height: 300, width: "100%" }}>
                <DataGrid
                  {...data}
                  filterModel={{
                    items: [
                      { columnField: "commodity", operatorValue: "contains" },
                    ],
                  }}
                />
              </div>
            }
            t3={
              <>
                <Grid alignItems="flex-end" item xs={6}>
                  <Typography>Subtotal</Typography>
                  <TextField
                    disabled
                    size="small"
                    id="filled-disabled"
                    defaultValue={"$" + sub}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography>IVA 16% </Typography>
                  <TextField
                    disabled
                    size="small"
                    id="filled-disabled"
                    defaultValue={"$" + sub}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography>Total</Typography>
                  <TextField
                    disabled
                    size="small"
                    id="filled-disabled"
                    defaultValue="$0"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={6}>
                  <br></br>
                  <Button
                    size="small"
                    variant="contained"
                    style={{ backgroundColor: "#5cb85c" }}
                  >
                    Cobrar
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    style={{ backgroundColor: "#d9534f" }}
                  >
                    Cancelar
                  </Button>
                </Grid>
              </>
            }
          ></CardT>
        </Grid>
      </Grid>
    </>
  );
};

export default Punto;