import React from 'react';
import { Link } from 'react-router-dom';
import { Plant, Droplets, Sprout, BarChart3, ArrowRight } from 'lucide-react';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-green-700 text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div 
          className="relative h-[600px] bg-cover bg-center flex items-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80')" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Smart Agriculture for a Sustainable Future</h1>
              <p className="text-xl mb-8">Empowering farmers with AI-driven solutions for crop prediction, plant health monitoring, and automated irrigation.</p>
              <div className="flex flex-wrap gap-4">
                <Link to="/crop-prediction" className="bg-white text-green-700 px-6 py-3 rounded-md font-medium hover:bg-green-100 transition-colors">
                  Get Started
                </Link>
                <Link to="/dashboard" className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-green-700 transition-colors">
                  View Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Smart Agriculture Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Leverage the power of AI and IoT to optimize your farming operations and increase yield.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Plant className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Crop Prediction</h3>
              <p className="text-gray-600 mb-4">
                Predict the most suitable crops for your soil and climate conditions using machine learning algorithms.
              </p>
              <Link to="/crop-prediction" className="text-green-700 font-medium flex items-center hover:text-green-800">
                Learn more <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Sprout className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Plant Health Monitoring</h3>
              <p className="text-gray-600 mb-4">
                Detect plant diseases early and monitor overall plant health using computer vision technology.
              </p>
              <Link to="/plant-health" className="text-green-700 font-medium flex items-center hover:text-green-800">
                Learn more <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Droplets className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Automated Irrigation</h3>
              <p className="text-gray-600 mb-4">
                Save water and optimize irrigation with our smart, automated system that responds to soil moisture and weather.
              </p>
              <Link to="/irrigation" className="text-green-700 font-medium flex items-center hover:text-green-800">
                Learn more <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Farm Analytics Dashboard</h2>
              <p className="text-lg text-gray-600 mb-6">
                Monitor all aspects of your farm in real-time with our intuitive dashboard. Track soil conditions, weather forecasts, crop health, and irrigation status all in one place.
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center">
                  <BarChart3 className="h-5 w-5 text-green-700" />
                </div>
                <div>
                  <h4 className="font-semibold">Data-Driven Decisions</h4>
                  <p className="text-gray-600">Make informed farming decisions based on real data and AI recommendations.</p>
                </div>
              </div>
              <Link to="/dashboard" className="bg-green-700 text-white px-6 py-3 rounded-md font-medium hover:bg-green-800 transition-colors inline-block">
                View Dashboard
              </Link>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Dashboard Preview" 
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Farmers Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from farmers who have transformed their agricultural practices with our smart solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1520052205864-92d242b3a76b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" 
                  alt="Farmer" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">John Doe</h4>
                  <p className="text-gray-600 text-sm">Wheat Farmer, Kansas</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The crop prediction system helped me choose the right wheat variety for my soil conditions. My yield increased by 20% in just one season!"
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1597393353415-b3730f3719fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                  alt="Farmer" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Maria Garcia</h4>
                  <p className="text-gray-600 text-sm">Vineyard Owner, California</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The plant health monitoring system detected a fungal infection early, allowing me to treat it before it spread. It saved my entire grape harvest."
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=699&q=80" 
                  alt="Farmer" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Robert Chen</h4>
                  <p className="text-gray-600 text-sm">Rice Farmer, Texas</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The automated irrigation system reduced my water usage by 30% while maintaining optimal soil moisture. It's both eco-friendly and cost-effective."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Farming?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of farmers who are already using our AI-driven solutions to increase yields and reduce costs.
          </p>
          <Link to="/crop-prediction" className="bg-white text-green-700 px-8 py-4 rounded-md font-medium text-lg hover:bg-green-100 transition-colors inline-block">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;