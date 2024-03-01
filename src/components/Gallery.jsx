
import React, { useState } from "react";
import "./Gallery.scss";

export function Gallery(props) {
    const pictures = props.pictures;
    const [currentPicture, setCurrentPicture] = useState(0);

    // Fonction pour obtenir la classe CSS de l'image actuelle
    const getClassName = (i) => {
        if (i === currentPicture) return "show";
        return "";
    };

    // Fonction pour passer à l'image suivante
    const moveToNext = () => {
        setCurrentPicture((currentPicture + 1) % pictures.length);
    };

    // Fonction pour passer à l'image précédente
    const moveToPrevious = () => {
        const newCurrentPicture = currentPicture - 1;
        if (newCurrentPicture < 0) {
            setCurrentPicture(pictures.length - 1);
            return;
        }
        setCurrentPicture(currentPicture - 1);
    };

    // Rendu du composant
    if (props.page === "about") {
        // Rendu spécial pour la page "about"
        return (
            <div className="gallery">
                <img src="./images/about_image.png" alt="About" className="image_container" />
            </div>
        );
    }

    // Rendu du composant lorsque ce n'est pas la page "about"
    return (
        <div className="gallery">
            <div className="image_container">
                {/* Affichage des images avec la classe CSS appropriée */}
                {pictures.map((pic, i) => (
                    <img key={pic} src={pic} alt="" className={getClassName(i)} />
                ))}
            </div>

            {/* Condition pour afficher les boutons de navigation si plus d'une image est présente */}
            {pictures.length > 1 && (
                <>
                    <button className="btn btn-next" onClick={moveToNext}>
                        <i className="fas fa-chevron-left"></i> {/* Icône de navigation gauche */}
                    </button>
                    <button className="btn btn-previous" onClick={moveToPrevious}>
                        <i className="fas fa-chevron-right"></i> {/* Icône de navigation droite */}
                    </button>
                </>
            )}
        </div>
    );
}
