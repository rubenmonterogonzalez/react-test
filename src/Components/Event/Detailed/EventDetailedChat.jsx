import React from 'react'
import avatar from '../../../Assets/images/avatar-icon.png'

export default function EventDetailedChat() {
  return (
    <>
      <div className='flex flex-col p-4'>

        <div className='flex bg-teal-500 h-[40px] rounded-tr-md rounded-tl-md'>
          <span className='text-white font-semibold text-[20px] m-auto'>Chat About This Event</span>
        </div>

        <div className='flex border-[1px] border-gray-200 py-1 border-b-transparent'>
          <div className='flex'>
            <div className='px-1'>
              <img width="56" src={avatar} alt="" />
            </div>
            <div>
              <div className=''>
                <span className='font-semibold m-1 text-lg'>Frank</span>
                <span className='text-sm text-gray-400'>Today at 5:42PM</span>
              </div>
              <div>
                <span className='m-1'>How artistic!</span>
              </div>
              <div>
                <button className='m-1 text-gray-400 text-sm'>Reply</button>
              </div>
            </div>
          </div>
        </div>

        <div className='flex border-[1px] border-gray-200 py-1 border-b-transparent'>
          <div className='flex'>
            <div className='px-1'>
              <img width="56" src={avatar} alt="" />
            </div>
            <div>
              <div className=''>
                <span className='font-semibold m-1 text-lg'>John</span>
                <span className='text-sm text-gray-400'>Wednesday at 12:42PM</span>
              </div>
              <div>
                <span className='m-1'>How artistic!</span>
              </div>
              <div>
                <button className='m-1 text-gray-400 text-sm'>Reply</button>
              </div>
            </div>
          </div>
        </div>

        <div className='flex border-[1px] border-gray-200 border-b-transparent py-1'>
          <div className='flex'>
            <div className='px-1'>
              <img width="56" src={avatar} alt="" />
            </div>
            <div>
              <div className=''>
                <span className='font-semibold m-1 text-lg'>Jenny</span>
                <span className='text-sm text-gray-400'>Monday at 8:42PM</span>
              </div>
              <div>
                <span className='m-1'>How artistic!</span>
              </div>
              <div>
                <button className='m-1 text-gray-400 text-sm'>Reply</button>
              </div>
            </div>
          </div>
        </div>

        <div className='flex border-[1px] border-gray-200'>
          <textarea className="m-auto border-transparent focus:ring-teal-400 focus:border-teal-400 w-full h-full" name="" id="" cols="60" rows="5"></textarea>
        </div>

        <div className='flex border-[1px] border-gray-200 shadow-md rounded-br-md rounded-bl-md border-t-transparent'>
          <button className="flex m-4 min-w-[100px] text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br hover:text-gray-800 focus:text-gray-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center" type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" className="m-1 icon icon-tabler icon-tabler-message-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 20l-3 -3h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-2l-3 3"></path>
              <line x1="8" y1="9" x2="16" y2="9"></line>
              <line x1="8" y1="13" x2="14" y2="13"></line>
            </svg>
            <span className='m-auto'>Reply</span>
          </button>
        </div>

      </div>

    </>
  )
}
