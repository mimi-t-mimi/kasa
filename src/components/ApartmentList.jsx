import React, { useEffect, useState } from "react";
import "./ApartmentList.scss";
import ApartmentCard from "../layout/ApartmentCard"


function ApartmentList(){  // il est bon de mettre toute la logique a l'interieur du composant pour pouvoir le deplacer dans l'app sans perdre cette logisue 
    const [apartments, setApartments]=useState([]); 

    useEffect(fetchApartments,[]);

    function fetchApartments(){
        fetch("logements.json")
            .then((res)=>res.json())
            .then((res)=>setApartments(res))
            .catch(console.error);
      
    }
        

    return (
    
        <div className="list">
            {apartments.map((apartment)=>(
            <ApartmentCard title={apartment.title} imageUrl={apartment.cover} id={apartment.id}/>
            ))}
    
        </div>
    );
}

export default ApartmentList;