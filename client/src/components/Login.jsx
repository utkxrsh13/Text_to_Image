import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [state, setState] = useState('Login');
  const {setShowLogin} = useContext(AppContext)

  const toggle = () => {
    setShowPassword((prev) => !prev);
  }
  return (
    <div className='absolute top-0 left-0 right-0 bottom-0 backdrop-blur-sm z-10 bg-black/20 flex justify-center items-center'>
      <form className='relative bg-white p-10 rounded-xl text-slate-500' action="">
        <i onClick={()=>setShowLogin(false)} className="ri-close-line top-5 cursor-pointer right-5 absolute"></i>
        <h1 className='text-center text-2xl text-neutral-700 font-medium'>{state}</h1>
        <p className='text-sm'>Welcome back! Please sign in to continue</p>

        {state !== 'Login' && <div className='border-2 px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
          <i class="ri-user-3-line"></i>
          <input className='outline-none text-sm' type="text" placeholder='Fullname' required />
        </div>}

        <div className='border-2 px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
          <i class="ri-mail-line"></i>
          <input className='outline-none text-sm' type="email" placeholder='Email' required />
        </div>

        <div className='border-2 px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
          <i class="ri-lock-password-line"></i>
          <input className='outline-none text-sm' type={showPassword ? "text" : "password"} placeholder='Password' required />
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