import { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { motion, AnimatePresence } from 'motion/react'
import { toast } from 'react-toastify'


const styles = ["Realistic", "Anime", "Pixel Art", "3D", "Watercolor", "Oil Painting", "Sketch", "Digital Art"];

const Result = () => {

  const [image, setImage] = useState('')
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState('')
  const [selectedStyle, setSelectedStyle] = useState(styles[0]);

  const {generateImage} = useContext(AppContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!input.trim()) {
      toast.error('Please enter a prompt');
      return;
    }
    
    setLoading(true)
    try {
      const image = await generateImage(input, selectedStyle);
      if(image){
        setIsImageLoaded(true)
        setImage(image)
        toast.success('Image generated successfully!');
      }
    } catch {
      toast.error('Failed to generate image');
    } finally {
      setLoading(false);
    }
  }

  const handleNewGeneration = () => {
    setIsImageLoaded(false);
    setImage('');
    setInput('');
  }

  return (
    <motion.div 
      className='min-h-screen flex flex-col justify-center items-center px-4'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-12">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Create <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">AI Art</span>
        </motion.h1>
        <motion.p 
          className="text-gray-300 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Describe your vision and watch AI bring it to life
        </motion.p>
      </div>

      <form onSubmit={onSubmitHandler} className='flex flex-col justify-center items-center w-full max-w-4xl'>

        {/* Style Selection */}
        {!isImageLoaded && (
          <motion.div 
            className="mb-8 w-full max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <label className="block text-white text-lg font-semibold mb-4 text-center">Choose Your Art Style</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {styles.map((style, index) => (
                <motion.button
                  key={index}
                  type="button"
                  onClick={() => setSelectedStyle(style)}
                  className={`p-3 rounded-lg border-2 transition-all duration-300 font-medium ${
                    selectedStyle === style
                      ? 'border-orange-400 bg-orange-400/20 text-orange-400'
                      : 'border-white/20 bg-white/5 text-white/80 hover:border-white/40 hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {style}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Image Display Area */}
        <motion.div 
          className="relative mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className='relative'>
            <AnimatePresence mode="wait">
              {!isImageLoaded ? (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative"
                >
                  <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl flex items-center justify-center border border-white/10">
                    {loading ? (
                      <div className="text-center">
                        <div className="animate-spin w-12 h-12 border-4 border-orange-400 border-t-transparent rounded-full mb-4 mx-auto"></div>
                        <p className="text-white text-lg">Creating your masterpiece...</p>
                        <p className="text-gray-400 text-sm mt-2">This may take a few moments</p>
                      </div>
                    ) : (
                      <div className="text-center">
                        <i className="ri-image-add-line text-6xl text-gray-400 mb-4"></i>
                        <p className="text-gray-400 text-lg">Your AI artwork will appear here</p>
                      </div>
                    )}
                  </div>
                  {loading && (
                    <motion.div 
                      className="absolute bottom-0 left-0 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 8, ease: "easeInOut" }}
                    />
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="image"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="relative group"
                >
                  <img 
                    src={image} 
                    alt="Generated artwork" 
                    className='w-80 h-80 md:w-96 md:h-96 object-cover rounded-2xl shadow-2xl border border-white/20' 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm font-medium truncate">Style: {selectedStyle}</p>
                      <p className="text-gray-300 text-xs truncate">{input}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Input Section */}
        {!isImageLoaded && (
          <motion.div 
            className='w-full max-w-2xl'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <div className='flex bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-2 shadow-lg'>
              <input 
                onChange={e=>setInput(e.target.value)} 
                value={input} 
                type="text" 
                placeholder='Describe the image you want to create...' 
                className='flex-1 bg-transparent outline-none text-white placeholder-gray-400 px-6 py-4 text-lg'
                disabled={loading}
              />
              <motion.button
                type='submit'
                disabled={loading || !input.trim()}
                className='bg-gradient-to-r from-orange-400 to-red-400 text-white px-8 py-4 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all duration-300'
                whileHover={!loading && input.trim() ? { scale: 1.05 } : {}}
                whileTap={!loading && input.trim() ? { scale: 0.95 } : {}}
              >
                {loading ? (
                  <i className="ri-loader-4-line animate-spin text-xl"></i>
                ) : (
                  <i className="ri-magic-line text-xl"></i>
                )}
              </motion.button>
            </div>
            
            <p className="text-gray-400 text-sm text-center mt-4">
              💡 Tip: Be specific about colors, style, mood, and details for better results
            </p>
          </motion.div>
        )}

        {/* Action Buttons */}
        {isImageLoaded && (
          <motion.div 
            className='flex gap-4 flex-wrap justify-center mt-8'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.button
              onClick={handleNewGeneration}
              className='bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-2'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="ri-refresh-line"></i>
              Generate Another
            </motion.button>
            
            <motion.a 
              href={image} 
              download={`ai-artwork-${Date.now()}.png`}
              className='bg-gradient-to-r from-orange-400 to-red-400 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="ri-download-line"></i>
              Download HD
            </motion.a>

            <motion.button
              onClick={() => {
                navigator.clipboard.writeText(input);
                toast.success('Prompt copied to clipboard!');
              }}
              className='bg-zinc-800/80 backdrop-blur-sm border border-zinc-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-zinc-700/80 transition-all duration-300 flex items-center gap-2'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="ri-clipboard-line"></i>
              Copy Prompt
            </motion.button>
          </motion.div>
        )}
      </form>

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-10 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-80 h-80 bg-red-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  )
}

export default Result
