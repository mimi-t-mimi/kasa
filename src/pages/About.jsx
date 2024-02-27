import React from "react";
import { ImageBanner } from "../components/ImageBanner";
import { DescriptionPanel } from "../components/DescriptionPanel";
import "./About.scss";

function About() {
  
  const content = {
    Fiabilité: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    Respect: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    Services: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    Sécurité: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
  };

  return (
    <>
      <ImageBanner page="about" className="image_container"/>{/* Passer la prop "page" avec la valeur "about" */}
      
      <div className="about_container">
      
        <DescriptionPanel title="Fiabilité" content={content.Fiabilité} />
       
        <DescriptionPanel title="Respect" content={content.Respect} />
  
        <DescriptionPanel title="Services" content={content.Services} />
     
        <DescriptionPanel title="Sécurité" content={content.Sécurité} />
      </div>
    </>
  );
}

export default About;