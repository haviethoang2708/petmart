import React from 'react';
import '../style/Pet.css';

function PetCard({ name, image, description }) {
  return (
    <div className="pet-card">
      <img src={image} alt={`${name}`} className="pet-image" />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

export default PetCard;
