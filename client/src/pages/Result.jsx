import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import GenButton from '../components/GenButton';


const styles = ["Realistic", "Anime", "Pixel Art", "3D", "Watercolor"];

const Result = () => {

  const [image, setImage] = useState('')
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState('')
  const [selectedStyle, setSelectedStyle] = useState(styles[0]);

  const {generateImage} = useContext(AppContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true)
    if(input){
      const image = await generateImage(input, selectedStyle);
      if(image){
        setIsImageLoaded(true)
        setImage(image)
      }
    }
    setLoading(false);
  }

  return (
    <form onSubmit={onSubmitHandler} action="" className=' flex flex-col justify-center items-center'>

      {/* Style Selection Dropdown */}
      <div className="mb-4">
        <label className="text-white">Choose a style:</label>
        <select
          className="ml-2 p-2 rounded bg-gray-800 text-white"
          value={selectedStyle}
          onChange={(e) => setSelectedStyle(e.target.value)}
        >
          {styles.map((style, index) => (
            <option key={index} value={style}>{style}</option>
          ))}
        </select>
      </div>

      <div>
        <div className='relative'>
          {!isImageLoaded?<img src="https://imgs.search.brave.com/WZLWFwzoq3AHJWUezByQApqxWqfiQS2migg0nEn66Dg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVtYW5kc2FnZS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMTIvY3JhaXlv/bi1BSS1JbWFnZS1H/ZW5lcmF0b3ItLnBu/Zw" alt="" className='max-w-xs rounded ' />:
          <img src={image} alt="" className='max-w-xs rounded ' />
          }
          <span className={`absolute h-1 bottom-0 left-0 bg-blue-200 ${loading? 'w-full transition-all duration-[10s]': 'w-0'}`}></span>
        </div>
        <p className={!loading ? "hidden": ""}>Loading...</p>
      </div>

      {!isImageLoaded &&
        <div className='flex bg-neutral-700 w-full max-w-xl mt-7 text-white rounded-full'>
          <input onChange={e=>setInput(e.target.value)} value={input} type="text" placeholder='What do you want to generate' className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20 ' />
          <GenButton type='submit' />
        </div>
      }

      {/* Style Selection Dropdown */}
      {/* {!isImageLoaded && (
        <div className="mt-4">
          <label className="text-white">Select Style: </label>
          <select
            value={selectedStyle}
            onChange={(e) => setSelectedStyle(e.target.value)}
            className="ml-2 px-4 py-2 bg-gray-800 text-white rounded-lg"
          >
            {styles.map((style) => (
              <option key={style} value={style}>
                {style}
              </option>
            ))}
          </select>
        </div>
      )} */}

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
