import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AllPlayers from './components/AllPlayers';
import NewPlayerForm from './components/NewPlayerForm';
import SinglePlayer from './components/SinglePlayer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Puppy Bowl React</h1>
        <Routes>
          <Route exact path="/" element={<AllPlayers />} />
          <Route path="/new-player" element={<NewPlayerForm />} />
          <Route path="/player/:playerId" element={<SinglePlayer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
