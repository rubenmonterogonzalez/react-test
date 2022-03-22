import React, {useState} from 'react'
import Navbar from "../../Components/Navbar/Navbar"
import Dashboard from "../../Components/Event/Dashboard/Dashboard"

export default function App() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <Navbar setFormOpen={setFormOpen}/>
      <Dashboard formOpen={formOpen} setFormOpen={setFormOpen}/>
    </>
  )
}