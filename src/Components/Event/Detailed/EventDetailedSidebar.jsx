import React from 'react'
import avatar from '../../../Assets/images/avatar-icon.png'

export default function EventDetailedSidebar({attendees}) {
  return (
    <>
      <div className='flex flex-col p-4'>

        <div className='flex bg-teal-500 h-[40px] rounded-tr-md rounded-tl-md'>
          <span className='text-white font-semibold text-[20px] m-auto'>{attendees.length} {attendees.length > 1 ? 'People' : 'Person'}</span>
        </div>

        {attendees.map((attendee) => (
          <div key={attendee.id} className='flex border-[1px] border-gray-200 py-4 px-2 border-t-transparent'>
            <div>
              <img className="rounded-full" width="100" src={attendee.photoURL || avatar} alt="" />
            </div>
            <div className='flex items-center'>
              <span className='font-semibold m-4 text-lg'>{attendee.displayName}</span>
            </div>
          </div>
        ))}

      </div>
    </>
  )
}
