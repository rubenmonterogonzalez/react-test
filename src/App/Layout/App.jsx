import React from 'react'
import Navbar from "../../Components/Navbar/Navbar"
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../Components/Home/HomePage';
import Dashboard from '../../Components/Event/Dashboard/Dashboard';
import EventDetailedPage from '../../Components/Event/Detailed/EventDetailedPage';
import EventForm from '../../Components/Event/Form/EventForm';
import Sandbox from '../../Components/Sandbox/Sandbox';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>

      <Navbar />
      <Routes>
        <Route path='/events' element={<Dashboard />} />
        <Route path='/sandbox' element={<Sandbox />} />
        <Route path='/events/:id' element={<EventDetailedPage />} />
        {["/createEvent", "/manage/:id"].map(path => (
          <Route
            key="createEvent" // optional: avoid full re-renders on route changes
            path={path}
            element={<EventForm />}
          />
        ))}
        {/* <Route path='/createEvent' element={<EventForm />} /> */}
      </Routes>
    </>
  )
}