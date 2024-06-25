import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
