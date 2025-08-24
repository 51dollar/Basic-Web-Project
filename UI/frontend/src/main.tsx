import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { searchCompanies } from "./api.tsx";

const root = createRoot(
  document.getElementById('root') as HTMLElement
);

console.log(searchCompanies("tsla"));

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
