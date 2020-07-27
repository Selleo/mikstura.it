import React from 'react';
import { Link } from 'gatsby';

const Navigation = () => (
  <>
    <div className='header'>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className='header-logo'>
          <Link className='header-link' to={'/'}>mikstura<span className="header-link__it">.IT</span></Link>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className='header-link' to={'/'} activeClassName='active'>Aktualności</Link>
            </li>
            <li className='nav-item'>
              <Link className='header-link' to={'/about/'} activeClassName='active'>O nas</Link>
            </li>
            <li className='nav-item'>
              <Link className='header-link' to={'/courses/'} activeClassName='active'>Kursy</Link>
            </li>
            <li className='nav-item'>
              <Link className='header-link' to={'/galery/'} activeClassName='active'>Galeria</Link>
            </li>
            <li className='nav-item'>
              <Link className='header-link' to={'/contact/'} activeClassName='active'>Kontakt</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </>
);

export default Navigation;
