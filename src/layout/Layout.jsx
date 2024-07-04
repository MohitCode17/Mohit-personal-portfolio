import Footer from "@/components/sub-components/Footer";
import Header from "@/components/sub-components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
