import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, MapPin, Calendar } from 'lucide-react';

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div className="bg-gradient-to-r from-emerald-400 to-cyan-500 h-32"></div>
          <div className="px-6 py-4 relative">
            <div className="absolute -top-16 left-6">
              <div className="bg-white p-2 rounded-full">
                <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center">
                  <User className="w-12 h-12 text-emerald-600" />
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-800">John Doe</h2>
              <div className="mt-4 space-y-3">
                <div className="flex items-center text-gray-600">
                  <Mail className="w-5 h-5 mr-2" />
                  <span>john.doe@example.com</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>Joined March 2024</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Profile;