import React from 'react'
import {NavLink} from 'react-router-dom';

function NavBar() {
    return (
        <nav className = "navbar">
            <ul>
                <li><NavLink to = "/" className ="nav-link">News</NavLink></li>
                <li><NavLink exact to = "/business" className = "nav-link">Business</NavLink></li>
                <li><NavLink exact to = "/teck" className = "nav-link">Technology</NavLink></li>
                <li><NavLink exact to = "/finance" className = "nav-link">Finance</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar;