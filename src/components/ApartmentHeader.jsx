import React from "react"
import "./ApartmentHeader.scss";

export function ApartmentHeader() {

        return ( 
            <div className="apartment_header">
            <div className="apartment_title">
                <h1>crazy loft</h1>
                <h2>paris iles de france</h2>
                <div className="apartment_tags">
                    <span className="apartment_tag">cozy</span>
                    <span className="apartment_tag">cozy</span>
                    <span className="apartment_tag">cozy</span>
                </div>
            </div>
            <div className="apartment_owner">
                <div className="apartment_owner_details">
                    <h3>
                        <span>alex </span> 
                        <span>dumas</span>
                    </h3>
                    <div className="apartment_owner_badge"></div>
                </div>
                    <div className="apartment_owner_stars">
                        <span className="on">★</span>
                        <span className="on">★</span>
                        <span className="on">★</span>
                        <span className="off">★</span>
                        <span className="off">★</span>   
                </div>
            </div>
            </div>
);
}