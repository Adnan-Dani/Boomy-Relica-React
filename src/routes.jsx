import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Pricing from "./Components/Pricing/Pricing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        name: "Dashboard",
      },
      {
        path: "pricing",
        element: <Pricing />,
        name: "Pricing",
      },
    ],
  },
]);

export default router;
