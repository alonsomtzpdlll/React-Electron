import CardT from "./CardT";
import { InputBase, Button } from "@material-ui/core";
import Tabletem from "./Tabletem";
import { makeStyles } from "@material-ui/styles";
import Prod from "./Prod";


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

const Product = ({ toBuy, setToBuy }) => {
 
  const classes = useStyles();

  return (
    <>
      <CardT
        t1={
          <InputBase
            classes={{ root: classes.root, focused: classes.focused }}
            placeholder="Buscar"
          />
        }

        t2={<Prod toBuy={toBuy} setToBuy={setToBuy} />}
       />
    </>
  );
};

export default Product;
