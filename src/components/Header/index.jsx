import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

export default function index() {
    return (
        <header>
            <ul>
                <li>
                    <NavLink to='/resume' activeClassName="active_link">Resume</NavLink>
                </li>
                <li>
                    <NavLink to='/portfolio' activeClassName="active_link">Portfolio</NavLink>
                </li>
            </ul>
        </header>
    )
}
