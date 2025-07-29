// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext';
import { motion, AnimatePresence } from 'motion/react'
import axios from 'axios'
import { toast } from 'react-toastify';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [state, setState] = useState('Login');
  const [loading, setLoading] = useState(false);
  const { setShowLogin, backendUrl, setToken, setUser } = useContext(AppContext)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const toggle = () => {
    setShowPassword(!showPassword);
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (state === 'Login') {
        const { data } = await axios.post(`${backendUrl}/api/users/login`, { email, password });
        if (data.success) {
          localStorage.setItem('token', data.token);
          setToken(data.token);
          setUser(data.user);
          setShowLogin(false);
          toast.success('Welcome back!');
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(`${backendUrl}/api/users/register`, { name, email, password });
        if (data.success) {
          localStorage.setItem('token', data.token);
          setToken(data.token);
          setUser(data.user);
          setShowLogin(false);
          toast.success('Account created successfully!');
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Something went wrong')
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.div 
      className='fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex justify-center items-center p-4'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowLogin(false)}
    >
      <motion.form 
        onSubmit={onSubmitHandler} 
        className='relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl p-8 rounded-2xl text-white w-full max-w-md border border-white/10 shadow-2xl'
        initial={{ scale: 0.8, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <motion.button
          type="button"
          onClick={() => setShowLogin(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="ri-close-line text-2xl"></i>
        </motion.button>

        <div className="text-center mb-8">
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <i className="ri-robot-line text-2xl text-white"></i>
          </motion.div>
          <h1 className='text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent'>
            {state === 'Login' ? 'Welcome Back' : 'Join AI Studio'}
          </h1>
          <p className='text-gray-400 mt-2'>
            {state === 'Login' 
              ? 'Sign in to continue creating amazing AI art' 
              : 'Create your account to start generating AI images'
            }
          </p>
        </div>

        <div className="space-y-5">
          <AnimatePresence>
            {state !== 'Login' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className='relative'
              >
                <div className='bg-white/5 border border-white/10 px-4 py-3 flex items-center gap-3 rounded-xl backdrop-blur-sm focus-within:border-orange-400/50 transition-colors duration-300'>
                  <i className="ri-user-line text-orange-400"></i>
                  <input 
                    onChange={e => setName(e.target.value)} 
                    value={name} 
                    className='bg-transparent outline-none text-white placeholder-gray-400 flex-1' 
                    type="text" 
                    placeholder='Full Name' 
                    required 
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className='bg-white/5 border border-white/10 px-4 py-3 flex items-center gap-3 rounded-xl backdrop-blur-sm focus-within:border-orange-400/50 transition-colors duration-300'>
            <i className="ri-mail-line text-orange-400"></i>
            <input 
              onChange={e => setEmail(e.target.value)} 
              value={email} 
              className='bg-transparent outline-none text-white placeholder-gray-400 flex-1' 
              type="email" 
              placeholder='Email Address' 
              required 
            />
          </div>

          <div className='bg-white/5 border border-white/10 px-4 py-3 flex items-center gap-3 rounded-xl backdrop-blur-sm focus-within:border-orange-400/50 transition-colors duration-300'>
            <i className="ri-lock-line text-orange-400"></i>
            <input 
              onChange={e => setPassword(e.target.value)} 
              value={password} 
              className='bg-transparent outline-none text-white placeholder-gray-400 flex-1' 
              type={showPassword ? "text" : "password"} 
              placeholder='Password' 
              required 
            />
            <motion.button
              type="button"
              onClick={toggle}
              className="text-gray-400 hover:text-white transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {showPassword ? 
                <i className="ri-eye-off-line"></i> : 
                <i className="ri-eye-line"></i>
              }
            </motion.button>
          </div>
        </div>

        {state === 'Login' && (
          <p className='text-sm text-orange-400 hover:text-orange-300 mt-4 cursor-pointer transition-colors duration-200'>
            Forgot Password?
          </p>
        )}

        <motion.button 
          type="submit"
          disabled={loading}
          className='w-full bg-gradient-to-r from-orange-400 to-red-400 text-white font-semibold py-3 rounded-xl mt-6 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2'
          whileHover={!loading ? { scale: 1.02 } : {}}
          whileTap={!loading ? { scale: 0.98 } : {}}
        >
          {loading ? (
            <>
              <i className="ri-loader-4-line animate-spin"></i>
              {state === 'Login' ? 'Signing In...' : 'Creating Account...'}
            </>
          ) : (
            <>
              <i className={state === 'Login' ? "ri-login-box-line" : "ri-user-add-line"}></i>
              {state === 'Login' ? 'Sign In' : 'Create Account'}
            </>
          )}
        </motion.button>

        <div className="text-center mt-6">
          {state === 'Login' ? (
            <p className='text-gray-400'>
              Don&apos;t have an account?{' '}
              <span 
                className='text-orange-400 hover:text-orange-300 cursor-pointer font-semibold transition-colors duration-200' 
                onClick={() => setState("Signup")}
              >
                Sign Up
              </span>
            </p>
          ) : (
            <p className='text-gray-400'>
              Already have an account?{' '}
              <span 
                onClick={() => setState("Login")} 
                className='text-orange-400 hover:text-orange-300 cursor-pointer font-semibold transition-colors duration-200'
              >
                Sign In
              </span>
            </p>
          )}
        </div>

        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-red-400/20 to-orange-400/20 rounded-full blur-2xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.form>
    </motion.div>
  )
}

export default Login