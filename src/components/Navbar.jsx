import React from 'react'; 
import { Link } from 'react-router-dom';
import "./Navbar.scss";

function Navbar() {
    return <nav className="navbar">
    <div className="navbar_logo"><img src='/images/logo.png' alt="Logo Kasa" /></div>
    <Link to="/">
    <div> Accueil </div>
    </Link> 
   <Link to="/about">
    <div> A propos </div>
    </Link> 
    
    
    
    </nav>

}

export default Navbar;
