import React from "react";

const Tiles = ({ children }) => (
  <>
    <div className='tiles-header'>Nasze kursy od zera do <span className='part-text__color'>JS developera</span></div>
    <div className='tiles'>
      <div className='tiles-item'>
        <iframe title='part1' width="300" height="170" src="https://www.youtube.com/embed/aXhsO5K3W-I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p className='tile-name'>Część I</p>
      </div>
      <div className='tiles-item'>
        <iframe title='part2' width="300" height="170" src="https://www.youtube.com/embed/EtMHg5o8_1k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p className='tile-name'>Część II</p>
      </div>
      <div className='tiles-item'>
        <iframe title='part3' width="300" height="170" src="https://www.youtube.com/embed/RLBoUKhW12I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p className='tile-name'>Część III</p>
      </div>
      <div className='tiles-item'>
        <iframe title='part4' width="300" height="170" src="https://www.youtube.com/embed/blku9Ad-7Q0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p className='tile-name'>Część IV</p>
      </div>
      <div className='tiles-item'>
        <iframe title='part5' width="300" height="170" src="https://www.youtube.com/embed/OVNZXZPvVFw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p className='tile-name'>Część V</p>
      </div>
      <div className='tiles-item'>
        <iframe title='part6' width="300" height="170" src="https://www.youtube.com/embed/OWZcaNnum-o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p className='tile-name'>Część VI</p>
      </div>
    </div>
  </>
);

export default Tiles;
