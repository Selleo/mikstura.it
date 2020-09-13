import React from "react";

const Post = ({ children }) => {
  return (
    <>
      <div class='post-box'>
        <h2 class='post__title'>Tytuł wybranego artykułu</h2>
        <div class='post__date'>piątek, 17.09.2020</div>
        <div class='post-wrapper'>
          <div class='post__text'>

          </div>
          <div class='post__photo'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Pellentesque lobortis congue lobortis. Nam quis volutpat ante,
          vel eleifend orci. Cras viverra mi vel leo egestas, ac commodo nisi
          consectetur. Maecenas quis porta odio. Nunc mauris sem, maximus non
          elit id, vestibulum ultrices tellus. Vivamus at quam a orci porttitor
          faucibus in ut ex. <br></br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Pellentesque lobortis congue lobortis. Nam quis volutpat ante,
          vel eleifend orci. Cras viverra mi vel leo egestas, ac commodo
          nisi consectetur. Maecenas quis porta odio. Nunc mauris sem,
          maximus non elit id, vestibulum ultrices tellus. Vivamus at quam a
          orci porttitor faucibus in ut ex.
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
