import {InputBase,Paper,IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from "@material-ui/styles";
import {useState} from "react";

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

 
const Barscode = ({prod,toBuy,setToBuy,total,setTotal}) => {
    const classes = useStyles();
    const [status,setStatus] = useState("");
    let sections = Object.keys(prod);
    let all = (value)=>{
        for (var i =0; i<=sections.length-1;i++){
            for (const item of Object.entries(prod[sections[i]]["Products"])) {
                   if (item[1].code==value){
                       setTotal(total+item[1].price)
                       setToBuy([...toBuy,item[1]]);
                       setStatus("");
                    }
              }
        }
    }

    
    const requestSearch = (searchValue) => {
        setStatus(searchValue);
        const ar=all(searchValue);
    };


    return(
        <Paper component="form" className={classes.root}>
          <SearchIcon fontSize="small"/>
            <InputBase classes={{ root: classes.root, focused: classes.focused,}} value={status} placeholder="Codigo de Barras" 
            onKeyPress={(event)=>{if(event.key==='Enter'){event.preventDefault(); requestSearch(event.target.value);}}}
            onChange={(event)=>requestSearch(event.target.value)}
               />
        </Paper>
    );
}

export default Barscode;