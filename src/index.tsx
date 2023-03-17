import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./app.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
