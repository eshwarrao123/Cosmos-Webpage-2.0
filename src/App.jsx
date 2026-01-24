import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Planets from './pages/Planets';
import SolarSystem from './pages/SolarSystem';
import StarsGalaxies from './pages/StarsGalaxies';
import BlackHoles from './pages/BlackHoles';
import Research from './pages/Research';
import PlanetaryFormation from './pages/PlanetaryFormation';
import OrbitalMechanics from './pages/OrbitalMechanics';
import Habitability from './pages/Habitability';
import ExtremePhysics from './pages/ExtremePhysics';
import PlanetDetail from './pages/PlanetDetail';
import CosmicTravel from './pages/CosmicTravel';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="planets" element={<Planets />} />
          <Route path="planets/:planetId" element={<PlanetDetail />} />
          <Route path="solar-system" element={<SolarSystem />} />
          <Route path="stars-galaxies" element={<StarsGalaxies />} />
          <Route path="black-holes" element={<BlackHoles />} />
          <Route path="research" element={<Research />} />
          <Route path="formation" element={<PlanetaryFormation />} />
          <Route path="mechanics" element={<OrbitalMechanics />} />
          <Route path="habitability" element={<Habitability />} />
          <Route path="habitability" element={<Habitability />} />
          <Route path="extreme-physics" element={<ExtremePhysics />} />
          <Route path="travel" element={<CosmicTravel />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
