import { Link, useLocation } from 'react-router-dom'
import { navLogo } from '../../assets';

export const NavBar = () => {

    const location = useLocation();

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
                    <li className={`nav-item main-text-logo ${location.pathname === '/' && 'font-weight-bold'}`}>
                        <Link className='nav-link text-white' to="/">Inicio</Link>
                    </li>
                    <li className={`nav-item main-text-logo ${location.pathname === '/about' && 'font-weight-bold'}`}>
                        <Link className='nav-link text-white' to="/about">Sobre la App</Link>
                    </li>
                    <li className={`nav-item main-text-logo ${location.pathname === '/info' && 'font-weight-bold'}`}>
                        <Link className='nav-link text-white' to="/info">Informacion</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
