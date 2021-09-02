import { useState} from "react";
import CardT from "./CardT";
import {
  InputBase,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import NotifyErr from '../modals/NotifyErr';
import Tabletem from "./Tabletem";

const Cart = ({ toBuy, setToBuy }) => {
  const [open, setOpen] = useState(false);
  const [total, setTotal] = useState(0);
  const columns = [
    { field: "name", headerName: "Nombre", width: 300 },
    { field: "price", headerName: "Precio", width: 150 },
    { field: '', headerName: '',width: 119,
      renderCell: (params) => {
          return <Button variant="contained" size="small" color="primary" onClick={()=> {
            toBuy=toBuy.filter(value => value.id !== params.row.id);
            setToBuy(toBuy);
          } } >Quitar</Button>;
      }
    }
  ];


  return (
    <>
      <Grid container direction="column" spacing={2}>
        <Grid item xs={12}>
          <InputBase
            inputProps={{
              "aria-label": "search google maps",
            }}
            style={{ flex: 1 }}
            placeholder="Codigo de Barras"
          />
        </Grid>

        <Grid item xs={12}>
          <CardT
            t2={
              <div style={{ height: 300, width: "100%" }}>
                <Tabletem data={toBuy} columns={columns} />
              </div>
            }
          />
        </Grid>

        <Grid item xs={12}>
          <Grid container direction="row" spacing={2}>
            <Grid item xs={6}>
              <Typography>Subtotal</Typography>
              <div>{total === 0 ? "$0." : (`$`, total)}</div>
            </Grid>

            <Grid item xs={6}>
              <Typography>IVA 16% </Typography>
              <div>{total === 0 ? "$0." : (`$`, total)}</div>
            </Grid>

            <Grid item xs={6}>
              <Typography>Total</Typography>
              <div>{total === 0 ? "$0." : (`$`, total)}</div>
            </Grid>

            <Grid item xs={6}>
              <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
                spacing={1}
              >
                <Grid item xs={6}>
                  <Button
                    size="small"
                    variant="contained"
                    style={{ backgroundColor: "#5cb85c" }}
                    onClick={() => setToBuy([])}
                  >
                    Cobrar
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    size="small"
                    variant="contained"
                    style={{ backgroundColor: "#d9534f" }}
                    onClick={() => {setToBuy([]);setOpen(true);}}>
                    Cancelar
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <NotifyErr sta={open} handl={setOpen} msg={"Carrito limpio"}/>
    </>
  );
};

export default Cart;
