import React from "react";
import Layout from '../components/layout';
import aboutData from '../data/about.yml';

const IndexPage = () => (
  <Layout>
    <div className='about'>
      <div className='about-title'>
        { aboutData.title }
      </div>
      <div className='about-content'>
        { aboutData.descriptionPartOne }
      </div>
      <div className='about-content'>
        { aboutData.descriptionPartTwo }
      </div>
    </div>
  </Layout>
);

export default IndexPage;
