import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
    <nav className='fixed-top'>
        <ul>
            <li>
                <Link to="/">Header/About Me</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
            <li>
                <Link to="/contact">Footer/Contact</Link>
            </li>
        </ul>
    </nav>
);

export default Navigation;