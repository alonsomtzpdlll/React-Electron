import { useState } from "react";
import Repo from "./Repo";
import { Button, Grid, Paper, InputBase } from "@material-ui/core";
import Tabletem from "./Tabletem";
import Notify from "../modals/Notify";
import ModalAddProd from "../modals/ModalAddProd";
import { makeStyles } from "@material-ui/styles";
import SearchIcon from "@material-ui/icons/Search";

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

const Prod = ({inventary, toBuy, setToBuy, total,copy, setCopy ,setTotal }) => {
  const classes = useStyles();

  const [add, setadd] = useState(false);
  const columns = [
    { field: "id", headerName: "id", hide: true },
    { field: "name", headerName: "Nombre", width: 130 },
    { field: "price", headerName: "Precio", width: 115 },
    {
      field: "",
      headerName: "",
      width: 100,
      renderCell: (params) => {
        return (
            <Button
            variant="contained"
            size="small"
            color="primary"
            onClick={() => {
              setToBuy(toBuy=>[...toBuy,params.row]);
              setCopy(copy=true);
              setOpen(true);
              setTotal(total + parseFloat(params.row.price));
            }}
          >
            Agregar
          </Button>
         
        );
      },
    },
  ];

 
  let sections = Object.keys(inventary);
  var arrObj = [];

  //inventary[sections[0]].Products access to data from json

  sections.forEach((element, index) => {
    var obj = {};
    obj["seccion"] = element;
    var ob2 = (
      <Grid container spacing={1}>
        {" "}
        <Grid item xs={12}>
          {" "}
          <Paper component="form" className={classes.root}>
          <SearchIcon fontSize="small" />
            <InputBase
              classes={{ root: classes.root, focused: classes.focused }}
              placeholder="Buscar"
            />
          </Paper>{" "}
        </Grid>{" "}
        <Grid item xs={12}>
          {" "}
          <div style={{ height: 300, width: "100%" }}>
            {" "}
            <Tabletem
              data={inventary[sections[index]].Products}
              columns={columns}
            />{" "}
          </div>{" "}
        </Grid>{" "}
      </Grid>
    );
    obj["router"] = ob2;
    arrObj.push(obj);
  });
  const [open, setOpen] = useState(false);

  return (
    <>
      <Grid container direction="column" spacing={1}>
        <Grid item xs={12}>
          <Repo sect={arrObj} />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            size="small"
            onClick={() => setadd(true)}
            color="primary"
          >
            Agregar Producto
          </Button>
        </Grid>
      </Grid>

      <ModalAddProd sta={add} handler={setadd} />
      <Notify sta={open} handl={setOpen} msg={"Product added"} type={"success"} />
    </>
  );
};

export default Prod;
