/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from 'gatsby';
import Navigation from './navigation';
import "../styles/layout.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1920,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <div className='content'>
          <h1 className='header'>
            <div className='logo'>
              <Link className='styledLink' to={/./}>mikstura<font color="orange">.IT</font></Link>
            </div>
            <Navigation />
          </h1>
          <div className='shortInfo'>
          </div>
        </div>
        <main>{children}</main>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
