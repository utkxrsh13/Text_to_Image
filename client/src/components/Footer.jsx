import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <motion.footer 
      className='mt-20 border-t border-white/10 pt-8 pb-6'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
        {/* Logo and Brand */}
        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <i className="text-4xl ri-camera-ai-line bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent"></i>
          </motion.div>
          <div>
            <h3 className="text-xl font-bold text-white">InspiraPIX</h3>
            <p className="text-xs text-gray-400">Text to Image Generator</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex-1 text-center md:text-left">
          <p className='text-gray-400 text-sm'>
            © 2025 InspiraPIX⭐. All rights reserved. | Powered by cutting-edge AI technology
          </p>
        </div>

        {/* Social Links */}
        <div className='flex items-center gap-4'>
          <motion.a
            href="#"
            className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-orange-400 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="ri-facebook-line"></i>
          </motion.a>
          <motion.a
            href="#"
            className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-orange-400 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="ri-twitter-line"></i>
          </motion.a>
          <motion.a
            href="#"
            className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-orange-400 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="ri-instagram-line"></i>
          </motion.a>
          <motion.a
            href="#"
            className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-orange-400 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="ri-github-line"></i>
          </motion.a>
        </div>
      </div>

      {/* Quick Links */}
      <div className="mt-6 pt-6 border-t border-white/10">
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-300">
            Home
          </Link>
          <Link to="/result" className="text-gray-400 hover:text-white transition-colors duration-300">
            Generate
          </Link>
          <Link to="/history" className="text-gray-400 hover:text-white transition-colors duration-300">
            History
          </Link>
          <Link to="/buy" className="text-gray-400 hover:text-white transition-colors duration-300">
            Pricing
          </Link>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            Terms of Service
          </a>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer