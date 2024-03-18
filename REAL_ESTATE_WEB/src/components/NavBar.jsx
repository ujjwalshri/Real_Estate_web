import React from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold">REAL_STATE_DUNIA</div>
        <ul className="flex space-x-4">
          <li><NavLink to='/' className="text-white hover:text-gray-400">Home</NavLink></li>
          <li><NavLink to='/about' className="text-white hover:text-gray-400">About</NavLink></li>
          <li><NavLink to='/Services' className="text-white hover:text-gray-400">Services</NavLink></li>
          <li><NavLink to='/contact' className="text-white hover:text-gray-400">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
    </>
  )
  }

export default NavBar