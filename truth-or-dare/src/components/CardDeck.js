import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CardDeck.css';
import sound from '../styles/card-sounds.mp3';
import Card from './Card';
import { getAllTruths, getAllDares } from '../api';


const CardDeck = ({ choice }) => {
    const [drawnCard, setDrawnCard] = useState(null);
    const [flipped, setFlipped] = useState(false);
    const navigate = useNavigate();

    const changeSound = useRef(null);

    const [questions, setQuestions] = useState([]);
    const [challenges, setChallenges] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const truthData = await getAllTruths();
                const truthQuestions = truthData.map(truth => truth.question);
                setQuestions(truthQuestions);

                const dareData = await getAllDares();
                const dareChallenges = dareData.map(dare => dare.challenge);
                setChallenges(dareChallenges);
            } catch (error) {
                console.error('Failed to load data:', error);
            }
        };

        fetchData();
    }, []);

    const drawCard = () => {

        changeSound.current.play();

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
        if (!flipped) {
            const cardArray = choice === 'truth' ? questions : challenges;
            const randomCard = cardArray[Math.floor(Math.random() * cardArray.length)];
            setDrawnCard(randomCard);
        }
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
            <audio ref={changeSound} src={sound} preload='auto'></audio>
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
