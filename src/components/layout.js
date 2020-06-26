import React from "react";
import Navigation from './navigation';
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <div className='container'>
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
