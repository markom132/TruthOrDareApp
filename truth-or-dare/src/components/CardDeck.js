import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CardDeck.css';
import Card from './Card';

const questions = [
    'Koja ti je najveća tajna?',
    'Šta bi promenio/la kod sebe?',
    'Koga od prisutnih smatraš najzanimljivijim?'
];

const challenges = [
    'Pojedi kašiku senfa!',
    'Pleši bez muzike 1 minut.',
    'Igraj "plank" 30 sekundi.'
];

const CardDeck = ({ choice }) => {
    const [drawnCard, setDrawnCard] = useState(null);
    const [flipped, setFlipped] = useState(false);
    const [isFlipping, setIsFlipping] = useState(false);
    const navigate = useNavigate();

    const drawCard = () => {
        if (!flipped) {
            const cardArray = choice === 'truth' ? questions : challenges;
            const randomCard = cardArray[Math.floor(Math.random() * cardArray.length)];
            setDrawnCard(randomCard);
            setFlipped(true);
        } else {
            setFlipped(false);
        }
    };

    const handleFlipEnd = () => {
        if(!flipped) {
            const cardArray = choice === 'truth' ? questions : challenges;
            const randomCard = cardArray[Math.floor(Math.random() * cardArray.length)];
            setDrawnCard(randomCard);
        }
        setIsFlipping(false);
    }

    const handleBack = () => {
        setFlipped(false);
        navigate('/');
    }

    return (
        <div className="deck-container">
            <h1 className="deck-title">
                {choice === 'truth' ? 'Izvuci kartu za pitanje!' : 'Izvuci kartu za izazov!'}
            </h1>
            <div className="deck" onClick={drawCard}>
                <Card content={drawnCard} flipped={flipped} onFlipEnd={handleFlipEnd} />
            </div>
            <div>
                <button className='back-button' onClick={handleBack}>
                    <span className='back-icon'>🏠</span>
                    Nazad
                </button>
            </div>
        </div>
    );
};

export default CardDeck;
