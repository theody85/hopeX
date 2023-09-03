import { Outlet } from "react-router-dom";
import { NavBar } from "../molecules";
import Footer from "../molecules/Footer";

const RootLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
