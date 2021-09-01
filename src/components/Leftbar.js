import React, { useState } from "react";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import {
  CssBaseline,
  Button,
  AppBar,
  Toolbar,
  ListItem,
  Drawer,
  IconButton,
  List,
  Divider,
  Box,
  Switch as Swit,
  FormControlLabel,
  FormGroup,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Route, Switch, withRouter } from "react-router-dom";
import Punto from "../views/Sales";
import Caja from "../views/Caja";
import Admin from "../views/Admin";
import Reports from "../views/Reports";
import Work from "../views/Workflow";
import Tickets from "../views/Tickets";
import logo from "../img/inovul-systems.png";
import useStyles from "./Styles";
import Corico from '../icons/corte.svg';
import Repico from '../icons/reportes.svg';
import Punico from '../icons/punto-venta.svg';
import Tickico from '../icons/ticket.svg';
import Cargtico from '../icons/carga-trabajo.svg';
import adminico from '../icons/administracion.svg';
import Controlcenter from "../modals/Controlcenter";


const LeftBar = (props) => {
  const { history } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [ctrlMod, setctrlMod] = useState(false);

  let sections = [
    {
      Title: "Punto de Venta",
      icon: <img src={Punico} alt="Icon Punto de venta" height="20"/>,
      onClick: () => history.push("/"),
    },
    {
      Title: "Corte de caja",
      icon:  <img src={Cargtico} alt="Icon Corte de caja" height="20"/>,
      onClick: () => history.push("/Caja"),
    },
    {
      Title: "Carga de Trabajo",
      icon:  <img src={Corico} alt="Icon Cargad de trabajo" height="20"/>,
      onClick: () => history.push("/CargaTrabajo"),
    },
    {
      Title: "Tickets",
      icon:  <img src={Tickico} alt="Icon Tickets" height="20"/>,
      onClick: () => history.push("/Tickets"),
    },
    {
      Title: "Reportes",
      icon:<img src={Repico} alt="Icon Reportes" height="20"/>,
      onClick: () => history.push("/Reports"),
    },
    {
      Title: "Admin",
      icon:<img src={adminico} alt="Icon Admin" height="20"/>,
      onClick: () => history.push("/Admin"),
    },
  ];

  const toggleChecked = () => {
    props.settoggleDark(!props.toggleDark);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  
  const ctrlOpen = () =>{
    setctrlMod(true)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="inherit"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Box display="flex" flexGrow={1}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <img src={logo} alt="Logo Inovuc" height="60"/>
          </Box>
          <FormGroup>
            
            <FormControlLabel
              control={
                <Swit
                  size="small"
                  checked={props.toggleDark}
                  onChange={toggleChecked}
                />
              }
              label="Dark"
            />
          </FormGroup>
          <Button variant="contained" color="primary" onClick={ctrlOpen}>
            Control de equipos
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>

        <List>
          {sections.map((item, key) => {
            const { Title, onClick,icon } = item;
            return (
              <>
                <ListItem button key={key} onClick={onClick}>
                  {icon}
                  {Title}
                </ListItem>
                <Divider />
              </>
            );
          })}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />

        <Switch>
          <Route exact from="/" render={(props) => <Punto {...props} />} />
          <Route exact path="/Caja" render={(props) => <Caja {...props} />} />
          <Route
            exact
            path="/CargaTrabajo"
            render={(props) => <Work {...props} />}
          />
          <Route
            exact
            path="/Tickets"
            render={(props) => <Tickets {...props} />}
          />
          <Route
            exact
            path="/Reports"
            render={(props) => <Reports {...props} />}
          />
          <Route
            exact
            path="/Admin"
            render={(props) => (
              <Admin
                toggleDark={props.toggleDark}
                settoggleDark={props.settoggleDark}
                {...props}
              />
            )}
          />
        </Switch>

        <Controlcenter sta={ctrlMod} handler={setctrlMod}/>
        

      </main>
    </div>
  );
};

export default withRouter(LeftBar);