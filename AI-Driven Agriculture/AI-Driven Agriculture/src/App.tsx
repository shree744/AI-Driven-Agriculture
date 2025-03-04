import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CropPredictionPage from './pages/CropPredictionPage';
import PlantHealthPage from './pages/PlantHealthPage';
import IrrigationSystemPage from './pages/IrrigationSystemPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/crop-prediction" element={<CropPredictionPage />} />
          <Route path="/plant-health" element={<PlantHealthPage />} />
          <Route path="/irrigation" element={<IrrigationSystemPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;