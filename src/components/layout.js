import React from "react";
import { Link } from 'gatsby';
import Navigation from './navigation';
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <div className='header'>
        <div className='header-logo'>
          <Link className='header-link' to={'/'}>mikstura<span className="header-link__it">.IT</span></Link>
        </div>
        <Navigation />
      </div>
      <div className='container'>
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
