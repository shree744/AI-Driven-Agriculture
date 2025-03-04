import React, { useState, useEffect } from 'react';
import { Droplets, Thermometer, Wind, CloudRain, Clock, ToggleLeft, ToggleRight } from 'lucide-react';

const IrrigationSystemPage = () => {
  const [systemStatus, setSystemStatus] = useState({
    isAutomatic: true,
    isActive: false,
    nextSchedule: '08:00 AM',
    soilMoisture: 42,
    waterUsage: 0,
    lastIrrigation: '2 hours ago'
  });
  
  const [sensorData, setSensorData] = useState({
    temperature: 28,
    humidity: 65,
    rainfall: 0,
    forecast: 'Sunny'
  });
  
  const [zones, setZones] = useState([
    { id: 1, name: 'Vegetable Garden', status: 'Idle', moisture: 45, lastWatered: '3 hours ago', schedule: '06:00 AM', duration: 15 },
    { id: 2, name: 'Fruit Trees', status: 'Idle', moisture: 38, lastWatered: '1 day ago', schedule: '07:00 AM', duration: 20 },
    { id: 3, name: 'Flower Beds', status: 'Idle', moisture: 50, lastWatered: '6 hours ago', schedule: '05:30 AM', duration: 10 }
  ]);
  
  // Simulate changing sensor data
  useEffect(() => {
    const interval = setInterval(() => {
      setSensorData(prev => ({
        ...prev,
        temperature: prev.temperature + (Math.random() * 0.4 - 0.2),
        humidity: Math.max(30, Math.min(90, prev.humidity + (Math.random() * 2 - 1)))
      }));
      
      setZones(prev => prev.map(zone => ({
        ...zone,
        moisture: Math.max(20, Math.min(80, zone.moisture + (Math.random() * 1 - 0.5)))
      })));
      
      setSystemStatus(prev => ({
        ...prev,
        soilMoisture: Math.max(20, Math.min(80, prev.soilMoisture + (Math.random() * 1 - 0.5)))
      }));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const toggleSystem = () => {
    setSystemStatus(prev => ({
      ...prev,
      isActive: !prev.isActive
    }));
  };
  
  const toggleMode = () => {
    setSystemStatus(prev => ({
      ...prev,
      isAutomatic: !prev.isAutomatic
    }));
  };
  
  const activateZone = (zoneId: number) => {
    setZones(prev => prev.map(zone => 
      zone.id === zoneId 
        ? { ...zone, status: zone.status === 'Active' ? 'Idle' : 'Active' } 
        : zone
    ));
    
    if (zones.find(z => z.id === zoneId)?.status !== 'Active') {
      setSystemStatus(prev => ({
        ...prev,
        waterUsage: prev.waterUsage + 5,
        isActive: true
      }));
    }
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Smart Irrigation System</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Monitor and control your irrigation system remotely. Save water with our AI-powered smart watering technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* System Status Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">System Status</h2>
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                systemStatus.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
              }`}>
                {systemStatus.isActive ? 'Active' : 'Idle'}
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Mode:</span>
                <button 
                  onClick={toggleMode}
                  className="flex items-center text-blue-600 hover:text-blue-800"
                >
                  {systemStatus.isAutomatic ? (
                    <>
                      <ToggleRight className="h-5 w-5 mr-1" />
                      Automatic
                    </>
                  ) : (
                    <>
                      <ToggleLeft className="h-5 w-5 mr-1" />
                      Manual
                    </>
                  )}
                </button>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Next Scheduled:</span>
                <span className="font-medium">{systemStatus.nextSchedule}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Soil Moisture:</span>
                <span className="font-medium">{systemStatus.soilMoisture.toFixed(1)}%</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Water Usage Today:</span>
                <span className="font-medium">{systemStatus.waterUsage} gallons</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Last Irrigation:</span>
                <span className="font-medium">{systemStatus.lastIrrigation}</span>
              </div>
            </div>
            
            <div className="mt-6">
              <button
                onClick={toggleSystem}
                className={`w-full py-2 px-4 rounded-md font-medium transition-colors ${
                  systemStatus.isActive 
                    ? 'bg-red-600 text-white hover:bg-red-700' 
                    : 'bg-green-700 text-white hover:bg-green-800'
                }`}
              >
                {systemStatus.isActive ? 'Stop Irrigation' : 'Start Irrigation'}
              </button>
            </div>
          </div>
          
          {/* Weather & Sensors Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-6">Weather & Sensors</h2>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-md flex flex-col items-center">
                <Thermometer className="h-6 w-6 text-blue-500 mb-2" />
                <span className="text-sm text-gray-600">Temperature</span>
                <span className="text-lg font-semibold">{sensorData.temperature.toFixed(1)}°C</span>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-md flex flex-col items-center">
                <Wind className="h-6 w-6 text-blue-500 mb-2" />
                <span className="text-sm text-gray-600">Humidity</span>
                <span className="text-lg font-semibold">{sensorData.humidity.toFixed(0)}%</span>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-md flex flex-col items-center">
                <CloudRain className="h-6 w-6 text-blue-500 mb-2" />
                <span className="text-sm text-gray-600">Rainfall</span>
                <span className="text-lg font-semibold">{sensorData.rainfall} mm</span>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-md flex flex-col items-center">
                <Clock className="h-6 w-6 text-blue-500 mb-2" />
                <span className="text-sm text-gray-600">Forecast</span>
                <span className="text-lg font-semibold">{sensorData.forecast}</span>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-md">
              <h3 className="font-semibold mb-2">Smart Recommendation</h3>
              <p className="text-sm text-gray-700">
                {systemStatus.soilMoisture < 35 
                  ? "Soil moisture is low. Consider increasing watering duration." 
                  : systemStatus.soilMoisture > 65 
                    ? "Soil moisture is adequate. Consider reducing watering frequency."
                    : "Soil moisture is optimal. Current watering schedule is appropriate."}
              </p>
            </div>
          </div>
          
          {/* Irrigation Zones Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-6">Irrigation Zones</h2>
            
            <div className="space-y-4">
              {zones.map(zone => (
                <div key={zone.id} className="border rounded-md p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">{zone.name}</h3>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      zone.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {zone.status}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                    <div>
                      <span className="text-gray-600">Moisture:</span>
                      <span className="ml-1 font-medium">{zone.moisture.toFixed(1)}%</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Last:</span>
                      <span className="ml-1 font-medium">{zone.lastWatered}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Schedule:</span>
                      <span className="ml-1 font-medium">{zone.schedule}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Duration:</span>
                      <span className="ml-1 font-medium">{zone.duration} min</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => activateZone(zone.id)}
                    className={`w-full py-1.5 px-3 rounded text-sm font-medium transition-colors ${
                      zone.status === 'Active' 
                        ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                        : 'bg-green-100 text-green-700 hover:bg-green-200'
                    }`}
                  >
                    {zone.status === 'Active' ? 'Stop Watering' : 'Start Watering'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Water Usage Chart */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-6">Water Usage Analytics</h2>
          
          <div className="h-64 flex items-end space-x-2">
            {[35, 42, 28, 45, 30, 25, systemStatus.waterUsage].map((value, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div 
                  className="w-full bg-blue-500 rounded-t-sm" 
                  style={{ height: `${(value / 50) * 100}%` }}
                ></div>
                <div className="text-xs text-gray-600 mt-1">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-semibold text-gray-700 mb-1">Weekly Usage</h3>
              <p className="text-2xl font-bold text-blue-600">205 gallons</p>
              <p className="text-sm text-gray-500">12% less than last week</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-semibold text-gray-700 mb-1">Monthly Average</h3>
              <p className="text-2xl font-bold text-blue-600">850 gallons</p>
              <p className="text-sm text-gray-500">Saving 200 gallons vs. traditional</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-semibold text-gray-700 mb-1">Efficiency Rating</h3>
              <p className="text-2xl font-bold text-green-600">Excellent</p>
              <p className="text-sm text-gray-500">Top 10% of similar systems</p>
            </div>
          </div>
        </div>
        
        {/* How It Works */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-6">How Smart Irrigation Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-700 font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold mb-2">Soil Monitoring</h3>
              <p className="text-gray-600 text-sm">
                Sensors continuously monitor soil moisture levels at different depths to ensure optimal water distribution.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-700 font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold mb-2">Weather Integration</h3>
              <p className="text-gray-600 text-sm">
                System connects to local weather forecasts to adjust watering schedules based on rain predictions.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-700 font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold mb-2">AI Optimization</h3>
              <p className="text-gray-600 text-sm">
                Machine learning algorithms analyze data patterns to optimize watering schedules for each zone.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-700 font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold mb-2">Remote Control</h3>
              <p className="text-gray-600 text-sm">
                Control your irrigation system from anywhere using our web interface or mobile app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IrrigationSystemPage;