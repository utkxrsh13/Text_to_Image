import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center my20'>

      <div className='inline-flex text-center gap-2 px-6 py-1 border-neutral-400 rounded-full bg-white'>
        <p>Best text to image generator</p>
        <i class="ri-sparkling-2-line"></i>
      </div>

      <h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'>Turn text to <span className='text-red-400'>image</span>, in seconds</h1>
      <p className='text-center max-w-xl mx-auto mt-5'>Unleash your creativity with AI. Turn your imagination into visual art in seconds - just type, and watch the magic happen.</p>

      <button className='mt-10 sm:text-lg text-white bg-black w-auto py-2 px-10 items-center gap-2 rounded-full border'>Generate images</button>

    </div>
  )
}

export default Header