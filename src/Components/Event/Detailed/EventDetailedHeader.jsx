import React from 'react'
import { Link } from 'react-router-dom'
import drinks from '../../../Assets/images/drinks.jpeg'

export default function EventDetailedHeader() {
  return (
    <>
      <div className='flex flex-col p-4 w-full'>
        <div className="relative">
          <img className="object-cover rounded-tl-md rounded-tr-md w-full h-[400px] brightness-70" src={drinks} />
          <div className='absolute top-[280px] left-[25px]'>
            <h1 className='text-white text-[26px] font-semibold'>Event Title</h1>
            <p className='text-white'>Event Date</p>
            <p className='text-white'>Hosted by <strong>Bob</strong></p>
          </div>
          <div className='flex justify-between py-4 px-4 border-1 border-gray-200 shadow-md rounded-bl-md rounded-br-md'>
            <div>
              <button className="mr-4 text-white bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 hover:bg-gradient-to-br hover:text-gray-800 focus:text-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Cancel My Place</button>
              <button className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br hover:text-gray-800 focus:text-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">JOIN THIS EVENT</button>
            </div>
            <div>
              <Link to={`/manage/`} className="text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-br hover:text-gray-800 focus:text-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Manage Event</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
