import React, { useContext, useEffect, useState, useCallback } from 'react'
import { AppContext } from '../context/AppContext'
import { motion } from 'motion/react'
import { toast } from 'react-toastify'

const History = () => {
  const { user, getUserHistory } = useContext(AppContext)
  const [history, setHistory] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState(null)

  const fetchHistory = useCallback(async () => {
    try {
      setLoading(true)
      const historyData = await getUserHistory()
      setHistory(historyData)
    } catch (error) {
      console.error('Error fetching history:', error)
      toast.error('Failed to fetch history')
    } finally {
      setLoading(false)
    }
  }, [getUserHistory])

  useEffect(() => {
    if (user) {
      fetchHistory()
    }
  }, [user, fetchHistory])

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <p className="text-white text-xl">Please login to view your history</p>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
        <p className="text-white ml-4">Loading your history...</p>
      </div>
    )
  }

  return (
    <motion.div 
      className="max-w-7xl mx-auto px-4 py-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Your <span className="text-orange-400">Creation</span> History
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Explore all the amazing images you&apos;ve generated with AI
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto mt-4 rounded-full"></div>
      </div>

      {history.length === 0 ? (
        <motion.div 
          className="text-center py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <i className="ri-image-line text-6xl text-gray-400 mb-4"></i>
          <h3 className="text-2xl text-white mb-4">No Images Generated Yet</h3>
          <p className="text-gray-400 mb-8">Start creating amazing AI images to see them here!</p>
          <motion.button
            onClick={() => window.location.href = '/result'}
            className="bg-gradient-to-r from-orange-400 to-red-400 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Generate Your First Image
          </motion.button>
        </motion.div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {history.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-300 cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedImage(item)}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.prompt}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                      {item.style || 'Default'}
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <p className="text-white font-medium mb-2 line-clamp-2">
                    {item.prompt}
                  </p>
                  <div className="flex items-center justify-between text-gray-400 text-sm">
                    <span>{formatDate(item.createdAt)}</span>
                    <i className="ri-external-link-line group-hover:text-white transition-colors"></i>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 text-lg">
              Total Images Generated: <span className="text-white font-semibold">{history.length}</span>
            </p>
          </div>
        </>
      )}

      {/* Modal for selected image */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="bg-white/10 backdrop-blur-md rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Image Details</h3>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="text-white hover:text-gray-300 text-2xl"
                >
                  <i className="ri-close-line"></i>
                </button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <img
                    src={selectedImage.imageUrl}
                    alt={selectedImage.prompt}
                    className="w-full rounded-xl"
                  />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-orange-400 font-semibold mb-2">Prompt</h4>
                    <p className="text-white bg-white/10 p-3 rounded-lg">{selectedImage.prompt}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-orange-400 font-semibold mb-2">Style</h4>
                    <p className="text-white bg-white/10 p-3 rounded-lg">{selectedImage.style || 'Default'}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-orange-400 font-semibold mb-2">Created</h4>
                    <p className="text-white bg-white/10 p-3 rounded-lg">{formatDate(selectedImage.createdAt)}</p>
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <a
                      href={selectedImage.imageUrl}
                      download={`ai-generated-${Date.now()}.png`}
                      className="flex-1 bg-gradient-to-r from-orange-400 to-red-400 text-white py-3 px-6 rounded-full text-center font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      <i className="ri-download-line mr-2"></i>
                      Download
                    </a>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(selectedImage.prompt)
                        toast.success('Prompt copied to clipboard!')
                      }}
                      className="flex-1 bg-white/20 text-white py-3 px-6 rounded-full font-semibold hover:bg-white/30 transition-all duration-300"
                    >
                      <i className="ri-clipboard-line mr-2"></i>
                      Copy Prompt
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  )
}

export default History
