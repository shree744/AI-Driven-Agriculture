import React, { useState, useRef } from 'react';
import { Upload, X, Check, AlertTriangle, Info } from 'lucide-react';

const PlantHealthPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<{
    status: 'healthy' | 'diseased' | null;
    disease?: string;
    confidence?: number;
    treatment?: string;
  } | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target && typeof e.target.result === 'string') {
        setSelectedImage(e.target.result);
        setResult(null);
      }
    };
    reader.readAsDataURL(file);
  };

  const analyzeImage = () => {
    if (!selectedImage) return;
    
    setAnalyzing(true);
    
    // Simulate API call to ML model for plant disease detection
    setTimeout(() => {
      // Mock analysis results
      const diseases = [
        {
          name: 'Healthy',
          status: 'healthy',
          confidence: 95,
          treatment: 'No treatment needed. Continue regular care.'
        },
        {
          name: 'Powdery Mildew',
          status: 'diseased',
          confidence: 87,
          treatment: 'Apply fungicide specifically designed for powdery mildew. Improve air circulation around plants and avoid overhead watering.'
        },
        {
          name: 'Leaf Spot',
          status: 'diseased',
          confidence: 92,
          treatment: 'Remove and destroy infected leaves. Apply copper-based fungicide and ensure proper spacing between plants for better air circulation.'
        },
        {
          name: 'Aphid Infestation',
          status: 'diseased',
          confidence: 78,
          treatment: 'Spray plants with insecticidal soap or neem oil. Introduce beneficial insects like ladybugs to control aphid population.'
        }
      ];
      
      // Randomly select a result (in a real app, this would be the ML model's output)
      const randomIndex = Math.floor(Math.random() * diseases.length);
      const diagnosis = diseases[randomIndex];
      
      setResult({
        status: diagnosis.status as 'healthy' | 'diseased',
        disease: diagnosis.name,
        confidence: diagnosis.confidence,
        treatment: diagnosis.treatment
      });
      
      setAnalyzing(false);
    }, 2000);
  };

  const resetAnalysis = () => {
    setSelectedImage(null);
    setResult(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Plant Health Monitoring</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Upload images of your plants to detect diseases and get treatment recommendations using our advanced computer vision technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Upload Plant Image</h2>
            
            {!selectedImage ? (
              <div 
                className={`border-2 border-dashed rounded-lg p-8 text-center ${
                  dragActive ? 'border-green-500 bg-green-50' : 'border-gray-300'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <p className="text-gray-600 mb-4">
                  Drag and drop your plant image here, or click to select a file
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  className="hidden"
                  onChange={handleChange}
                  accept="image/*"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-800 transition-colors"
                >
                  Select Image
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="relative">
                  <img 
                    src={selectedImage} 
                    alt="Selected plant" 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <button
                    onClick={resetAnalysis}
                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                
                <button
                  onClick={analyzeImage}
                  className="w-full bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-800 transition-colors flex items-center justify-center"
                  disabled={analyzing}
                >
                  {analyzing ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Analyzing Image...
                    </>
                  ) : (
                    'Analyze Plant Health'
                  )}
                </button>
              </div>
            )}
          </div>
          
          <div>
            {result ? (
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Analysis Results</h2>
                
                <div className={`p-4 rounded-md mb-4 ${
                  result.status === 'healthy' ? 'bg-green-50' : 'bg-yellow-50'
                }`}>
                  <div className="flex items-center">
                    {result.status === 'healthy' ? (
                      <Check className="h-6 w-6 text-green-500 mr-2" />
                    ) : (
                      <AlertTriangle className="h-6 w-6 text-yellow-500 mr-2" />
                    )}
                    <h3 className="font-semibold">
                      {result.disease}
                    </h3>
                    <span className="ml-auto bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {result.confidence}% confidence
                    </span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h3 className="font-semibold mb-2">Diagnosis:</h3>
                  <p className="text-gray-700">
                    {result.status === 'healthy' 
                      ? 'Your plant appears to be healthy with no visible signs of disease or pest infestation.' 
                      : `Your plant shows symptoms of ${result.disease}.`}
                  </p>
                </div>
                
                <div className="mb-4">
                  <h3 className="font-semibold mb-2">Recommended Action:</h3>
                  <p className="text-gray-700">{result.treatment}</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-md flex">
                  <Info className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-blue-700">
                    For more detailed information and personalized advice, consider consulting with a local agricultural extension service or plant pathologist.
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col justify-center items-center">
                <img 
                  src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" 
                  alt="Plant health monitoring" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Plant Health Analysis</h3>
                <p className="text-gray-600 text-center">
                  Upload an image of your plant to get an instant health assessment and treatment recommendations if needed.
                </p>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-6">Common Plant Diseases</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1598512752271-33f913a5af13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" 
                alt="Powdery Mildew" 
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2">Powdery Mildew</h3>
                <p className="text-gray-600 text-sm">
                  A fungal disease that appears as white powdery spots on leaves and stems. Common in humid conditions with poor air circulation.
                </p>
              </div>
            </div>
            
            <div className="border rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1624768938441-5e2f394b2f8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Leaf Spot" 
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2">Leaf Spot</h3>
                <p className="text-gray-600 text-sm">
                  Caused by various fungi and bacteria, resulting in dark spots on leaves. Can lead to leaf drop and reduced plant vigor.
                </p>
              </div>
            </div>
            
            <div className="border rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1635188557504-7495d74abb8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80" 
                alt="Aphid Infestation" 
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2">Aphid Infestation</h3>
                <p className="text-gray-600 text-sm">
                  Small sap-sucking insects that cluster on new growth and undersides of leaves. Can cause stunted growth and transmit plant viruses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantHealthPage;