import React from 'react'

const Footer = () => {
  return (
    <div className='flex text-white items-center justify-between gap-4 py-3 mt-40'>
      <i class="text-4xl sm:text-4xl lg:text-4xl ri-camera-ai-line"></i>
      <p className='flex-1 border-l border-gray-400 pl-4 text-sm max-sm:hidden'>Copyright @Inspira.Pix | All rights reserved.</p>
      <div className='flex gap-2.5'>
        <i class="ri-facebook-line w-[55px]"></i>
        <i class="ri-twitter-line w-[55px]"></i>
        <i class="ri-instagram-line w-[55px]"></i>
      </div>
    </div>
  )
}

export default Footer