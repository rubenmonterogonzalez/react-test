import React from 'react'
import EventDetailedChat from './EventDetailedChat'
import EventDetailedHeader from './EventDetailedHeader'
import EventDetailedInfo from './EventDetailedInfo'
import EventDetailedSidebar from './EventDetailedSidebar'


export default function EventDetailedPage() {
  return (
    <>
      <div className='grid grid-cols-6 p-12'>
        <div className='col-span-3'>
          <EventDetailedHeader />
          <EventDetailedInfo />
          <EventDetailedChat />
        </div>
        <div className='col-span-1'>
        </div>
        <div className='col-span-2'>
          <EventDetailedSidebar />
        </div>
      </div>
    </>
  )
}
