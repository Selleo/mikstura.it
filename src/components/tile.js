import React from "react";
import { StaticQuery, graphql } from "gatsby";

const Tiles = () => (
  <StaticQuery
    query={graphql`
      query {
        allCoursesYaml {
          edges {
            node {
              course {
                description
                url
                iframeTitle
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <div className='tiles-header'>Nasze kursy od zera do <span className='part-text__color'>JS developera</span></div>
        <div className='tiles'>
          {
            data.allCoursesYaml.edges.map(({ node: { course: { description, url, iframeTitle } } }, index) => {
              return (
                <div className='tiles-item' key={index}>
                  <iframe title={iframeTitle} width="300" height="170" src={url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  <p className='tile-name'>{description}</p>
                </div>
              );
            })
          }
        </div>
      </>
    )}
  ></StaticQuery>
);

export default Tiles;
