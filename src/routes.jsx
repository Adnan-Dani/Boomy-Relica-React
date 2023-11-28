import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import Pricing from "./pages/Pricing/Pricing";
import Songs from "./Components/Song/Songs";
import Filter from "./Components/Song/filter/Filter";
import Release from "./Components/Release/Release";
import Edit from "./Components/Song/Edit/Edit";
import Lyrics from "./pages/Lyrics/Lyrics";
import VideoPage from "./pages/VideoPage/VideoPage";
import Login from "./pages/Login/Login";
import Comingsoon from "./pages/ComingSoon/comingsoon";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Comingsoon />,
    name: "Coming Soon",
  },
  {
    path: "/login",
    element: <Login />,
    name: "Login",
  },
  {
    path: "/dashboard",
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
      {
        path: "song",
        element: <Songs />,
        name: "Song",
      },
      {
        path: "filter",
        element: <Filter />,
        name: "Filter",
      },
      {
        path: "edit",
        element: <Edit />,
        name: "Edit",
      },

      {
        path: "release",
        element: <Release />,
        name: "Release",
      },
      {
        path: "lyrics",
        element: <Lyrics />,
        name: "Lyrics",
      },
      {
        path: "videopage",
        element: <VideoPage />,
        name: "videopage",
      },
    ],
  },
]);

export default router;
