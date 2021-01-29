import React from 'react';
import './NavBar.css';

const NavBar=()=> {
    return (
        <body>
        <div className='container'>
            <nav className='navbar'>
<ul>
    <li><a href='#home'>Home</a></li>
    <li><a href='#about'>About</a></li>
    <li><a href='#projects'>Projects</a></li>
    <li><a href='#skills'>Skills</a></li>
    <li><a href='#tools'>Tools</a></li>
    <li><a href='#contact'>Contact</a></li>
</ul>
            </nav>

        <section id='home'>
            <h1>home of site</h1>
            <p>lorem15lorem15lorem15lorem15lorem15lorem15lorem15lorem15</p>
        </section>
        <section id='about'>
            <h1>about</h1>
            <p>lorem15lorem15lorem15lorem15lorem15lorem15lorem15lorem15</p>
        </section>
         <section id='projects'>
            <h1>project</h1>
            <p>lorem15lorem15lorem15lorem15lorem15lorem15lorem15lorem15</p>
        </section>
        <section id='skills'>
            <h1>skills</h1>
            <p>lorem15lorem15lorem15lorem15lorem15lorem15lorem15lorem15</p>
        </section>
        <section id='tools'>
            <h1>tools</h1>
            <p>lorem15lorem15lorem15lorem15lorem15lorem15lorem15lorem15</p>
        </section>
        <section id='contact'>
            <h1>contact</h1>
            <p>lorem15lorem15lorem15lorem15lorem15lorem15lorem15lorem15</p>
        </section>
        
        </div></body>

    )
}

export default NavBar;
