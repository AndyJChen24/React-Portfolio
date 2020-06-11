import React from "react";
import './style.css'
const Nav = (props) => {

    return(
        <nav className="navbar myNav">
            <a href = "../index"><img className="logo" src="../img/logo.png" alt="logo"/></a>
            <div className="burger">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <ul className="nav_link">
                <li><a href="about" id="about">About</a></li>
                <li><a href="../AndyChenResume.pdf" id="resume">Resume</a></li>
                <li><a href="portfolio" id="projects">Projects</a></li>
                <li><a href="contact" id="contact">Contact</a></li>
            </ul>    
        </nav>
    )
    
}

export default Nav;