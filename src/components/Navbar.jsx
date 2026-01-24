import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Planets', path: '/planets' },
        { name: 'Formation', path: '/formation' },
        { name: 'Mechanics', path: '/mechanics' },
        { name: 'Habitability', path: '/habitability' },
        { name: 'Extreme', path: '/extreme-physics' },
        { name: 'Travel', path: '/travel' },
        { name: 'Research', path: '/research' },
    ];

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <NavLink to="/">
                        COSMOS
                    </NavLink>
                </div>

                <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>

                <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    {links.map((link) => (
                        <li key={link.name} className="nav-item">
                            <NavLink
                                to={link.path}
                                className={({ isActive }) => "nav-links" + (isActive ? " active" : "")}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
