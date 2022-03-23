import React, { useState } from "react";
import cuid from 'cuid';

export default function EventForm({ setFormOpen, setEvents, createEvent, selectedEvent, updateEvent }) {
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
      updateEvent({ ...selectedEvent, ...values })
      : createEvent({
        ...values,
        id: cuid(),
        hostedBy: '',
        attendees: [],
        hostPhotoURL: '/Assets/images/user-icon.png',
      });
    setFormOpen(false);
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value })
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-md mb-6">
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
            <button onClick={() => setFormOpen(false)} type="submit" className="mr-3 mt-3 text-white bg-gradient-to-r from-black to-gray-300 hover:bg-gradient-to-br hover:text-gray-800 focus:text-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Cancel</button>
            <button type="submit" className="mr-3 mt-3 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br hover:text-gray-800 focus:text-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}