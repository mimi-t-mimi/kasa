import React, { useEffect, useState } from "react";
import { DescriptionPanel } from "../components/DescriptionPanel";
import { Gallery } from "../components/Gallery";
import { ApartmentHeader } from "../components/ApartmentHeader";
import "./ApartmentPage.scss";
import { useLocation } from "react-router-dom";
function ApartmentPage() {
  // Utilisation de useLocation pour obtenir les données de l'URL
  const location = useLocation();
  // Déclaration d'un état local pour stocker les détails de l'appartement
  const [flat, setFlat] = useState(null);

  // Utilisation de useEffect pour charger les détails de l'appartement en fonction de l'ID passé dans l'URL
  useEffect(() => {
      function fetchApartmentData() {
          // Requête pour obtenir les données des appartements depuis un fichier JSON
          fetch("logements.json")
              .then((res) => res.json())
              .then((flats) => {
                  // Recherche de l'appartement correspondant à l'ID passé dans l'URL
                  const flat = flats.find((flat) => flat.id === location.state.apartmentId);
                  // Mise à jour de l'état local avec les détails de l'appartement trouvé
                  setFlat(flat);
              })
              .catch(console.error);
      }

      fetchApartmentData();
  }, [location.state.apartmentId]); // Dépendance de useEffect pour s'exécuter chaque fois que l'ID de l'appartement change

  // Rendu conditionnel en fonction de l'état de l'appartement
  if (flat == null) return <div>...LOADING</div>;

  // Rendu de la page d'appartement avec la galerie d'images, l'en-tête de l'appartement et les panneaux de description des détails et des équipements
  return (
      <div className="apartment-page">
          <Gallery pictures={flat.pictures} />
          <ApartmentHeader flat={flat} />
          <div className="apartment_description_area">
              <DescriptionPanel title="Description" content={flat.description} />
              <DescriptionPanel
                title="Equipements"
                content={
                  <ul>
                    {flat.equipments.map((eq, i) => (
                      <li key={i}>{eq}</li>
                    ))}
                  </ul>
                  }
                />
          </div>
      </div>
  );
}


export default ApartmentPage;