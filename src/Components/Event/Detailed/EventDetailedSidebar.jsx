import React from 'react'
import avatar from '../../../Assets/images/avatar-icon.png'

export default function EventDetailedSidebar() {
  return (
    <>
      <div className='flex flex-col p-4'>

        <div className='flex bg-teal-500 h-[40px] rounded-tr-md rounded-tl-md'>
          <span className='text-white font-semibold text-[20px] m-auto'>2 People Going</span>
        </div>

        <div className='flex border-[1px] border-gray-200 py-1 px-2 border-b-transparent'>
          <div>
            <img width="100" src={avatar} alt="" />
          </div>
          <div className='flex items-center'>
            <span className='font-semibold m-1 text-lg'>Frank</span>
          </div>
        </div>

        <div className='flex border-[1px] border-gray-200 py-1 px-2 shadow-md'>
          <div>
            <img width="100" src={avatar} alt="" />
          </div>
          <div className='flex items-center'>
            <span className='font-semibold m-1 text-lg'>John</span>
          </div>
        </div>

      </div>
    </>
  )
}
