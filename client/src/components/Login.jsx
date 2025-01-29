import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext';
import axios from 'axios'
import { toast } from 'react-toastify';


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [state, setState] = useState('Login');
  const { setShowLogin, backendUrl, setToken, setUser } = useContext(AppContext)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const toggle = () => {
    setShowPassword((prev) => !prev);
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      if (state === 'Login') {
        const { data } = await axios.post(`${backendUrl}/api/users/login`, { email, password });
        if (data.success) {
          console.log('Token:', data.token);
          localStorage.setItem('token', data.token);
          setToken(data.token);
          setUser(data.user);
          setShowLogin(false);
          toast.success('Login successful!');
        } else {
          toast.error(data.message);
        }
      }else{
        const { data } = await axios.post(`${backendUrl}/api/users/register`, { name, email, password });
        if (data.success) {
          localStorage.setItem('token', data.token);
          setToken(data.token);
          setUser(data.user);
          setShowLogin(false);
          toast.success('Registration successful!');
        } else {
          toast.error(data.message);
        }
      }

    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className='absolute top-0 left-0 right-0 bottom-0 backdrop-blur-sm z-10 bg-black/20 flex justify-center items-center'>
      <form onSubmit={onSubmitHandler} className='relative bg-white p-10 rounded-xl text-slate-500' action="">
        <i onClick={() => setShowLogin(false)} className="ri-close-line top-5 cursor-pointer right-5 absolute"></i>
        <h1 className='text-center text-2xl text-neutral-700 font-medium'>{state}</h1>
        <p className='text-sm'>Welcome back! Please sign in to continue</p>

        {state !== 'Login' && <div className='border-2 px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
          <i class="ri-user-3-line"></i>
          <input onChange={e => setName(e.target.value)} value={name} className='outline-none text-sm' type="text" placeholder='Fullname' required />
        </div>}

        <div className='border-2 px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
          <i class="ri-mail-line"></i>
          <input onChange={e => setEmail(e.target.value)} value={email} className='outline-none text-sm' type="email" placeholder='Email' required />
        </div>

        <div className='border-2 px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
          <i class="ri-lock-password-line"></i>
          <input onChange={e => setPassword(e.target.value)} value={password} className='outline-none text-sm' type={showPassword ? "text" : "password"} placeholder='Password' required />
          {showPassword ? <i onClick={toggle} class="ri-toggle-fill"></i> : <i onClick={toggle} class="ri-toggle-line"></i>}
        </div>

        <p className='text-sm text-blue-300 my-4 cursor-pointer'>Forgot Password</p>
        <button className='bg-blue-500 w-full text-white py-2 rounded-full'>{state === 'Login' ? 'login' : 'create account'}</button>

        {state === 'Login' ? <p className='mt-5 text-center'>Don't have an account? <span className='text-blue-500 cursor-pointer' onClick={() => setState("Signup")}>Sign up</span></p>
          :
          <p className='mt-5 text-center'>Already have an account? <span onClick={() => setState("Login")} className='text-blue-500 cursor-pointer'>Login</span></p>}


      </form>

    </div>
  )
}

export default Login