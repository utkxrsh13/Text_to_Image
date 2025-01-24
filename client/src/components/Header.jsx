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
    <motion.div className='flex flex-col justify-center items-center text-center my20'
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:1}}
    viewport={{once:true}}>

      <motion.div
      initial={{opacity:0.2, y:-20}}
      transition={{delay:0.2,duration:0.5}}
      animate={{opacity:1,y:0}}
      className='inline-flex text-center gap-2 px-6 py-1 border-neutral-400 rounded-full bg-white'>
        <p>Best text to image generator</p>
        <i class="ri-sparkling-2-line"></i>
      </motion.div>

      <motion.h1
      initial={{opacity:0.2, y:-20}}
      transition={{delay:0.2,duration:0.5}}
      animate={{opacity:1,y:0}}
      className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'>Turn text to <span className='text-red-400'>image</span>, in seconds</motion.h1>
      <motion.p
      initial={{opacity:0, y:20}}
      transition={{delay:0.6,duration:0.8}}
      animate={{opacity:1,y:0}}
      className='text-center max-w-xl mx-auto mt-5'>Unleash your creativity with AI. Turn your imagination into visual art in seconds - just type, and watch the magic happen.</motion.p>

      <motion.button
      onClick={onClickHandler}
      whileHover={{scale:1.05}}
      whileTap={{scale:0.95}}
      initial={{opacity:0}}
      transition={{default:{duration:0.5},opacity:{delay:0.8, duration:1}}}
      animate={{opacity:1}}
      className='mt-10 sm:text-lg text-white bg-black w-auto py-2 px-10 items-center gap-2 rounded-full border'>Generate images</motion.button>

    </motion.div>
  )
}

export default Header