import React from 'react';
// hi

export default function NavBar({ pageHandler }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <span className="navbar-brand">NBA Player Tracker</span>
            <ul className="navbar-nav mr-auto">

                <li className="nav-item">
                <a href="#aboutme" onClick={() => pageHandler('')}>Home</a>
                </li>

                <li className="nav-item">
                <a href="#projects" onClick={() => pageHandler('Profile')}>Profile</a>
                </li>

                <li className="nav-item">
                <a href="#Resume" onClick={() => pageHandler('Login')}>Login</a>
                </li>

            </ul>
        </nav>
    )
}