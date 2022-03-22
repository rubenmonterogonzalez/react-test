import React from "react";

export default function EventForm({setFormOpen}) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 shadow-md mb-6">
        <div className="container">
          <div>
            <h6 className="mx-3 my-2 text-xl font-medium text-gray-900">Create New Event</h6>
            <div className="flex">
              <input type="text" placeholder="Event Title" className="m-3 w-full bg-transparent border-gray-200 placeholder:text-slate-400"/>
            </div>

            <div className="flex">
              <input type="text" placeholder="Category" className="mx-3 w-full bg-transparent border-gray-200 placeholder:text-slate-400"/>
            </div>

            <div className="flex">
              <input type="text" placeholder="Description" className="m-3 w-full bg-transparent border-gray-200 placeholder:text-slate-400"/>
            </div>

            <div className="flex">
              <input type="text" placeholder="City" className="mx-3 w-full bg-transparent border-gray-200 placeholder:text-slate-400"/>
            </div>

            <div className="flex">
              <input type="text" placeholder="Venue" className="m-3 w-full bg-transparent border-gray-200 placeholder:text-slate-400"/>
            </div>

            <div className="flex">
              <input type="date" placeholder="dd/mm/yyyy" className="mx-3 w-full bg-transparent border-gray-200 placeholder:text-slate-400"/>
            </div>

            <div className="flex justify-end mb-3">
              <button onClick={() => setFormOpen(false)} className="mr-3 mt-3 text-white bg-gradient-to-r from-black to-gray-300 hover:bg-gradient-to-br hover:text-gray-800 focus:text-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Cancel</button>
              <button className="mr-3 mt-3 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br hover:text-gray-800 focus:text-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
            </div>
          </div>
        </div>
      </div>
    )
}