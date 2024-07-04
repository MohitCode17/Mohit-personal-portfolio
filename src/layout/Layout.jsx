import Footer from "@/components/sub-components/Footer";
import Header from "@/components/sub-components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90">
        <div className="bg-[#f5e2fb] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#d090e3d3]"></div>

        <div className="bg-[#d7f1fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#84daf7c4]"></div>
      </div>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
