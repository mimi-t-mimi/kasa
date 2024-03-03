import React from 'react';
import { Link } from 'react-router-dom';
import './ApartmentCard.scss';

function ApartmentCard(props) {

  return (  
    <Link to="/flat"
    state={{ apartmentId: props.id 
    }}
    > 
        <div className="apartment"> 
          <img src={props.imageUrl} alt=""/>
          <div className='apartment_subtitle'>{props.title}</div>
        </div> 
      </Link>
  );
}

export default ApartmentCard;