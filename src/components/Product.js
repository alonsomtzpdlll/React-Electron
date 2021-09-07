import CardT from "./CardT";
import Prod from "./Prod";

const Product = ({ toBuy, setToBuy,setCopy,copy,setTotal,total }) => {  
  return (
    <>
      <CardT
        t2={<Prod toBuy={toBuy} setCopy={setCopy} copy={copy} setToBuy={setToBuy} setTotal={setTotal} total={total}/>}
       />
    </>
  );
};

export default Product;
