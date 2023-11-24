import AppBar from "../Components/AppBar/AppBar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Container from "react-bootstrap/Container";
import background from "../assets/background.png";

const Layout = () => {
  console.log(window.location.pathname);
  return (
    <>
      <div
        style={{
          background:
            window.location.pathname === "/pricing" ||
            window.location.pathname === "/song"
              ? `url(${background})`
              : "",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <AppBar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
