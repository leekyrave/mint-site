import React from 'react';
import logo from '../../assets/logo.png'
function Header() {
    return(
        <header>
            <nav className = "navbar">

                <a href = "/" className= "navbar-logo">
                    <img src = {logo} alt = "Logo"/>
                </a>
                <ul className = "navbar-menu">
                    <li><a href = "test">Home</a></li>
                    <li><a href = "test">About</a></li>
                    <li><a href = "test">Services</a></li>
                    <li><a href = "test">Contacts</a></li>
                    <li><a href = "test">Sign In</a></li>
                </ul>
            </nav>

        </header>
    )
}

export default Header;