import { Theme, createTheme } from "@mui/material";

export const lightTheme: Theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#ffffff",
    },
    text: {
      primary: "#000000",
    },
  },
});

export const darkTheme: Theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000000",
    },
    text: {
      primary: "#ffffff",
    },
  },
});
