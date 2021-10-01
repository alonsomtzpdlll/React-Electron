import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2)
    }
  }
}));

export default function Notify({sta,handl,msg,type}) {
  const classes = useStyles();
  
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    handl(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar open={sta} autoHideDuration={900} onClose={handleClose}>
        <Alert onClose={handleClose} severity={type}>
            {msg}
        </Alert>
      </Snackbar>
    </div>
  );
}