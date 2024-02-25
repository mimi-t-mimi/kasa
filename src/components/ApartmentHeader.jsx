import React from "react"
import "./ApartmentHeader.scss";

export function ApartmentHeader(props) {
const flat= props.flat;
const name =flat.host.name;
const [firstName,lastName]=name.split();
        return ( 
            <div className="apartment_header">
            <div className="apartment_title">
                <h1>{props.flat.title}</h1>
                <h2>{props.flat.location}</h2>
                <div className="apartment_tags">   
                {flat.tags.map((tag)=> (
                   <span key={tag} className="apartment_tag">{tag}</span>
                 
                   ))}
                </div>
            </div>
            <div className="apartment_owner">
                <div className="apartment_owner_details">
                    <h3>
                        <span> {firstName}</span> 
                        <span>{lastName}</span>
                    </h3>
                    <div className="apartment_owner_badge">
                        <img src={flat.host.picture} alt="" />
                    </div>
                </div>
                    <div className="apartment_owner_stars">  
                {/* ici je cré un array de 5 etoile qui est le max d'etoile et je lui ajoute les propos et je lui dit pour chacun de ces numero tu vas  faire une span qui par defaut sera grise mais si le rating est superieur au numero actuel tu me met une classe on   */}
                        {[1,2,3,4,5].map((num)=>(
                           <span  key={num}className={props.flat.rating >= num? "on":""}>★</span> 
                       ))}
                </div>
            </div>
            </div>
);
}