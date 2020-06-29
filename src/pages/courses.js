import React from "react";
import Layout from '../components/layout';
import Tile from '../components/tile';

const IndexPage = () => (
  <Layout>
    <Tile>
      <iframe width="300" height="170" src="https://www.youtube.com/embed/aXhsO5K3W-I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </Tile>
    <Tile>
      <iframe width="300" height="170" src="https://www.youtube.com/embed/aXhsO5K3W-I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </Tile>
    <Tile>
      <iframe width="300" height="170" src="https://www.youtube.com/embed/aXhsO5K3W-I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </Tile>
  </Layout>
);

export default IndexPage;
