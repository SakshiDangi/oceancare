import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Waves, LogIn, Mail, Lock } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

const Login = ({ onLogin }: LoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-cyan-50 to-blue-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 right-0 h-64 opacity-20"
          initial={{ y: -100 }}
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        >
          <Waves className="w-full h-full text-emerald-200" />
        </motion.div>
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-64 opacity-20"
          initial={{ y: 100 }}
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        >
          <Waves className="w-full h-full text-blue-200" />
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 w-full max-w-md shadow-xl relative z-10"
      >
        <motion.div 
          className="flex items-center justify-center mb-8"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gradient-to-br from-emerald-400 to-blue-500 p-4 rounded-full">
            <LogIn className="w-8 h-8 text-white" />
          </div>
        </motion.div>

        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Welcome Back</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <div className="relative">
              <Mail className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${
                focusedField === 'email' ? 'text-orange-400' : 'text-gray-400'
              }`} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400/50 transition-all duration-200"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          
          <div>
            <div className="relative">
              <Lock className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${
                focusedField === 'password' ? 'text-orange-400' : 'text-gray-400'
              }`} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setFocusedField('password')}
                onBlur={() => setFocusedField(null)}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400/50 transition-all duration-200"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: 'rgb(251 146 60)' }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 px-4 bg-orange-500 text-white rounded-lg font-medium transition-colors duration-200 shadow-lg shadow-orange-500/30"
            type="submit"
          >
            Sign In
          </motion.button>
        </form>
        
        <motion.p 
          className="mt-6 text-center text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Don't have an account?{' '}
          <Link to="/signup" className="font-medium text-orange-500 hover:text-orange-400 transition-colors">
            Sign up
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Login;