import React from "react";
import ListAtendee from "./ListAtendee";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteEvent } from "../eventAction";


export default function ListItem({ event }) {
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-md mb-6 max-w-[1000px]">
      <div className="">

        <div className="flex">
          <img className="m-3 w-16 h-16 rounded-full shadow-lg" src={event.hostPhotoURL} alt="" />
          <div className="flex flex-col justify-center">
            <h5 className="mb-1 text-xl font-medium text-gray-900">{event.title}</h5>
            <span className="text-sm text-gray-500">{event.hostedBy}</span>
          </div>
        </div>

        <hr></hr>

        <div className="flex">
          <svg xmlns="http://www.w3.org/2000/svg" className="my-3 ml-3 mr-2 icon icon-tabler icon-tabler-clock" width="20" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="#343434" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="12" cy="12" r="9"></circle>
            <polyline points="12 7 12 12 15 15"></polyline>
          </svg>
          <span className="my-3">{event.date}</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="my-3 ml-3 mr-2 icon icon-tabler icon-tabler-map-pin" width="20" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="#343434" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="12" cy="11" r="3"></circle>
            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
          </svg>
          <span className="my-3">{event.venue}</span>
        </div>

        <hr></hr>

        <div className="flex bg-gray-100 pl-3">
          {event.attendees.map((attendee) => (
            <ListAtendee key={attendee.id} attendee={attendee} />
          ))}
        </div>

        <hr></hr>

        <div className="flex justify-between my-3">
          <span className="ml-3">{event.description}</span>
          <div className="flex">
            <Link
              to={`/events/${event.id}`}
              className="mr-3 mt-20 sm:min-w-[85px] text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br hover:text-gray-800 focus:text-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              View</Link>
            <button
              onClick={() => dispatch(deleteEvent(event.id))}
              className="mr-3 mt-20 sm:min-w-[85px] text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br hover:text-gray-800 focus:text-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Delete</button>
          </div>
        </div>

      </div>
    </div>
  )
}