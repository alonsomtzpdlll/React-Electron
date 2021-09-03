import Modalsty from "../components/Modalsty";
import {IconButton,AppBar,Toolbar,Card,Typography,CardContent}from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    appBar: {
      position: "relative",
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  }));

const ModalAddProd = ({sta, handler}) =>{
    const classes = useStyles();

    return(
        <Modalsty state={sta} Hand={handler} Modalcontent = {
            <>
            <AppBar className={classes.appBar}>
                <Toolbar>
                  <IconButton
                    edge="start"
                    onClick={() => handler(false)}
                    color="inherit"
                    aria-label="close"
                  >
                    <CloseIcon />
                  </IconButton>
                  <Typography variant="subtitle1" className={classes.title}>
                    Agregar Producto
                  </Typography>
                </Toolbar>
              </AppBar>
              <Card>
                <CardContent>
                  <Typography>Hola</Typography>
                </CardContent>
              </Card>
              </>
              }
              />
    )
}

export default ModalAddProd;