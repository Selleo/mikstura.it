import React from "react";
import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    <div className='about'>
      <div className='about-title'>
        <p>Fundacja Mikstura<span className='part-text__color'>IT</span><br />
          jest podmiotem działającym na rzecz rozwoju nauki,<br />
          innowacyjności oraz <span className='part-text__color'>nowych technologii.</span></p>
      </div>
      <div className='about-content'>
      Od 2013 roku prowadzimy nieodpłatną działalność statutową, <br />
      która koncentruje się na praktycznym szkoleniu dzieci, młodzieży oraz dorosłych.
      Na cotygodniowych spotkaniach 'coder dojo',
      oraz zimowych i letnich kursach kodowania, organizowanych przez Fundację,
      wszyscy chętni mogą bezpłatnie zgłębiać tajniki programowania oraz
      korzystać ze wsparcia mentorów w realizacji swoich projektów.
      </div>
      <div className='about-content'>
      Internet oraz nowe technologie stały się nieodłączną częścią świata,
      która wyraźnie oddziałuje na nasze otoczenie. <br />
      Na naszych spotkaniach omawiamy pojęcia potrzebne
      do odnalezienia się w cyfrowym świecie a także pokazujemy <br />
      jak używać technologii mądrze oraz kreatywnie.
      </div>
    </div>
  </Layout>
);

export default IndexPage;
