import "@/styles/globals.css";
import { Routes } from "@generouted/react-router";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { DependenciesProvider } from "./contexts/dependencies-context";

const rootElement = document.querySelector("#root") as Element;

ReactDOM.createRoot(rootElement!).render(
  <StrictMode>
    <DependenciesProvider>
      <Routes />
    </DependenciesProvider>
  </StrictMode>,
);
