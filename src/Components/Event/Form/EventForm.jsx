import React, { useState } from "react";
import cuid from 'cuid';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createEvent, updateEvent } from "../eventAction";

export default function EventForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const match = {params: useParams()};
  const selectedEvent = useSelector(state => state.event.events.find(e => e.id === match.params.id));

  const initialValues = selectedEvent ?? {
    title: '',
    category: '',
    description: '',
    city: '',
    venue: '',
    date: '',
  }

  const [values, setValues] = useState(initialValues);

  function handleFormSubmit(e) {
    selectedEvent ?
      dispatch(updateEvent({ ...selectedEvent, ...values }))
      : dispatch(createEvent({
        ...values,
        id: cuid(),
        hostedBy: '',
        attendees: [],
        hostPhotoURL: '/Assets/images/user-icon.png',
      }));
      navigate('/events')
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value })
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-md mb-6 mt-12 m-auto max-w-[300px] sm:max-w-[600px]">
      <div className="container">
        <form onSubmit={handleFormSubmit}>
          <h6 className="mx-3 my-2 text-xl font-medium text-gray-900">{selectedEvent ? 'Edit the event' : 'Create new event'}</h6>
          <div className="flex">
            <input
              value={values.title}
              onChange={(e) => handleInputChange(e)}
              name="title"
              type="text"
              placeholder="Event Title"
              className="m-3 w-full bg-transparent border-gray-200 placeholder:text-slate-400"
            />
          </div>

          <div className="flex">
            <input
              value={values.category}
              onChange={(e) => handleInputChange(e)}
              name="category"
              type="text"
              placeholder="Category"
              className="mx-3 w-full bg-transparent border-gray-200 placeholder:text-slate-400"
            />
          </div>

          <div className="flex">
            <input
              value={values.description}
              onChange={(e) => handleInputChange(e)}
              name="description"
              type="text"
              placeholder="Description"
              className="m-3 w-full bg-transparent border-gray-200 placeholder:text-slate-400"
            />
          </div>

          <div className="flex">
            <input
              value={values.city}
              onChange={(e) => handleInputChange(e)}
              name="city"
              type="text"
              placeholder="City"
              className="mx-3 w-full bg-transparent border-gray-200 placeholder:text-slate-400"
            />
          </div>

          <div className="flex">
            <input
              value={values.venue}
              onChange={(e) => handleInputChange(e)}
              name="venue"
              type="text"
              placeholder="Venue"
              className="m-3 w-full bg-transparent border-gray-200 placeholder:text-slate-400"
            />
          </div>

          <div className="flex">
            <input
              value={values.date}
              onChange={(e) => handleInputChange(e)}
              name="date"
              type="date"
              placeholder="dd/mm/yyyy"
              className="mx-3 w-full bg-transparent border-gray-200 placeholder:text-slate-400"
            />
          </div>

          <div className="flex justify-end mb-3">
            <Link to={'/events'} type="submit" className="mr-3 mt-3 text-white bg-gradient-to-r from-black to-gray-300 hover:bg-gradient-to-br hover:text-gray-800 focus:text-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Cancel</Link>
            <button type="submit" className="mr-3 mt-3 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br hover:text-gray-800 focus:text-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}