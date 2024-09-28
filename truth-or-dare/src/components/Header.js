import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    return (
        <header className="header-container">
            <div className='header-content'>
                <div className="logo">Truth or Dare</div>
                <div className="description">Spremni za izazov?</div>
            </div>
        </header>
    );
};

export default Header;