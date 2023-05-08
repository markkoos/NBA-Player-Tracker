import React from 'react';
import Logo from '../assets/bball.png';
// hi

export default function NavBar({ pageHandler }) {
    return (
        <nav className="navbar navbar-custom navbar-expand-lg">
            <span className="navbar-brand"><img className="logo" src={Logo} alt="basketball logo"></img>NBA PLAYER TRACKER</span>
            <ul className="navbar-nav mr-auto navList">

                <li className="nav-item">
                <a href="home" onClick={() => pageHandler('Home')}>HOME</a>
                </li>

                <li className="nav-item">
                <a href="profile" onClick={() => pageHandler('Profile')}>PROFILE</a>
                </li>

                <li className="nav-item">
                <a href="login" onClick={() => pageHandler('Login')}>LOGIN</a>
                </li>

            </ul>
        </nav>
    )
}