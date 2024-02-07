import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";
const RootLayout = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
