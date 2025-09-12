import { Outlet } from "react-router-dom";
import { Header } from "./Ui/Header";
import { Footer } from "./Ui/Footer";

export const Applayout = () => {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-160px)] text-white bg-black"> 
        <Outlet />{/* here the all pages will render */}
      </main>
      <Footer />
    </>
  );
};
