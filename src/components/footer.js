import React from 'react';
import '../fontawesome/css/all.min.css';
import '../fontawesome/css/fontawesome.min.css';

const Footer = () => (
  <li className='footer-wrapper'>
    <div className='footer-logo'>
      <a href="http://mikstura.it" className='footer-link'>mikstura<span className="header-link__it">.IT</span></a>
    </div>
    <ol className='footer__icon'>
      <a href="https://www.meetup.com/Mikstura-IT/" className='footer-link'><i class="fab fa-meetup"></i></a>
    </ol>
    <ol className='footer__icon'>
      <a href="https://miksturait.slack.com/" className='footer-link'><i class="fab fa-slack"></i></a>
    </ol>
    <ol className='footer__icon'>
      <a href="https://www.youtube.com/user/MiksturaIT" className='footer-link'><i class="fab fa-youtube"></i></a>
    </ol>
    <ol className='footer__icon'>
      <a href="https://github.com/miksturait" className='footer-link'><i class="fab fa-github"></i></a>
    </ol>
    <ol className='footer__icon'>
      <a href="https://facebook.com/MiksturaIT" className='footer-link'><i class="fab fa-facebook"></i></a>
    </ol>
    <ol className='footer__icon'>
      <a href="https://twitter.com/miksturait" className='footer-link'><i class="fab fa-twitter"></i></a>
    </ol>
    <ol className='footer__icon'>
      <a href="https://linkedin.com/company/mikstura-it-foundation" className='footer-link'><i class="fab fa-linkedin"></i></a>
    </ol>
    <ol className='footer__icon'>
      <a href="mailto:fundacja@mikstura.it" className='footer-link' ><i class="far fa-envelope"></i></a>
    </ol>
  </li>
);

export default Footer;