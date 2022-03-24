import React from 'react'
import EventDetailedChat from './EventDetailedChat'
import EventDetailedHeader from './EventDetailedHeader'
import EventDetailedInfo from './EventDetailedInfo'
import EventDetailedSidebar from './EventDetailedSidebar'


export default function EventDetailedPage() {
  return (
    <>
      <div className='grid grid-cols-3'>
        <div className='col-span-2'>
          <EventDetailedHeader />
          <EventDetailedInfo />
        </div>
        <div className='col-span-1'>
          <EventDetailedChat />
          <EventDetailedSidebar />
        </div>
      </div>
    </>
  )
}
