import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../Assets/images/logo192.png'

export default function HomePage() {
  return (
    <div className='flex justify-center items-center bg-gradient-to-bl from-[#0891b2] to-[#f3f4f6] h-screen pb-[3.2rem]'>
      <div>
        <span className='text-white text-[50px]'>Eventix App</span>
        <img src={logo} className="m-auto h-48 w-48" alt="Eventix Logo" />

        <div className='flex mt-4'>
          <NavLink to="/events" className=" m-auto text-white bg-gradient-to-r from-black to-gray-300 hover:bg-gradient-to-br hover:text-gray-800 focus:text-gray-800 font-medium rounded-lg px-5 py-2.5 text-center min-w-[150px]">Get Started</NavLink>
        </div>
      </div>
    </div>
  )
}
