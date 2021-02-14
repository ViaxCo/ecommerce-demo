import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
// Remove blue outline from buttons and links
import "focus-visible/dist/focus-visible";
// Lazy load images
import "lazysizes";
// import a plugin
import "lazysizes/plugins/parent-fit/ls.parent-fit";

ReactDOM.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>,
  document.getElementById("root")
);
