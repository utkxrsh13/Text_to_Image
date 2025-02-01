import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'


const Result = () => {

  const [image, setImage] = useState(null)
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState('')

  const {generateImage} = useContext(AppContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true)
    if(input){
      const image = await generateImage(input);
      if(image){
        setIsImageLoaded(true)
        setImage(image)
      }
    }
    setLoading(false);
  }

  return (
    <form onSubmit={onSubmitHandler} action="" className=' flex flex-col justify-center items-center'>

      <div>
        <div className='relative'>
          <img src="https://imgs.search.brave.com/WZLWFwzoq3AHJWUezByQApqxWqfiQS2migg0nEn66Dg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVtYW5kc2FnZS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMTIvY3JhaXlv/bi1BSS1JbWFnZS1H/ZW5lcmF0b3ItLnBu/Zw" alt="" className='max-w-xs rounded ' />
          <span className={`absolute h-1 bottom-0 left-0 bg-blue-200 ${loading? 'w-full transition-all duration-[10s]': 'w-0'}`}></span>
        </div>
        <p className={!loading ? "hidden": ""}>Loading...</p>
      </div>

      {!isImageLoaded &&
        <div className='flex bg-neutral-700 w-full max-w-xl mt-7 text-white rounded-full'>
          <input onChange={e=>setInput(e.target.value)} value={input} type="text" placeholder='What do you want to generate' className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20' />
          <button type='submit' className='bg-zinc-900 px-10 sm:px-16 py-3 rounded-full'>Generate</button>
        </div>
      }

      {isImageLoaded &&
        <div className='flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full'>
          <p onClick={()=>{setIsImageLoaded(false)}} className='bg-transparent border-zinc-900 border-2 px-8 py-3 rounded-full cursor-pointer'>Generate Another</p>
          <a href={image} download className='bg-zinc-900 px-10 py-3 rounded-full cursor-pointer'>Download <i class="ri-download-line"></i></a>
        </div>
      }
    </form>

  )
}

export default Result
