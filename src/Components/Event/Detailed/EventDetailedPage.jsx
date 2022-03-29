import React from 'react'
import { useSelector } from 'react-redux'
import EventDetailedChat from './EventDetailedChat'
import EventDetailedHeader from './EventDetailedHeader'
import EventDetailedInfo from './EventDetailedInfo'
import EventDetailedSidebar from './EventDetailedSidebar'
import { useParams } from 'react-router-dom'


export default function EventDetailedPage() {
  const match = {params: useParams()};
  const event = useSelector(state => state.event.events.find(e => e.id === match.params.id));
  

  return (
    <>
      <div className='grid grid-cols-6 p-12'>
        <div className='col-span-3'>
          <EventDetailedHeader event={event} />
          <EventDetailedInfo event={event} />
          <EventDetailedChat />
        </div>
        <div className='col-span-1'>
        </div>
        <div className='col-span-2'>
          <EventDetailedSidebar attendees={event.attendees}/>
        </div>
      </div>
    </>
  )
}
