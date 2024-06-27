import React from "react";
import Navbar from "@/_components/Navbar";
import Footer from "@/_components/Footer";

const AppLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default AppLayout;
