import React, {useState} from 'react'
import EventForm from '../Form/EventForm'
import List from '../List/List'
import {sampleData} from '../../../App/Api/Data'

export default function Dashboard({formOpen, setFormOpen}) {
  const [events, setEvents] = useState(sampleData);

  return (
    <div className='grid grid-cols-2 sm:grid-cols-3'>
      <div className="sm:col-span-2 ml-4 md:ml-8 lg:ml-16 xl:ml-12 mr-4 md:mr-6 xl:mr-14 my-12">
        <List events={events}/>
      </div>
      <div className="sm:col-span-1 my-12 mr-4 md:mr-8 lg:mr-16 xl:mr-12">
        {formOpen &&
        <EventForm setFormOpen={setFormOpen}/>}
      </div>
    </div>
  )
}