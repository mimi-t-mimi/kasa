import React from "react";
import "./ApartmentList.scss";
import Apartment from "./Apartment";


function ApartmentList(){
    fetch("./logements.json"); 
    return <div className="list">
        
        <Apartment/>
        <Apartment/> 
        <Apartment/> 
        <Apartment/> 
        <Apartment/> 
        <Apartment/>

        </div>
}

export default ApartmentList;