import AppBar from "../Components/AppBar/AppBar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Container from "react-bootstrap/Container";

const Layout = () => {
  return (
    <>
      <AppBar />
      <Outlet />
      <Container>
        <hr />
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
