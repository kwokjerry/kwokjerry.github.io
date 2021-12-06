import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1>LOGO</h1>

            <div className="nav-btn-section">
                <div className="nav-btn">
                    <Link to="/" className="n-btn-link">Accueil</Link>
                </div>
                <div className="nav-btn">
                    <Link to="/projet" className="n-btn-link">Projets</Link>
                </div>
                <div className="nav-btn">
                    <Link to="/contact" className="n-btn-link">Contact</Link>
                </div>
                <div className="nav-btn">
                    <Link to="/about" className="n-btn-link">À propos</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
