import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
    <nav className=''>
        <ul className='list-inline'>
            <li className='list-inline-item'>
                <Link to="/">About Me</Link>
            </li>
            <li className='list-inline-item'>
                <Link to="/projects">My Projects</Link>
            </li>
            <li className='list-inline-item'>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </nav>
);

export default Navigation;