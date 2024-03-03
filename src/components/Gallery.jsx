import React, { useState } from "react";
import "./Gallery.scss"; // Import du fichier de style SCSS associé

// Définition du composant fonctionnel Gallery
export function Gallery(props) {
    // Extraction de la prop 'pictures'
    const pictures = props.pictures;

    // Déclaration d'un état local 'currentPicture' avec useState, initialisé à 0
    const [currentPicture, setCurrentPicture] = useState(0);

    // Fonction pour obtenir la classe CSS de l'image actuelle
    const getClassName = (i) => {
        if (i === currentPicture) return "show"; // Si l'index correspond à l'image actuelle, retourne la classe 'show'
        return ""; // Sinon, retourne une chaîne vide
    };

    // Fonction pour passer à l'image suivante
    const moveToNext = () => {
        setCurrentPicture((currentPicture + 1) % pictures.length); // Incrémente l'index de l'image actuelle modulo le nombre total d'images
    };

    // Fonction pour passer à l'image précédente
    const moveToPrevious = () => {
        const newCurrentPicture = currentPicture - 1; // Décrémente l'index de l'image actuelle
        if (newCurrentPicture < 0) { // Si l'index devient négatif, revient à la dernière image
            setCurrentPicture(pictures.length - 1);
        } else {
            setCurrentPicture(newCurrentPicture); // Met à jour l'index de l'image actuelle
        }
    };

    // Rendu conditionnel en fonction de la page
    if (props.page === "about") {
        return (
            <div className="gallery">
                <img src="./images/about_image.jpg" alt="About" className="image_container" />
            </div>
        );
    } else {
        return (
            <div className="gallery">
                <div className="image_container">
                    {/* Affichage de chaque image dans la galerie */}
                    {pictures.map((pic, i) => (
                        <div key={pic} className="image_wrapper">
                            <img src={pic} alt="" className={getClassName(i)} />
                        </div>
                    ))}
                </div>

                {/* Affichage de la numérotation */}
                {pictures.length > 1 && (
                    <div className="image_counter">
                        {currentPicture + 1} / {pictures.length}
                    </div>
                )}

                {/* Affichage des boutons de navigation */}
                {pictures.length > 1 && (
                    <>
                        <button className="btn btn-previous" onClick={moveToPrevious}>
                             <i className="fas fa-chevron-left"></i> 
                        </button>
                        <button className="btn btn-next" onClick={moveToNext}>
                           <i className="fas fa-chevron-right"></i> 
                        </button>
                    </>
                )}
            </div>
        );
    }
}
