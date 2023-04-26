import { useState } from "react";
import "./index.css";
import Header from "./components/header";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Home from "./components/home";
import "@fontsource/roboto/400.css";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#0f141f",
      },
    },
  });
  const lenguaje = localStorage.getItem("lenguaje");
  if (lenguaje == null) localStorage.setItem("lenguaje", "es");
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
