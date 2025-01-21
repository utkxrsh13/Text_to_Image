import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import BuyCredit from './pages/BuyCredit'
import Result from './pages/Result'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
// #F58400
const App = () => {
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b to-black from-[#d57f2e]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/buy' element={<BuyCredit />} />
        <Route path='/result' element={<Result />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App

