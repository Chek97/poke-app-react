import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import iconLogo from '../../assets/logo2.png';

export const NavBar = () => {

    const [active, setActive] = useState("/");// TODO: hacer esto pero con useParams

    const handleActive = (nav) => setActive(nav);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <a className="navbar-brand" href="/">
                <img src={iconLogo} width="50" height="50" alt="" />
                {"  "} Poke-React-App
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className={`nav-item ${active === '/' && 'active'}`}>
                        <Link className='nav-link' to="/" onClick={() => handleActive('/')}>Inicio</Link>
                    </li>
                    <li className={`nav-item ${active === '/about' && 'active'}`}>
                        <Link className='nav-link' to="/about" onClick={() => handleActive('/about')}>Sobre la App</Link>
                    </li>
                    <li className={`nav-item ${active === '/info' && 'active'}`}>
                        <Link className='nav-link' to="/info" onClick={() => handleActive('/info')}>Informacion</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
