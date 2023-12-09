import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import Songs from "./Components/Song/Songs";
import Filter from "./Components/Song/filter/Filter";
import Release from "./Components/Release/Release";
import Edit from "./Components/Song/Edit/Edit";
import Lyrics from "./pages/Lyrics/Lyrics";
import VideoPage from "./pages/VideoPage/VideoPage";
import Login from "./pages/Login/Login";
import Comingsoon from "./pages/ComingSoon/comingsoon";
import PricingPage from "./pages/Pricing/Pricing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Comingsoon />,
    name: "Coming Soon",
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/dashboard",
        element: <Home />,
        name: "Dashboard",
      },
      {
        path: "/login",
        element: <Login />,
        name: "Login",
      },
      {
        path: "dashboard/plans",
        element: <PricingPage />,
        name: "Pricing",
      },
      {
        path: "dashboard/song",
        element: <Songs />,
        name: "Song",
      },
      {
        path: "dashboard/filter",
        element: <Filter />,
        name: "Filter",
      },
      {
        path: "dashboard/edit",
        element: <Edit />,
        name: "Edit",
      },

      {
        path: "dashboard/release",
        element: <Release />,
        name: "Release",
      },
      {
        path: "dashboard/lyrics",
        element: <Lyrics />,
        name: "Lyrics",
      },
      {
        path: "dashboard/videopage",
        element: <VideoPage />,
        name: "videopage",
      },
    ],
  },
]);

export default router;
