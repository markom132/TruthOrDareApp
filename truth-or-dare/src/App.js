import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Hero from './components/Hero';
import CardDeck from "./components/CardDeck";

function App() {

  const [choice, setChoice] = useState('');

  return (
    <Router>
      <Header />
      <Routes>
      <Route 
          path="/" 
          element={<Hero setChoice={setChoice} />} 
        />
         <Route 
          path="/deck" 
          element={<CardDeck choice={choice} />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
