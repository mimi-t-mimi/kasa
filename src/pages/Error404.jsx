import React from "react";
import "./Error404.scss";
import {Link} from "react-router-dom";

function Error404(){
    return(
    <>
        <div className="error_page">
            <h1>404</h1>
            <h2>Oops! La page que vous demandez n'existe pas</h2>
            <Link to="/">Retournez sur la page d'accueil</Link>
        </div>
    </>
    
    );
}
export default Error404;