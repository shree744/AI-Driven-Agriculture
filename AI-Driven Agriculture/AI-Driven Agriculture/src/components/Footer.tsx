import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Mail, Phone, MapPin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Sprout className="h-8 w-8 mr-2" />
              <span className="font-bold text-xl">AgriSmart</span>
            </div>
            <p className="text-green-100 mb-4">
              Empowering farmers with AI-driven solutions for sustainable agriculture.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/Priyabrata017/Crop-prediction-using-Machine-Learning" target="_blank" rel="noopener noreferrer" className="text-green-100 hover:text-white">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-green-100 hover:text-white">Home</Link></li>
              <li><Link to="/crop-prediction" className="text-green-100 hover:text-white">Crop Prediction</Link></li>
              <li><Link to="/plant-health" className="text-green-100 hover:text-white">Plant Health</Link></li>
              <li><Link to="/irrigation" className="text-green-100 hover:text-white">Irrigation System</Link></li>
              <li><Link to="/dashboard" className="text-green-100 hover:text-white">Dashboard</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-green-100">Soil Analysis</li>
              <li className="text-green-100">Weather Forecasting</li>
              <li className="text-green-100">Crop Disease Detection</li>
              <li className="text-green-100">Smart Irrigation</li>
              <li className="text-green-100">Yield Prediction</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-green-100">
                <Mail className="h-5 w-5 mr-2" />
                <span>contact@agrismart.com</span>
              </li>
              <li className="flex items-center text-green-100">
                <Phone className="h-5 w-5 mr-2" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center text-green-100">
                <MapPin className="h-5 w-5 mr-2" />
                <span>123 Farm Road, Agritech Valley</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-100">
          <p>&copy; {new Date().getFullYear()} AgriSmart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;