import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div className='bg-gray-800'>
      <div className='text-white text-center p-6'>
        <p>
          Copyright © 2024
          Real Estate Dunia <br />
          All Rights Reserved
        </p>
      </div>

      <div className='flex justify-center text-lg'>
        <ul className='flex flex-wrap justify-center space-x-4 p-6 text-lg'>
          <li className='list-none hover:text-gray-400 text-white'>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li className='list-none hover:text-gray-400 text-white'>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li className='list-none hover:text-gray-400 text-white'>
            <NavLink to='/contactUs'>Contact Us</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
