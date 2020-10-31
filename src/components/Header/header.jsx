import React from 'react';
import { Link } from "react-router-dom";
import "./Header.css"
import Logo from "../Helpers/Images/logolarge.png"

function Header() {
    return (
        <Link className="header" to="/">
            <img className="logo" src={Logo} alt="logo"/>
        </Link>
    )
}

export default Header;



// return (
//     <h1>This be the header.</h1>
// );
// }