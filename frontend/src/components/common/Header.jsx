import React from 'react';
import logo from '../../assets/logo.png';
import '../../styles/header.css';

function Header() {
    return(
        <header>
            <nav>

                <a href = "/" className= "navbar-logo">
                    <img src = {logo} alt = "Logo"/>
                </a>
                <ul className = "navbar-menu">
                    <li><a href = "">Home</a></li>
                    <li><a href = "#about">About</a></li>
                    <li><a href = "#services">Services</a></li>
                    <li><a href = "#portfolio">Portfolio</a></li>
                    <li><a href = "#contacts">Contacts</a></li>
                    <li><a href = "">Sign In</a></li>
                </ul>
            </nav>

        </header>
    )
}

export default Header;