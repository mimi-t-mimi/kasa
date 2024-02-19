import React from 'react';
import { Link } from 'react-router-dom';
import './Apartment.scss';

function Apartement() {
  return (
    <div className="apartment">
      <Link to="/ApartmentPage">
        <h2>Titre de la location</h2>
      </Link>
    </div>
  );
}

export default Apartement;