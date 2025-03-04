import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sprout, Droplets, Plant, BarChart3 } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-green-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Sprout className="h-8 w-8 mr-2" />
              <span className="font-bold text-xl">AgriSmart</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 rounded-md hover:bg-green-600 transition-colors">Home</Link>
            <Link to="/crop-prediction" className="px-3 py-2 rounded-md hover:bg-green-600 transition-colors flex items-center">
              <Plant className="h-5 w-5 mr-1" />
              <span>Crop Prediction</span>
            </Link>
            <Link to="/plant-health" className="px-3 py-2 rounded-md hover:bg-green-600 transition-colors flex items-center">
              <Sprout className="h-5 w-5 mr-1" />
              <span>Plant Health</span>
            </Link>
            <Link to="/irrigation" className="px-3 py-2 rounded-md hover:bg-green-600 transition-colors flex items-center">
              <Droplets className="h-5 w-5 mr-1" />
              <span>Irrigation</span>
            </Link>
            <Link to="/dashboard" className="px-3 py-2 rounded-md hover:bg-green-600 transition-colors flex items-center">
              <BarChart3 className="h-5 w-5 mr-1" />
              <span>Dashboard</span>
            </Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-green-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-green-700">
            <Link to="/" className="block px-3 py-2 rounded-md hover:bg-green-600 transition-colors">Home</Link>
            <Link to="/crop-prediction" className="block px-3 py-2 rounded-md hover:bg-green-600 transition-colors flex items-center">
              <Plant className="h-5 w-5 mr-1" />
              <span>Crop Prediction</span>
            </Link>
            <Link to="/plant-health" className="block px-3 py-2 rounded-md hover:bg-green-600 transition-colors flex items-center">
              <Sprout className="h-5 w-5 mr-1" />
              <span>Plant Health</span>
            </Link>
            <Link to="/irrigation" className="block px-3 py-2 rounded-md hover:bg-green-600 transition-colors flex items-center">
              <Droplets className="h-5 w-5 mr-1" />
              <span>Irrigation</span>
            </Link>
            <Link to="/dashboard" className="block px-3 py-2 rounded-md hover:bg-green-600 transition-colors flex items-center">
              <BarChart3 className="h-5 w-5 mr-1" />
              <span>Dashboard</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;