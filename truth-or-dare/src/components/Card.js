import React, { useState } from 'react';
import '../styles/Card.css';

const Card = ({ content }) => {
  const [flipped, setFlipped] = useState(false); // State za praćenje okretanja kartice

  const handleFlip = () => {
    setFlipped(!flipped); // Menjamo stanje između okrenut/neokrenut
  };

  return (
    <div className={`card ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="card-inner">
        <div className="card-front">
          <h2>Klikni da vidiš</h2> {/* Prednja strana kartice */}
        </div>
        <div className="card-back">
          <h2>{content}</h2> {/* Zadnja strana kartice */}
        </div>
      </div>
    </div>
  );
};

export default Card;
