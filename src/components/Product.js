import CardT from "./CardT";
import { InputBase, Button,Paper } from "@material-ui/core";
import Tabletem from "./Tabletem";
import { makeStyles } from "@material-ui/styles";
import Prod from "./Prod";


const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 18px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  focused: {
    borderColor: "2px solid green",
    borderWidth: 10,
  },
}));

const Product = ({ toBuy, setToBuy,setTotal,total }) => {
 
  const classes = useStyles();

  return (
    <>
      <CardT
        t2={<Prod toBuy={toBuy} setToBuy={setToBuy} setTotal={setTotal} total={total}/>}
       />
    </>
  );
};

export default Product;
