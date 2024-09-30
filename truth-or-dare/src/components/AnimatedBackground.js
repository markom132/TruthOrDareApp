import React from 'react';
import '../styles/AnimatedBackground.css';

const AnimatedBackground = () => {
    return (
        <div>
            <div className="line left-one"></div>
            <div className="line left-two"></div>

            <div className="line right-one"></div>
            <div className="line right-two"></div>

            <div className="circle left-one"></div>
            <div className="circle left-two"></div>

            <div className="circle right-one"></div>
            <div className="circle right-two"></div>

            <div className="glowing-square one"></div>
            <div className="glowing-square two"></div>
        </div>
    );
};

export default AnimatedBackground;
