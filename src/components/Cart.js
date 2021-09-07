import { useState } from "react";
import CardT from "./CardT";
import { InputBase, Grid, Typography, Button, Paper } from "@material-ui/core";
import NotifyErr from "../modals/NotifyErr";
import Tabletem from "./Tabletem";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 18px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  focused: {
    borderColor: "2px solid green",
    borderWidth: 8,
  },
}));

const Cart = ({ toBuy, setToBuy,total,setTotal }) => {
  const classes = useStyles();
  const [cant,setCant]=useState(0);
  const [open, setOpen] = useState(false);

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
              console.log(toBuy)
            }}
          >
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
                    <Paper component="form" className={classes.root}>
                      <InputBase classes={{ root: classes.root, focused: classes.focused,}} placeholder="Codigo de Barras"/>
                    </Paper>
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
                    onClick={() => {
                      setToBuy([]);
                      setOpen(true);
                      setTotal(0);
                      localStorage.clear();
                    }}
                  >
                    Cancelar
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <NotifyErr sta={open} handl={setOpen} msg={"Carrito limpio"} />
    </>
  );
};

export default Cart;
