import { createBrowserRouter } from "react-router-dom";


import Dashboard from "../pages/Dashboard";
import Setting from "../pages/Setting";
import RootLayout from "../layout/RootLayout";

export const routes = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/setting",
        element: <Setting />,
      },
    ],
  },
]);