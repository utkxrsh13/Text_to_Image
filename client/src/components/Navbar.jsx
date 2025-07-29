import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import { AppContext } from '../context/AppContext'
import { motion } from 'motion/react'

const Navbar = () => {

  const {user, setShowLogin, logout, credit } = useContext(AppContext)
  
  
  const navigate = useNavigate();

  return (
    <motion.div 
      className='flex items-center justify-between py-4'
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Link to={'/'} className="flex items-center gap-3 group">
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <i className="text-5xl sm:text-6xl lg:text-7xl ri-camera-ai-line bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent"></i>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </motion.div>
        <div className="hidden sm:block">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            InspiraPIX
          </h2>
          <p className="text-xs text-gray-400">Text to Image</p>
        </div>
      </Link>

      <div>
        {user ?
          <div className='flex items-center gap-2 sm:gap-4'>
            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-6 mr-4">
              <Link 
                to="/result" 
                className="text-white/80 hover:text-white transition-colors duration-300 font-medium"
              >
                Generate
              </Link>
              <Link 
                to="/history" 
                className="text-white/80 hover:text-white transition-colors duration-300 font-medium flex items-center gap-1"
              >
                <i className="ri-history-line"></i>
                History
              </Link>
            </div>

            <motion.button 
              onClick={()=> navigate('/buy')} 
              className='flex items-center gap-2 bg-gradient-to-r from-orange-400 to-red-400 px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:shadow-lg transition-all duration-300 text-white font-medium'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="text-lg ri-sparkling-fill"></i>
              <p className='text-xs sm:text-sm'>Credits: {credit}</p>
            </motion.button>

            <p className='text-gray-300 max-sm:hidden pl-4'>Hi, <span className="text-white font-semibold">{user.name}</span></p>
            
            <div className='relative group'>
              <motion.div
                className="w-10 h-10 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center cursor-pointer"
                whileHover={{ scale: 1.1 }}
              >
                <i className="text-xl text-white ri-user-fill"></i>
              </motion.div>
              <div className='absolute hidden group-hover:block top-10 right-0 z-10 text-black rounded min-w-[120px]'>
                <ul className='list-none m-0 p-2 bg-white/90 backdrop-blur-sm rounded-lg border border-white/20 text-sm shadow-lg'>
                  <li className='py-2 px-3 cursor-pointer hover:bg-gray-100 rounded-md transition-colors duration-200 flex items-center gap-2'>
                    <Link to="/history" className="flex items-center gap-2 w-full">
                      <i className="ri-history-line"></i>
                      History
                    </Link>
                  </li>
                  <li onClick={logout} className='py-2 px-3 cursor-pointer hover:bg-gray-100 rounded-md transition-colors duration-200 flex items-center gap-2 text-red-600'>
                    <i className="ri-logout-box-line"></i>
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          </div>
          :
          <div className='flex items-center gap-2 sm:gap-5'>
            <motion.p 
              onClick={() => {
                navigate('/buy')
              }} 
              className='font-semibold cursor-pointer text-white/80 hover:text-white transition-colors duration-300'
              whileHover={{ scale: 1.05 }}
            >
              Pricing
            </motion.p>
            <motion.button 
              onClick={()=>setShowLogin(true)} 
              className='bg-gradient-to-r from-zinc-800 to-zinc-900 text-white px-6 py-2 sm:px-8 sm:py-3 text-sm rounded-full border border-zinc-700 hover:border-zinc-600 transition-all duration-300 font-medium'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Login
            </motion.button>
          </div>}
      </div>
    </motion.div>
  )
}

export default Navbar
