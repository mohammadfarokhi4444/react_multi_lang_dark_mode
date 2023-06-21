import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import Theme from "./assets/theme";
import Routers from "./routers";
import { useLayoutState } from "./context/LayoutContext";

const App = () => {
  const { darkMode } = useLayoutState();

  return (
    <ThemeProvider theme={darkMode ? Theme.dark : Theme.light}>
      <CssBaseline />
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </ThemeProvider>
  );
};
export default App;
