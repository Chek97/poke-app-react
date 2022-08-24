import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { navLogo } from '../../assets';

export const NavBar = () => {

    const [active, setActive] = useState("/");// TODO: hacer esto pero con useParams

    const handleActive = (nav) => setActive(nav);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <a className="navbar-brand text-white main-text-logo rounded" href="/">
                <img src={navLogo} width="50" height="50" alt="" />
                {"  "} Poke-React-App
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className={`nav-item main-text-logo ${active === '/' && 'font-weight-bold'}`}>
                        <Link className='nav-link text-white' to="/" onClick={() => handleActive('/')}>Inicio</Link>
                    </li>
                    <li className={`nav-item main-text-logo ${active === '/about' && 'font-weight-bold'}`}>
                        <Link className='nav-link text-white' to="/about" onClick={() => handleActive('/about')}>Sobre la App</Link>
                    </li>
                    <li className={`nav-item main-text-logo ${active === '/info' && 'font-weight-bold'}`}>
                        <Link className='nav-link text-white' to="/info" onClick={() => handleActive('/info')}>Informacion</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
