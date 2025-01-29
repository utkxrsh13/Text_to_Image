import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import { AppContext } from '../context/AppContext'

const Navbar = () => {

  const {user, setShowLogin, logout, credit} = useContext(AppContext)
  
  
  const navigate = useNavigate();

  return (
    <div className='flex items-center justify-between py-4'>
      <Link to={'/'}>
        <i class="text-5xl sm:text-6xl lg:text-7xl ri-camera-ai-line"></i>
      </Link>
      <div>
        {user ?
          <div className='flex items-center gap-2 sm:gap-3'>
            <button onClick={()=> navigate('/buy')} className='flex items-center gap-2 bg-orange-300 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700'>
              <i class=" text-xl ri-sparkling-fill"></i>
              <p className='text-xs sm:text-sm font-medium text-gray-700'>Credits Left: {credit}</p>
            </button>
            <p className='text-gray-700 max-sm:hidden pl-4'>{user.name}</p>
            <div className='relative group'>
              <i class="text-2xl drop-shadow ri-user-6-fill"></i>
              <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
                <ul className='list-none m-0 p-2 bg-orange-300  rounded-md border text-sm'>
                  <li onClick={logout} className='py-1 px-2 cursor-pointer pr-10'>Logout</li>
                </ul>
              </div>
            </div>
          </div>
          :
          <div className='flex items-center gap-2 sm:gap-5'>
            <p onClick={() => {
              navigate('/buy')
            }} className='font-semibold cursor-pointer'>Pricing</p>
            <button onClick={()=>setShowLogin(true)} className='bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-lg'>Login</button>
          </div>}
      </div>
    </div>
  )
}

export default Navbar
