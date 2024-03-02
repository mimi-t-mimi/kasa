import React,{useEffect,useState} from "react";
import {DescriptionPanel} from "../components/DescriptionPanel";
import {Gallery} from "../components/Gallery";
import {ApartmentHeader} from "../components/ApartmentHeader";
import "./ApartmentPage.scss";
import {useLocation} from "react-router-dom";

function ApartmentPage() {
    const location = useLocation ();
    console.log("location:",location);
    console.log("our apartment id is:",location.state.apartmentId);
    const[flat,setFlat]=useState(null);
    useEffect(fetchApartmentData,[]);


    
    function fetchApartmentData(){
        fetch("logements.json")
            .then((res)=>res.json())
            .then((flats) => {
                const flat = flats.find((flat) => flat.id === location.state.apartmentId);
                console.log("flat:",flat);
                setFlat(flat);
            })
            .catch(console.error);  

    }
    if (flat== null) return <div>...LOADING</div>;

    return (
        <div className="apartment-page">
            <Gallery pictures={flat.pictures}/>
            <ApartmentHeader flat={flat}/>
            <div className="apartment_description_area">   
                <DescriptionPanel title="Description" content={flat.description}/>
                <DescriptionPanel title="Equipements"content= {flat.equipments.map((eq, i) => ( 
                <ul>
                    <li key={i}>{eq}</li>
                </ul>
                ))}/>
            </div>
        </div>
    );
}

export default ApartmentPage;
