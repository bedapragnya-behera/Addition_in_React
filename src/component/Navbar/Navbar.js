import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <nav className='nav'>
            <a href='/' className='site-title'>MyComp.com</a>
            <ul>
                <li className='active'>
                    <a href='/'>Home</a>
                </li>
                <li><a href='/about'>About</a></li>
                <li><a href='/services'>Services</a></li>
                <li><a href='/career'>Career</a></li>
                <li><a href='/contact'>Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
