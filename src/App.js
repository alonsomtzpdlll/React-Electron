import "./App.css";
import { useState } from "react";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import LeftBar from "./components/Leftbar";

export default function App() {
  const [toggleDark, settoggleDark] = useState(false);

  const theme = createTheme({
    palette: {
      type: toggleDark ? "dark" : "light",
    },
    typography: {
      fontFamily: [
        "Nunito",
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
      ].join(","),
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <div className="App" maxWidth="sm">
        <LeftBar
          toggleDark={toggleDark}
          settoggleDark={settoggleDark}
        ></LeftBar>
      </div>
    </MuiThemeProvider>
  );
}
