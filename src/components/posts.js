import React from "react";
import { StaticQuery, graphql } from "gatsby";

const Posts = () => (
  <StaticQuery
    query={graphql`
      query {
        allPostsYaml {
          edges {
            node {
              content {
                title
                date
                text
                photo
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        {
          data.allPostsYaml.edges.map(({ node: { content: { title, date, text, photo } } }) => {
            return (
              <div class='post-box'>
                <h2 class='post__title'>{title}</h2>
                <div class='post__date'>{date}</div>
                <div class='post-wrapper'>
                  <div class='post__text'>
                    {text}
                  </div>
                  <div class='post__photo'>
                    {photo}
                  </div>
                </div>
              </div>
            );
          })
        }
      </>
    )}
  ></StaticQuery>
);

export default Posts;
