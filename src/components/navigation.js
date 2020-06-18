import React from 'react'
import {Link} from 'gatsby'
import './stylesheet.css'

const Navigation = () => (
    <li className='navigation'>
        <ol className='navigationItem'>
            <Link className='styledLink' to={'/news/'} activeClassName='active'>Aktualności</Link>
        </ol>
        <ol className='navigationItem'>
            <Link className='styledLink' to={'/about/'} activeClassName='active'>O nas</Link>
        </ol>
        <ol className='navigationItem'>
            <Link className='styledLink' to={'/courses/'} activeClassName='active'>Kursy</Link>
        </ol>
        <ol className='navigationItem'>
            <Link className='styledLink' to={'/galery/'} activeClassName='active'>Galeria</Link>
        </ol>
        <ol className='navigationItem'>
            <div className='last'>
                <Link className='styledLink' to={'/contact/'} activeClassName='active'>Kontakt</Link>
            </div>
        </ol>
    </li>
);

export default Navigation