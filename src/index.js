import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import { App } from "./App";
import { theme } from "./theme";
import { StateProvider } from "./hooks/state";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <StateProvider>
          <App />
        </StateProvider>
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>
);
