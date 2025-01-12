import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Droplet, ShowerHead, Home } from 'lucide-react';

const Calculator = () => {
  const [showerMinutes, setShowerMinutes] = useState(10);
  const [dishwasherLoads, setDishwasherLoads] = useState(3);
  const [laundryLoads, setLaundryLoads] = useState(4);

  const calculateWaterUsage = () => {
    const showerWater = showerMinutes * 2.5; // 2.5 gallons per minute
    const dishwasherWater = dishwasherLoads * 6; // 6 gallons per load
    const laundryWater = laundryLoads * 30; // 30 gallons per load
    return showerWater + dishwasherWater + laundryWater;
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <Droplet className="w-6 h-6 text-blue-500 mr-2" />
            Water Usage Calculator
          </h2>
          
          <div className="space-y-6">
            <div>
              <label className="flex items-center text-gray-700 mb-2">
                <ShowerHead className="w-5 h-5 mr-2 text-blue-500" />
                Daily Shower Time (minutes)
              </label>
              <input
                type="number"
                value={showerMinutes}
                onChange={(e) => setShowerMinutes(Number(e.target.value))}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="flex items-center text-gray-700 mb-2">
                <Home className="w-5 h-5 mr-2 text-blue-500" />
                Weekly Dishwasher Loads
              </label>
              <input
                type="number"
                value={dishwasherLoads}
                onChange={(e) => setDishwasherLoads(Number(e.target.value))}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="flex items-center text-gray-700 mb-2">
                <Home className="w-5 h-5 mr-2 text-blue-500" />
                Weekly Laundry Loads
              </label>
              <input
                type="number"
                value={laundryLoads}
                onChange={(e) => setLaundryLoads(Number(e.target.value))}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Your Water Usage</h3>
            <p className="text-3xl font-bold text-blue-600">
              {calculateWaterUsage()} gallons
              <span className="text-sm font-normal text-gray-600 ml-2">per week</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Calculator;