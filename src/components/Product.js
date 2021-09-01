import CardT from "./CardT";
import {InputBase} from '@material-ui/core';
import Tabletem from "./Tabletem";
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

const Product = () => {
    const classes = useStyles();

    return(
        <>
         <CardT
            t={
              <InputBase
                classes={{ root: classes.root, focused: classes.focused }}
                placeholder="Buscar"
              />
            }
            t2={
              <div style={{ height: 458, width: "100%" }}>
                <Tabletem/>
              </div>
            }
          />
        </>
    )
}

export default Product;