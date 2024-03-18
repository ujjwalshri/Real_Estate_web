import React from 'react'
import exampleImage from '../images/home.jpg';
import { motion } from 'framer-motion';
function Home() {
  return (
    <div>
    

     
    <div className="grid grid-cols-2 gap-14">
      <div className="flex items-center">
        <img className="w-full h-auto my-10 mx-10" src={exampleImage} alt="Your Image" />
      </div>
      <div className="flex items-center mb-4">
        <h1 className="text-3xl font-bold font-sans hover:text-4xl text-slate-700">WELCOME to MetroMansions</h1>
        <motion.div 
      initial={{ opacity: 0, y: -100 }} // Initial state
      animate={{ opacity: 1, y: 0 }}      // Animation state
      transition={{ duration: 1 }}       // Transition duration
    >
      <p className='text-slate-400 '>- Here you will find your dream property</p>
    </motion.div>
      </div>
    </div>
    
  </div>
  )
}

export default Home