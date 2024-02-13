import React from "react";
import "./ApartmentList.css";
import Apartment from "../pages/Apartment"

function ApartmentList(){
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