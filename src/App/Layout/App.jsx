import React, { useState } from 'react'
import Navbar from "../../Components/Navbar/Navbar"
import Dashboard from "../../Components/Event/Dashboard/Dashboard"

export default function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  function handleSelectEvent(event) {
    setSelectedEvent(event);
    setFormOpen(true);
  }

  function handleCreateFormOpen() {
    setSelectedEvent(null);
    setFormOpen(true);
  }

  return (
    <>
      <Navbar setFormOpen={handleCreateFormOpen} />
      <Dashboard
        formOpen={formOpen}
        setFormOpen={setFormOpen}
        selectEvent={handleSelectEvent}
        selectedEvent={selectedEvent}
      />
    </>
  )
}