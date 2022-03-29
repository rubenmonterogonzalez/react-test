import React from 'react'
import List from '../List/List'
import { useSelector } from 'react-redux';


export default function Dashboard() {
  const {events} = useSelector(state => state.event);

  return (
    <div className='flex bg-gradient-to-bl from-[#0891b2] to-[#f3f4f6] h-full pb-[3.2rem]'>
      <div className="m-auto my-12">
        <List events={events} />
      </div>
      <div className=" my-12 mr-4 md:mr-8 lg:mr-16 xl:mr-12">
        <h2>Event Filters</h2>
      </div>
    </div>
  )
}