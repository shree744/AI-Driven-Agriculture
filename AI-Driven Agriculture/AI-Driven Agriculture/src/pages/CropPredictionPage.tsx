import React, { useState } from 'react';
import { Droplets, Thermometer, Wind, CloudRain, Leaf } from 'lucide-react';

const CropPredictionPage = () => {
  const [formData, setFormData] = useState({
    nitrogen: 50,
    phosphorus: 50,
    potassium: 50,
    temperature: 25,
    humidity: 50,
    ph: 6.5,
    rainfall: 100
  });
  
  const [prediction, setPrediction] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: parseFloat(value)
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call to ML model
    setTimeout(() => {
      // Mock prediction logic based on input values
      const crops = ['rice', 'wheat', 'maize', 'chickpea', 'kidneybeans', 'pigeonpeas', 'mothbeans', 'mungbean', 'blackgram', 'lentil', 'pomegranate', 'banana', 'mango', 'grapes', 'watermelon', 'muskmelon', 'apple', 'orange', 'papaya', 'coconut', 'cotton', 'jute', 'coffee'];
      
      // Simple algorithm to pick a crop based on inputs
      const n = formData.nitrogen;
      const p = formData.phosphorus;
      const k = formData.potassium;
      const temp = formData.temperature;
      const humidity = formData.humidity;
      const ph = formData.ph;
      const rainfall = formData.rainfall;
      
      let cropIndex = 0;
      
      if (n > 80 && p > 80 && k > 80) {
        cropIndex = 11; // banana
      } else if (temp > 30 && rainfall < 80) {
        cropIndex = 14; // watermelon
      } else if (ph < 6 && rainfall > 200) {
        cropIndex = 20; // cotton
      } else if (humidity > 80 && temp > 25) {
        cropIndex = 12; // mango
      } else if (n < 30 && p < 30 && k < 30) {
        cropIndex = 0; // rice
      } else {
        // Use a deterministic but seemingly random selection based on input values
        cropIndex = Math.floor((n + p + k + temp + humidity + ph + rainfall) % crops.length);
      }
      
      setPrediction(crops[cropIndex]);
      setLoading(false);
    }, 1500);
  };

  const getCropImage = (crop: string) => {
    const cropImages: Record<string, string> = {
      'rice': 'https://images.unsplash.com/photo-1536054953991-2f9aed6c1a5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'wheat': 'https://images.unsplash.com/photo-1535912559317-99a2ae608c53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      'maize': 'https://images.unsplash.com/photo-1601593768799-76e5385fba75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'banana': 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      'mango': 'https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      'watermelon': 'https://images.unsplash.com/photo-1563114773-84221bd62daa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'cotton': 'https://images.unsplash.com/photo-1594641146604-a8c8f0899608?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
    };
    
    return cropImages[crop] || 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80';
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">AI-Powered Crop Prediction</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Enter your soil and environmental parameters to get AI-powered recommendations for the most suitable crops for your farm.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Enter Your Farm Parameters</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nitrogen (N) - {formData.nitrogen} kg/ha
                  </label>
                  <input
                    type="range"
                    name="nitrogen"
                    min="0"
                    max="140"
                    value={formData.nitrogen}
                    onChange={handleChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phosphorus (P) - {formData.phosphorus} kg/ha
                  </label>
                  <input
                    type="range"
                    name="phosphorus"
                    min="0"
                    max="140"
                    value={formData.phosphorus}
                    onChange={handleChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Potassium (K) - {formData.potassium} kg/ha
                  </label>
                  <input
                    type="range"
                    name="potassium"
                    min="0"
                    max="140"
                    value={formData.potassium}
                    onChange={handleChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Temperature - {formData.temperature}°C
                  </label>
                  <input
                    type="range"
                    name="temperature"
                    min="0"
                    max="40"
                    value={formData.temperature}
                    onChange={handleChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Humidity - {formData.humidity}%
                  </label>
                  <input
                    type="range"
                    name="humidity"
                    min="0"
                    max="100"
                    value={formData.humidity}
                    onChange={handleChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    pH Value - {formData.ph}
                  </label>
                  <input
                    type="range"
                    name="ph"
                    min="0"
                    max="14"
                    step="0.1"
                    value={formData.ph}
                    onChange={handleChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Rainfall - {formData.rainfall} mm
                  </label>
                  <input
                    type="range"
                    name="rainfall"
                    min="0"
                    max="300"
                    value={formData.rainfall}
                    onChange={handleChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-800 transition-colors flex items-center justify-center"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Analyzing...
                  </>
                ) : (
                  'Predict Suitable Crops'
                )}
              </button>
            </form>
          </div>
          
          <div>
            {prediction ? (
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Recommended Crop</h2>
                <div className="flex flex-col items-center">
                  <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                    <img 
                      src={getCropImage(prediction)} 
                      alt={prediction} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-green-700 mb-2 capitalize">{prediction}</h3>
                  <p className="text-gray-600 mb-4 text-center">
                    Based on your soil and environmental parameters, we recommend growing {prediction}.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="bg-green-50 p-3 rounded-md flex items-center">
                      <Thermometer className="h-5 w-5 text-green-700 mr-2" />
                      <div>
                        <p className="text-sm font-medium">Temperature</p>
                        <p className="text-gray-600 text-sm">{formData.temperature}°C</p>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 p-3 rounded-md flex items-center">
                      <Wind className="h-5 w-5 text-green-700 mr-2" />
                      <div>
                        <p className="text-sm font-medium">Humidity</p>
                        <p className="text-gray-600 text-sm">{formData.humidity}%</p>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 p-3 rounded-md flex items-center">
                      <CloudRain className="h-5 w-5 text-green-700 mr-2" />
                      <div>
                        <p className="text-sm font-medium">Rainfall</p>
                        <p className="text-gray-600 text-sm">{formData.rainfall} mm</p>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 p-3 rounded-md flex items-center">
                      <Droplets className="h-5 w-5 text-green-700 mr-2" />
                      <div>
                        <p className="text-sm font-medium">pH Value</p>
                        <p className="text-gray-600 text-sm">{formData.ph}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col justify-center items-center">
                <Leaf className="h-16 w-16 text-green-200 mb-4" />
                <h3 className="text-xl font-semibold text-gray-400 mb-2">No Prediction Yet</h3>
                <p className="text-gray-500 text-center">
                  Fill in your farm parameters and click "Predict Suitable Crops" to get recommendations.
                </p>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-green-700 font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold mb-2">Input Parameters</h3>
              <p className="text-gray-600">
                Enter your soil composition (N, P, K), environmental factors (temperature, humidity), and other relevant data.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-green-700 font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold mb-2">AI Analysis</h3>
              <p className="text-gray-600">
                Our machine learning algorithm analyzes your inputs against our database of crop requirements and historical yield data.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-green-700 font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold mb-2">Get Recommendations</h3>
              <p className="text-gray-600">
                Receive personalized crop recommendations optimized for your specific farming conditions to maximize yield.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropPredictionPage;