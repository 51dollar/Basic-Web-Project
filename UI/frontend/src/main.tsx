import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {RouterProvider} from "react-router-dom";
import {router} from "./Routes/Routes.tsx";

const root = createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
