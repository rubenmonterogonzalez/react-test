import React, {useState} from 'react'
import EventForm from '../Form/EventForm'
import List from '../List/List'
import {sampleData} from '../../../App/Api/Data'

export default function Dashboard({formOpen, setFormOpen, selectEvent, selectedEvent }) {
  const [events, setEvents] = useState(sampleData);

  function handleCreateEvent(event) {
    setEvents([...events, event])
  }

  function handleUpdateEvent(updatedEvent) {
    setEvents(events.map(evt => evt.id === updatedEvent.id ? updatedEvent : evt));
    selectEvent(null);
    setFormOpen(false);
  }

  function handleDeleteEvent(eventId) {
    setEvents(events.filter(evt => evt.id !== eventId));
  }

  return (
    <div className='flex bg-gradient-to-bl from-[#0891b2] to-[#f3f4f6] h-full pb-[3.2rem]'>
      <div className="m-auto my-12">
        <List events={events} selectEvent={selectEvent} deleteEvent={handleDeleteEvent}/>
      </div>
      <div className=" my-12 mr-4 md:mr-8 lg:mr-16 xl:mr-12">
        {formOpen && (
          <EventForm 
            setFormOpen={setFormOpen} 
            setEvents={setEvents} 
            createEvent={handleCreateEvent}
            selectedEvent={selectedEvent}
            updateEvent={handleUpdateEvent}
            key={selectedEvent ? selectedEvent.id : null}
          />
        )}
      </div>
    </div>
  )
}