import React from 'react'
import drinks from '../../../Assets/images/drinks.jpeg'

export default function EventDetailedHeader() {
  return (
    <>
      <div className='flex flex-col p-4'>
        <div>
          <img className="rounded-tl-md rounded-tr-md w-full" src={drinks} />
          <div className='absolute grid top-[500px] left-[65px] opacity-80'>
            <h1 className='text-white text-[26px] font-semibold'>Event Title</h1>
            <span className='text-white'>Event Date</span>
            <span className='text-white'>Hosted by <strong>Bob</strong></span>
          </div>
        </div>
        <div className='flex justify-evenly py-4 border-1 border-gray-200 shadow-md rounded-bl-md rounded-br-md'>
          <button className="text-white bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 hover:bg-gradient-to-br hover:text-gray-800 focus:text-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Cancel My Place</button>
          <button className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br hover:text-gray-800 focus:text-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">JOIN THIS EVENT</button>
          <button className="text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-br hover:text-gray-800 focus:text-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Manage Event</button>
        </div>
      </div>
    </>
  )
}
