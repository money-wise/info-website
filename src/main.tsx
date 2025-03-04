import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider>
      {/* <BrowserRouter> */}
      <HashRouter>
        <App />
      </HashRouter>
      {/* </BrowserRouter> */}
    </MantineProvider>
  </React.StrictMode>
);
