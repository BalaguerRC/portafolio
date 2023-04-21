import { useState } from "react";
import "./index.css";
import Header from "./components/header";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Home from "./components/home";
import "@fontsource/roboto/300.css";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#0f141f",
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
