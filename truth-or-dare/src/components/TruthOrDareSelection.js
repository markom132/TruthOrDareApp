import React from 'react';
import '../styles/TruthOrDareSelection.css';

const TruthOrDareSelection = ({ setChoice }) => {
  return (
    <div className="selection-container">
      <h1 className="selection-title">Izaberi: Istina ili Izazov?</h1>
      <div className="selection-buttons">
        <button className="selection-btn truth-btn" onClick={() => setChoice('truth')}>Istina</button>
        <button className="selection-btn dare-btn" onClick={() => setChoice('dare')}>Izazov</button>
      </div>
    </div>
  );
};

export default TruthOrDareSelection;
