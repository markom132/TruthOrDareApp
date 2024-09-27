import React, { useState } from 'react';
import '../styles/CardDeck.css';
import Card from './Card';

const questions = [
    'Koja ti je najveća tajna?',
    'Šta bi promenio/la kod sebe?',
    'Koga od prisutnih smatraš najzanimljivijim?'
];

const challenges = [
    'Udavi Bebiju guju'
];

const CardDeck = ({ choice }) => {
    const [drawnCard, setDrawnCard] = useState(null);
    const [flipped, setFlipped] = useState(false); 

    const drawCard = () => {
        const cardArray = choice === 'truth' ? questions : challenges; 
        const randomCard = cardArray[Math.floor(Math.random() * cardArray.length)];
        setDrawnCard(randomCard);
        setFlipped(true);
    };

    return (
        <div className="deck-container">
            <h1 className="deck-title">
                {choice === 'truth' ? 'Izvuci kartu za pitanje!' : 'Izvuci kartu za izazov!'}
            </h1>
            <div className="deck" onClick={drawCard}>
                <Card content={drawnCard} flipped={flipped} />
            </div>
        </div>
    );
};

export default CardDeck;
