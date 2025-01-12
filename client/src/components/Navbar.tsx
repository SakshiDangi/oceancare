import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Calculator, Brain, Heart, LogIn, LogOut } from 'lucide-react';

interface NavbarProps {
  isAuthenticated: boolean;
  onLogout: () => void;
}

const Navbar = ({ isAuthenticated, onLogout }: NavbarProps) => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="text-emerald-500"
              >
                <Heart className="w-6 h-6" />
              </motion.div>
              <span className="text-lg font-semibold text-emerald-600">OceanCare</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                {[
                  { path: '/profile', icon: User, label: 'Profile' },
                  { path: '/quiz', icon: Brain, label: 'Quiz' },
                  { path: '/calculator', icon: Calculator, label: 'Calculator' },
                  { path: '/volunteer', icon: Heart, label: 'Volunteer' },
                ].map(({ path, icon: Icon, label }) => (
                  <Link
                    key={path}
                    to={path}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      isActive(path)
                        ? 'bg-emerald-50 text-emerald-600'
                        : 'text-gray-600 hover:bg-emerald-50 hover:text-emerald-600'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{label}</span>
                  </Link>
                ))}
                <button
                  onClick={onLogout}
                  className="flex items-center space-x-1 px-4 py-2 rounded-md text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 transition-colors duration-200"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="flex items-center space-x-1 px-4 py-2 rounded-md text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 transition-colors duration-200"
              >
                <LogIn className="w-4 h-4" />
                <span>Sign In</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;