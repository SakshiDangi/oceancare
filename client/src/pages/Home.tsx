import React from 'react';
import { motion } from 'framer-motion';
import { Waves, Droplet, Heart, Users } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 pt-20">
        <div className="py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Protect Our Oceans
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Join our community in preserving marine life and reducing water waste.
              Every drop counts in making our oceans healthier.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Droplet className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Water Calculator</h3>
              <p className="text-gray-600">
                Track your water usage and learn how to reduce your consumption.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Volunteer</h3>
              <p className="text-gray-600">
                Join local events and make a direct impact on ocean conservation.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">
                Connect with like-minded individuals passionate about ocean conservation.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-20 text-center"
          >
            <img
              src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&q=80&w=1920&h=600"
              alt="Ocean waves"
              className="w-full h-[300px] object-cover rounded-xl shadow-lg mb-8"
            />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our oceans are vital to life on Earth. They regulate our climate, provide food
              for billions, and are home to countless species. Together, we can ensure
              they remain healthy for generations to come.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;