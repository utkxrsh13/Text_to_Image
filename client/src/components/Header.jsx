// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import { motion } from "motion/react"
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const {user,setShowLogin} = useContext(AppContext)
  const navigate = useNavigate();

  const onClickHandler=()=>{
    if(user){
      navigate('/result')
    }else{
      setShowLogin(true)
    }
  }

  return (
    <motion.div className='flex flex-col justify-center items-center text-center my-20'
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}>

      <motion.div
      initial={{opacity:0.2, y:-20}}
      transition={{delay:0.2,duration:0.5}}
      animate={{opacity:1,y:0}}
      className='inline-flex text-center gap-2 px-6 py-2 border border-orange-400/30 rounded-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm'>
        <p className="text-white font-medium">✨ Best AI Text-to-Image Generator</p>
        <i className="ri-sparkling-2-line text-orange-400"></i>
      </motion.div>

      <motion.h1
      initial={{opacity:0.2, y:-20}}
      transition={{delay:0.4,duration:0.8}}
      animate={{opacity:1,y:0}}
      className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent mx-auto mt-10 text-center font-bold'>
        Transform Text into <br />
        <span className='bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent'>
          Stunning Art
        </span>
      </motion.h1>

      <motion.p
      initial={{opacity:0, y:20}}
      transition={{delay:0.6,duration:0.8}}
      animate={{opacity:1,y:0}}
      className='text-center max-w-2xl mx-auto mt-6 text-gray-300 text-lg leading-relaxed'>
        Unleash your creativity with cutting-edge AI technology. Transform your wildest imagination into breathtaking visual masterpieces in seconds - just describe, and watch the magic unfold.
      </motion.p>

      <motion.div
        initial={{opacity:0, y:20}}
        transition={{delay:0.8,duration:0.8}}
        animate={{opacity:1,y:0}}
        className="flex flex-col sm:flex-row gap-4 mt-10"
      >
        <motion.button
        onClick={onClickHandler}
        whileHover={{scale:1.05, boxShadow: "0 20px 40px rgba(245, 132, 0, 0.4)"}}
        whileTap={{scale:0.95}}
        className='relative overflow-hidden bg-gradient-to-r from-orange-400 to-red-400 text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl group'>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span className="relative flex items-center gap-2">
            <i className="ri-magic-line"></i>
            Create AI Art Now
          </span>
        </motion.button>

        {user && (
          <motion.button
          onClick={() => navigate('/history')}
          whileHover={{scale:1.05}}
          whileTap={{scale:0.95}}
          className='bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold py-4 px-8 rounded-full text-lg hover:bg-white/20 transition-all duration-300'>
            <span className="flex items-center gap-2">
              <i className="ri-history-line"></i>
              View History
            </span>
          </motion.button>
        )}
      </motion.div>

      {/* Floating elements for AI feel */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-2 h-2 bg-orange-400 rounded-full opacity-60"
          animate={{
            y: [0, -20, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 0,
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-1 h-1 bg-red-400 rounded-full opacity-80"
          animate={{
            y: [0, -15, 0],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-70"
          animate={{
            y: [0, -25, 0],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 2,
          }}
        />
      </div>

    </motion.div>
  )
}

export default Header