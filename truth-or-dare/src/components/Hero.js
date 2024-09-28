import React, { useState } from "react";
import image from '../styles/background.png';
import '../styles/Hero.css';
import TruthOrDareSelection from './TruthOrDareSelection';
import CardDeck from './CardDeck';

const Hero = () => {
    const [choice, setChoice] = useState('');
    return (
        <section className="hero-container">
            <div className="hero-background">
                <img src={image} alt="Slika" />
            </div>

            {choice === '' ? (
                <TruthOrDareSelection setChoice={setChoice} />
            ) : (
                <CardDeck choice={choice} />
            )}
        </section>
    );
};


export default Hero;