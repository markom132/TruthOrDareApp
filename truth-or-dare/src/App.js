import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <Router>
      <Header/>
      <Hero/>
    </Router>
  );
}

export default App;
