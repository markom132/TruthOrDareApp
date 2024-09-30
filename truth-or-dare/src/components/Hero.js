import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Hero.css';
import TruthOrDareSelection from './TruthOrDareSelection';

const Hero = ({ setChoice }) => {
    const navigate = useNavigate();

    const handleChoice = (selectedChoice) => {
        setChoice(selectedChoice);
        navigate('/deck');
    };

    return (
        <section className="hero-container">
            <TruthOrDareSelection setChoice={handleChoice} />
        </section>
    );
};


export default Hero;