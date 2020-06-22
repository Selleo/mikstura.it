import React from 'react';
import {Link} from 'gatsby';

const Navigation = () => (
  <li className='navigation'>
    <ol className='navigation__item'>
      <Link className='header-link' to={'/news/'} activeClassName='active'>Aktualności</Link>
    </ol>
    <ol className='navigation__item'>
      <Link className='header-link' to={'/about/'} activeClassName='active'>O nas</Link>
    </ol>
    <ol className='navigation__item'>
      <Link className='header-link' to={'/courses/'} activeClassName='active'>Kursy</Link>
    </ol>
    <ol className='navigation__item'>
      <Link className='header-link' to={'/galery/'} activeClassName='active'>Galeria</Link>
    </ol>
    <ol className='navigation__item'>
      <Link className='header-link' to={'/contact/'} activeClassName='active'>Kontakt</Link>
    </ol>
  </li>
);

export default Navigation;
