import React, { useEffect, useState } from "react";
import "./ApartmentList.scss";
import ApartmentCard from "./ApartmentCard";

function ApartmentList() {
  // Déclaration d'un état local pour stocker la liste des appartements
  const [apartments, setApartments] = useState([]);

  // Utilisation de useEffect pour effectuer une action au chargement du composant
  useEffect(() => {
      fetchApartments(); // Appel de la fonction fetchApartments
  }, []);

  // Définition de la fonction fetchApartments pour récupérer la liste des appartements
  function fetchApartments() {
      fetch("logements.json") // Requête GET pour récupérer les données depuis logements.json
          .then((res) => res.json()) // Conversion de la réponse en JSON
          .then((res) => setApartments(res)) // Mise à jour de l'état apartments avec les données récupérées
          .catch(console.error); // Gestion des erreurs
  }

  // Rendu de la liste des appartements à partir des données récupérées
  return (
      <div className="list">
          {apartments.map((apartment) => (
              <ApartmentCard  title={apartment.title} imageUrl={apartment.cover} id={apartment.id} />
          ))}
      </div>
  );
}

export default ApartmentList;
