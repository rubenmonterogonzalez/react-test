import React, { useState } from 'react'
import Navbar from "../../Components/Navbar/Navbar"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../../Components/Home/HomePage';
import Dashboard from '../../Components/Event/Dashboard/Dashboard';
import EventDetailedPage from '../../Components/Event/Detailed/EventDetailedPage';
import EventForm from '../../Components/Event/Form/EventForm';

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
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>

      <Navbar setFormOpen={handleCreateFormOpen} />
      <Routes>
        <Route path='/events' element={<Dashboard />} />
        <Route path='/events/:id' element={<EventDetailedPage />} />
        <Route path='/createEvent' element={<EventForm />} />
      </Routes>
    </>
  )
}