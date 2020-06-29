import React from "react";

const Tile = ({ children }) => (

  <span className='tiles'>
    <span className='tiles-item'>
      { children }
    </span>
  </span>

);

export default Tile;
