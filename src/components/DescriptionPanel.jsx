import React ,{useState} from "react";
import "./DescriptionPanel.scss"

export function DescriptionPanel (props){
// ici ca permet de mettre en place un systeme de visible invisible pour le cadran bas de mon description panel, il ne saffiche que conditonnellement 
const [isContentVisible, setIsContentVisible]= useState (false);
const showContent = () =>{
    setIsContentVisible(!isContentVisible);
}

    return (
    <div className="description_panel">
        <p className="description_header">
            <span>{props.title}</span>
            <i className="fas fa-chevron-up" onClick={showContent}></i>
        </p>
       {isContentVisible && <p className="description_content">{props.content}</p>}
    </div> 
);
}

