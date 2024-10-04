// React Router
import { Routes, Route } from 'react-router-dom';

// Components
import AllPlayers from './components/AllPlayers';
import NavBar from './components/NavBar';
import NewPlayerForm from './components/NewPlayerForm';
import SinglePlayer from './components/SinglePlayer';

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/player/:id" element={<SinglePlayer />} />
        <Route path="/new-player" element={<NewPlayerForm />} />
      </Routes>
    </div>
  );
}

export default App;
