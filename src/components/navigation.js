import React from 'react';
import {Link} from 'gatsby';
import '../styles/stylesheet.css';

const Navigation = () => (
  <li className='navigation'>
    <ol className='navigation_item'>
      <Link className='header-link' to={'/news/'} activeClassName='active'>Aktualności</Link>
    </ol>
    <ol className='navigation_item'>
      <Link className='header-link' to={'/about/'} activeClassName='active'>O nas</Link>
    </ol>
    <ol className='navigation_item'>
      <Link className='header-link' to={'/courses/'} activeClassName='active'>Kursy</Link>
    </ol>
    <ol className='navigation_item'>
      <Link className='header-link' to={'/galery/'} activeClassName='active'>Galeria</Link>
    </ol>
    <ol className='navigation_item'>
      <div className='navigation_item-last'>
        <Link className='header-link' to={'/contact/'} activeClassName='active'>Kontakt</Link>
      </div>
    </ol>
  </li>
);

export default Navigation;