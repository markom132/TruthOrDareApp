import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/Card.css';

const Card = ({ content, flipped, onFlipEnd }) => {

  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    if (flipped) {
      setAnimationClass('card-flip');
    } else {
      setAnimationClass('card-animate');
    }
  }, [flipped]);

  return (
    <div className={`card ${flipped ? 'flipped' : ''} ${animationClass}`}
      onTransitionEnd={onFlipEnd}>
      <div className="card-inner">
        <div className="card-front">
          <h2 className='card-text'>Klikni da vidiš</h2>
        </div>
        <div className="card-back">
          <h2 className='card-text'>{content}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
