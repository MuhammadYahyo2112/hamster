import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AirDrop from "./pages/AirDrop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/Main",
        element: <Main />
      },
      {
        path: "/Frends",
        element: <Frends />

      },
       {
        path: "/Earn",
        element: <Earn/>
      },
       {
        path: "/AirDrop",
        element: <AirDrop/>
      },

    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
