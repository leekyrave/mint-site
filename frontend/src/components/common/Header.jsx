import React from 'react';
import logo from '../../assets/logo.png';
import '../../styles/header.css';
import { NavLink } from 'react-router-dom';

function Header() {
    return(
        <header>
            <nav>

                <a href = "/" className= "navbar-logo">
                    <img src = {logo} alt = "Logo"/>
                </a>
                <ul className = "navbar-menu">
                    <li><NavLink to = "/">Home</NavLink></li>
                    <li><NavLink reloadDocument to = "/#about">About</NavLink></li>
                    <li><NavLink reloadDocument to = "/#services">Services</NavLink></li>
                    <li><NavLink reloadDocument to = "/#portfolio">Portfolio</NavLink></li>
                    <li><NavLink reloadDocument to = "/#contacts">Contacts</NavLink></li>
                    <li><NavLink to = "/signup">Sign up</NavLink></li>
                </ul>
            </nav>

        </header>
    )
}

export default Header;