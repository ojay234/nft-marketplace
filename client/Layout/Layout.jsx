import { Footer, NavBar } from "@/components/componentsIndex";
import React from "react";

function Layout({ children }) {
  return (
    <div>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
