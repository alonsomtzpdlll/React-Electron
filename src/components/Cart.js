import CardT from './CardT';
import {InputBase,Grid,TextField,Typography,Button} from '@material-ui/core';
import Tabletem from './Tabletem';

const Cart = ({sub,setSub}) =>{
    return(
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
                <Tabletem/>
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
                    onClick={()=>setSub(sub+1)}
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
    )
}

export default Cart;