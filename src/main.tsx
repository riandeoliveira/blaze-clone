import "@/styles/globals.css";
import { Routes } from "@generouted/react-router";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

const rootElement = document.querySelector("#root") as Element;

ReactDOM.createRoot(rootElement!).render(
  <StrictMode>
    <Routes />
  </StrictMode>,
);
