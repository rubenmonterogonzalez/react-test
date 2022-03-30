import React from 'react'
import { format } from 'date-fns';


export default function EventDetailedInfo({event}) {
  return (
    <div className='p-4'>
      <div className='flex border-[1px] border-b-transparent border-gray-200 h-[80px] items-center rounded-tl-md rounded-tr-md'>
        <svg xmlns="http://www.w3.org/2000/svg" className="m-4 icon icon-tabler icon-tabler-info-square" width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" stroke="teal" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
          <rect x="4" y="4" width="16" height="16" rx="2"></rect>
          <polyline points="11 12 12 12 12 16 13 16"></polyline>
        </svg>
        <span>{event.description}</span>
      </div>
      <div className='flex border-[1px] border-b-transparent border-gray-200 h-[80px] items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" className="m-4 icon icon-tabler icon-tabler-calendar-event" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="teal" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <rect x="4" y="5" width="16" height="16" rx="2"></rect>
          <line x1="16" y1="3" x2="16" y2="7"></line>
          <line x1="8" y1="3" x2="8" y2="7"></line>
          <line x1="4" y1="11" x2="20" y2="11"></line>
          <rect x="8" y="15" width="2" height="2"></rect>
        </svg>
        <span>{format(event.date, 'MMMM d, yyyy h:mm a')}</span>
      </div>
      <div className='flex shadow-md border-[1px] border-gray-200 h-[80px] items-center justify-between rounded-bl-md rounded-br-md'>
        <div className='flex items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" className="m-4 icon icon-tabler icon-tabler-map-pin" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="teal" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <circle cx="12" cy="11" r="3"></circle>
          <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
        </svg>
        <span>{event.venue}</span>
        </div>
          <button className="m-4 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br hover:text-gray-800 focus:text-gray-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center">Show Map</button>
      </div>
    </div>
  )
}
