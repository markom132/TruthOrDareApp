import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    return (
        <header className="header-container">
            <div>
                <div className="logo">Truth or Dare</div>
                <div className="description">Najluđi izazovi za tvoje društvo!</div>
            </div>
            <nav className="nav">
                <Link className="nav-link" to="/">Početna</Link>
                <Link className="nav-link" to="/play">Igraj odmah</Link>
                <Link className="nav-link" to="/rules">Pravila igre</Link>
            </nav>
        </header>
    );
};

export default Header;