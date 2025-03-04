import React, { useState, useEffect } from 'react';
import { BarChart3, Droplets, Thermometer, Wind, CloudRain, Leaf, AlertTriangle, CheckCircle2 } from 'lucide-react';

const DashboardPage = () => {
  const [weatherData, setWeatherData] = useState({
    temperature: 28.5,
    humidity: 65,
    rainfall: 0,
    forecast: 'Sunny'
  });
  
  const [soilData, setSoilData] = useState({
    moisture: 42,
    nitrogen: 65,
    phosphorus: 45,
    potassium: 55,
    ph: 6.8
  });
  
  const [irrigationStatus, setIrrigationStatus] = useState({
    isActive: false,
    nextSchedule: '08:00 AM',
    waterUsage: 35,
    efficiency: 92
  });
  
  const [cropHealth, setCropHealth] = useState([
    { id: 1, name: 'Tomatoes', status: 'Healthy', alert: null },
    { id: 2, name: 'Corn', status: 'Warning', alert: 'Low nitrogen detected' },
    { id: 3, name: 'Wheat', status: 'Healthy', alert: null },
    { id: 4, name: 'Soybeans', status: 'Healthy', alert: null }
  ]);
  
  // Simulate changing data
  useEffect(() => {
    const interval = setInterval(() => {
      setWeatherData(prev => ({
        ...prev,
        temperature: prev.temperature + (Math.random() * 0.4 - 0.2),
        humidity: Math.max(30, Math.min(90, prev.humidity + (Math.random() * 2 - 1)))
      }));
      
      setSoilData(prev => ({
        ...prev,
        moisture: Math.max(20, Math.min(80, prev.moisture + (Math.random() * 1 - 0.5)))
      }));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const toggleIrrigation = () => {
    setIrrigationStatus(prev => ({
      ...prev,
      isActive: !prev.isActive
    }));
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Farm Dashboard</h1>
          <p className="text-gray-600">
            Real-time monitoring and control of your farm's key metrics
          </p>
        </div>
        
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Thermometer className="h-6 w-6 text-blue-700" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Temperature</p>
                <p className="text-2xl font-bold">{weatherData.temperature.toFixed(1)}°C</p>
              </div>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div 
                className="h-2 bg-blue-500 rounded-full" 
                style={{ width: `${(weatherData.temperature / 40) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <Droplets className="h-6 w-6 text-green-700" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Soil Moisture</p>
                <p className="text-2xl font-bold">{soilData.moisture.toFixed(1)}%</p>
              </div>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div 
                className="h-2 bg-green-500 rounded-full" 
                style={{ width: `${soilData.moisture}%` }}
              ></div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-100 p-3 rounded-full mr-4">
                <Wind className="h-6 w-6 text-yellow-700" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Humidity</p>
                <p className="text-2xl font-bold">{weatherData.humidity.toFixed(0)}%</p>
              </div>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div 
                className="h-2 bg-yellow-500 rounded-full" 
                style={{ width: `${weatherData.humidity}%` }}
              ></div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <CloudRain className="h-6 w-6 text-purple-700" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Rainfall</p>
                <p className="text-2xl font-bold">{weatherData.rainfall} mm</p>
              </div>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div 
                className="h-2 bg-purple-500 rounded-full" 
                style={{ width: `${(weatherData.rainfall / 100) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        {/* Main Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Soil Analysis */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-6 flex items-center">
              <Leaf className="h-5 w-5 mr-2 text-green-700" />
              Soil Analysis
            </h2>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Nitrogen (N)</span>
                  <span className="text-sm font-medium text-gray-700">{soilData.nitrogen}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-2 bg-green-500 rounded-full" 
                    style={{ width: `${soilData.nitrogen}%` }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Phosphorus (P)</span>
                  <span className="text-sm font-medium text-gray-700">{soilData.phosphorus}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-2 bg-blue-500 rounded-full" 
                    style={{ width: `${soilData.phosphorus}%` }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Potassium (K)</span>
                  <span className="text-sm font-medium text-gray-700">{soilData.potassium}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-2 bg-purple-500 rounded-full" 
                    style={{ width: `${soilData.potassium}%` }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">pH Level</span>
                  <span className="text-sm font-medium text-gray-700">{soilData.ph}</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-2 bg-yellow-500 rounded-full" 
                    style={{ width: `${(soilData.ph / 14) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-green-50 p-4 rounded-md">
              <h3 className="font-semibold mb-2">Soil Health Analysis</h3>
              <p className="text-sm text-gray-700">
                Your soil is in good condition. Consider adding more nitrogen-rich fertilizer for optimal crop growth.
              </p>
            </div>
          </div>
          
          {/* Irrigation Control */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-6 flex items-center">
              <Droplets className="h-5 w-5 mr-2 text-blue-700" />
              Irrigation Control
            </h2>
            
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm text-gray-600">System Status</p>
                <p className={`font-semibold ${irrigationStatus.isActive ? 'text-green-600' : 'text-gray-600'}`}>
                  {irrigationStatus.isActive ? 'Active' : 'Idle'}
                </p>
              </div>
              
              <button
                onClick={toggleIrrigation}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  irrigationStatus.isActive 
                    ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                    : 'bg-green-100 text-green-700 hover:bg-green-200'
                }`}
              >
                {irrigationStatus.isActive ? 'Stop' : 'Start'}
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 p-3 rounded-md">
                <p className="text-sm text-gray-600">Next Schedule</p>
                <p className="font-semibold">{irrigationStatus.nextSchedule}</p>
              </div>
              
              <div className="bg-blue-50 p-3 rounded-md">
                <p className="text-sm text-gray-600">Water Usage</p>
                <p className="font-semibold">{irrigationStatus.waterUsage} gal</p>
              </div>
              
              <div className="bg-blue-50 p-3 rounded-md">
                <p className="text-sm text-gray-600">Efficiency</p>
                <p className="font-semibold">{irrigationStatus.efficiency}%</p>
              </div>
              
              <div className="bg-blue-50 p-3 rounded-md">
                <p className="text-sm text-gray-600">Soil Moisture</p>
                <p className="font-semibold">{soilData.moisture.toFixed(1)}%</p>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-md">
              <h3 className="font-semibold mb-2">Smart Recommendation</h3>
              <p className="text-sm text-gray-700">
                {soilData.moisture < 35 
                  ? "Soil moisture is low. Consider starting irrigation." 
                  : soilData.moisture > 65 
                    ? "Soil moisture is high. No irrigation needed at this time."
                    : "Soil moisture is optimal. Follow regular irrigation schedule."}
              </p>
            </div>
          </div>
          
          {/* Crop Health */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-6 flex items-center">
              <BarChart3 className="h-5 w-5 mr-2 text-green-700" />
              Crop Health Monitoring
            </h2>
            
            <div className="space-y-4">
              {cropHealth.map(crop => (
                <div key={crop.id} className="border rounded-md p-3">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold">{crop.name}</h3>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium flex items-center ${
                      crop.status === 'Healthy' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {crop.status === 'Healthy' 
                        ? <CheckCircle2 className="h-3 w-3 mr-1" /> 
                        : <AlertTriangle className="h-3 w-3 mr-1" />}
                      {crop.status}
                    </div>
                  </div>
                  
                  {crop.alert && (
                    <div className="mt-2 text-sm text-yellow-700 bg-yellow-50 p-2 rounded">
                      <AlertTriangle className="h-4 w-4 inline mr-1" />
                      {crop.alert}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-6">
              <button className="w-full bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-800 transition-colors">
                View Detailed Analysis
              </button>
            </div>
          </div>
        </div>
        
        {/* Weather Forecast */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-6">7-Day Weather Forecast</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
              <div key={index} className="bg-blue-50 p-4 rounded-md text-center">
                <p className="font-semibold mb-2">{day}</p>
                <CloudRain className={`h-8 w-8 mx-auto mb-2 ${index === 2 || index === 5 ? 'text-blue-700' : 'text-yellow-500'}`} />
                <p className="text-sm font-medium">
                  {index === 2 || index === 5 ? 'Rain' : 'Sunny'}
                </p>
                <p className="text-xs text-gray-600">
                  {Math.floor(24 + Math.random() * 8)}°C / {Math.floor(15 + Math.random() * 5)}°C
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Recommendations */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-6">AI Recommendations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold mb-2">Crop Management</h3>
              <p className="text-gray-600 text-sm">
                Based on soil analysis, consider planting wheat or barley in the north field for optimal yield.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-2">Water Conservation</h3>
              <p className="text-gray-600 text-sm">
                Adjust irrigation schedule to early morning to reduce evaporation and save up to 20% water.
              </p>
            </div>
            
            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="font-semibold mb-2">Pest Prevention</h3>
              <p className="text-gray-600 text-sm">
                Weather conditions indicate increased risk of aphids. Consider preventive measures within the next 3 days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;