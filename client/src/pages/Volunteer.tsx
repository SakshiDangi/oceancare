import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Heart } from 'lucide-react';

const events = [
  {
    title: "Beach Cleanup Drive",
    date: "March 15, 2024",
    location: "Santa Monica Beach",
    participants: 45,
    image: "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&q=80&w=800&h=400"
  },
  {
    title: "Marine Life Education",
    date: "March 22, 2024",
    location: "Local Aquarium",
    participants: 30,
    image: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&q=80&w=800&h=400"
  },
  {
    title: "Coral Reef Conservation",
    date: "April 5, 2024",
    location: "Marine Research Center",
    participants: 25,
    image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&q=80&w=800&h=400"
  }
];

const Volunteer = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {events.map((event, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{event.title}</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{event.participants} volunteers</span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-6 w-full flex items-center justify-center space-x-2 px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition-colors duration-200"
                >
                  <Heart className="w-4 h-4" />
                  <span>Join Event</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Volunteer;