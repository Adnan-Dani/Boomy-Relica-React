import AppBar from "../Components/AppBar/AppBar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import background from "../assets/background.png";
import { Container } from "react-bootstrap";

const Layout = () => {
  return (
    <>
      <div
        // style={{
        //   background:
        //     window.location.pathname === "/pricing" ||
        //     window.location.pathname === "/song"
        //       ? `url(${background})`
        //       : "",
        //   backgroundRepeat: "no-repeat",
        //   backgroundSize: "cover",
        //   height:"100vh"
        // }}
      >
        <AppBar />
        <Outlet />
        {/* <Container className="my-5">
          <hr />
        </Container>
        <Footer /> */}
      </div>
    </>
  );
};

export default Layout;
