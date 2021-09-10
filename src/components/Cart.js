import { useState } from "react";
import CardT from "./CardT";
import { Grid, Typography, Button } from "@material-ui/core";
import Notify from "../modals/Notify";
import Tabletem from "./Tabletem";
import Barscode from "./Barscode";
import CancelIcon from '@material-ui/icons/Cancel';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const Cart = ({ prod,toBuy, setToBuy,total,setTotal }) => {
  const [cant,setCant]=useState(0);
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  const [symbolsArr] = useState(["e", "E", "+", "-", "."]);
  const columns = [
    { field: "name", headerName: "Nombre", width: 130 },
    { field: "price", headerName: "Precio", width: 115 },
    {
      field: "",
      headerName: "",
      width: 195,
      renderCell: (params) => {
        return (
          <Grid container spacing={1}>
          <Grid item>
          <Button
            variant="contained"
            size="small"  
            color="primary"
            onClick={() => {
              toBuy = toBuy.filter((value) => value.id !== params.row.id);
              setToBuy(toBuy);
              setTotal(total-params.row.price)
              setOpen1(true);
            }}>
            Quitar
          </Button>
          </Grid>
            <Grid item>
            <input
              placeholder="1"
              type="number"
              onKeyDown={(e) =>
                symbolsArr.includes(e.key) && e.preventDefault()
              }
              min="1"
              max="100"
              onChange={(e)=>{setCant(parseFloat(e.target.value)+cant);console.log(cant)}}
            />
            </Grid>
          </Grid>
        );
      },
    },
  ];

  return (
    <>
      <Grid container direction="column" spacing={2}>
        <Grid item xs={12}>
          <CardT
            t3={
              <>
                <Grid container spacing={1}>
                <Grid item xs={2}>
                  <Typography variant="h6">Ticket</Typography>
                  </Grid>
                  <Grid item xs={10}>
                    <Barscode  toBuy={toBuy} total={total} setTotal={setTotal} setToBuy={setToBuy} prod={prod}/>
                  </Grid>
                  <Grid item xs={12}>
                    <div style={{ height: 300, width: "100%" }}>
                      <Tabletem data={toBuy} columns={columns} />
                    </div>
                  </Grid>
                </Grid>
              </>
            }
          />
        </Grid>

        <Grid item xs={12}>
          <Grid container direction="row" spacing={2}>
            <Grid item xs={6}>
              {}
              <Typography>Subtotal</Typography>
              <div>{total === 0 ? "$0." : (`$`+total)}</div>
            </Grid>

            <Grid item xs={6}>
              <Typography>IVA 16% </Typography>
              <div>{total === 0 ? "$0." : (`$`+total)}</div>
            </Grid>

            <Grid item xs={6}>
              <Typography>Total</Typography>
              <div>{total === 0 ? "$0." : (`$`+total)}</div>
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
                    style={{ backgroundColor: "#5cb85c",color: "white", }}
                    onClick={() => setToBuy([])}>
                      <AttachMoneyIcon fontSize="small"/>
                    Cobrar
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    size="small"
                    variant="contained"
                    style={{ backgroundColor: "#d9534f",color: "white", }}
                    onClick={() => {
                      setToBuy([]);
                      setOpen(true);
                      setTotal(0);
                      localStorage.clear();
                    }}
                  >
                    <CancelIcon fontSize="small"/>
                    Cancelar
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Notify sta={open} handl={setOpen} msg={"Carrito limpio"} type={"error"} />
      <Notify sta={open1} handl={setOpen1} msg={"Producto elimando"} type={"error"} />
    </>
  );
};

export default Cart;
