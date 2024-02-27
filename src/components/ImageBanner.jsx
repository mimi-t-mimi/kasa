
import React, {useState} from "react";
import"./ImageBanner.scss";


export function  ImageBanner (props){
  
        const pictures = props.pictures;
        const [currentPicture,setCurrentPicture]= useState(0);
        const getClassName= (i) =>{
            if (i ===currentPicture) return "show";
            return "";  
        };
        const moveToNext = () => {
            setCurrentPicture ((currentPicture+1)% pictures.length) //% pour lui dire de ne jamais depasser le nombre d'image disponible 
        };
    
        const moveToPrevious  = () => {
            const newCurrentPicture = currentPicture - 1;
            if (newCurrentPicture < 0) {
            setCurrentPicture (pictures.length-1);
            return;
            }
            setCurrentPicture (currentPicture-1);
        };
        if (props.page === "about") {
            return (
              <div className="image_banner">
                <img src="./images/about_image.png" alt="About" className="image_container" />
              </div>
            );
          }
    return(
        <div className="image_banner">
            <div className="image_container"> 
                {pictures.map((pic,i) => (
                <img key={pic} src={pic} alt="" className={getClassName(i)}></img>
                ))}
            </div>
           
            <button className= "btn btn-next" onClick={moveToNext}>
                <i className="fas fa-chevron-left"></i>
            </button>
            <button className= "btn btn-previous" onClick={moveToPrevious}>
                <i className="fas fa-chevron-right"></i> 
                </button>
        </div>
    );
} 