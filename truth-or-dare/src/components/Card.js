import React, { useState } from 'react';
import '../styles/Card.css';

const Card = ({ content, flipped, onFlipEnd }) => {

  return (
    <div className={`card ${flipped ? 'flipped' : ''}`} onTransitionEnd={onFlipEnd}>
      <div className="card-inner">
        <div className="card-front">
          <h2>Klikni da vidiš</h2>
        </div>
        <div className="card-back">
          <h2>{content}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
