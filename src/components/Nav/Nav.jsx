import React from 'react';
import { Link } from 'react-router-dom';
import "./Nav.css";

function Nav() {
    return (
        <nav className="nav">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/login">Login</Link>
            <Link className="nav-link" to="/project">Projects</Link>
            <Link className="nav-link" to="/newproject">Create a Project!</Link>
        </nav>
    );
}

export default Nav;


