import React from 'react';
import './NavBar.css';

const NavBar=()=> {
    return (
        <div className='container'>
            <nav className='navbar'>
<ul>
    <li><a href='#home'>Home</a></li>
    <li><a href='#about'>About</a></li>
    <li><a href='#projects'>Projects</a></li>
    <li><a href='#skills'></a>Skills</li>
    <li><a href='#tools'>Tools</a></li>
    <li><a href='#contact'>Contact</a></li>
</ul>
            </nav>
        </div>
    )
}

export default NavBar;
