import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../../Assets/images/logo192.png'
import SignedInMenu from './SignedInMenu'
import SignedOutMenu from './SignedOutMenu'

export default function Navbar({ setFormOpen }) {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);

  function handleSignOut() {
    setAuthenticated(false);
    navigate('/');
  }

  return (
    <nav className="bg-gradient-to-r from-black to-transparent px-2 sm:px-4 py-2.5">

      <div className="container flex flex-wrap justify-between items-center mx-auto">

        <div className='flex'>
          <NavLink to="/" className="flex items-center">
            <img src={logo} className="mr-3 h-6 sm:h-10" alt="Eventix Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white hover:text-[#61DBFB]">Eventix App</span>
          </NavLink>

          <NavLink to='/events' className="mr-auto ml-8 hidden w-full sm:block sm:w-auto">
            <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br hover:text-gray-800 focus:text-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Events</button>
          </NavLink>

          {authenticated &&
            <NavLink to='/createEvent' className="mr-auto ml-4 hidden w-full sm:block sm:w-auto">
              <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br hover:text-gray-800 focus:text-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create Event</button>
            </NavLink>
          }
        </div>


        {/*MOBILE MENU*/}
        <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-[#61DBFB] focus:bg-gray-800" aria-controls="mobile-menu-2" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
          </svg>
          <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </button>

        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
          <div className="flex flex-col mt-4 md:flex-row md:space-x-4 md:mt-0 md:text-sm md:font-medium">

            {/* <NavLink
              to='/createEvent'
              type="button"
              className="sm:hidden sm:min-w-[120px] text-white md:bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br hover:text-gray-800 focus:text-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Create Event
            </NavLink> */}


            {authenticated ? <SignedInMenu signOut={handleSignOut} /> :<SignedOutMenu setAuthenticated={setAuthenticated} />}

            {/* <NavLink to='/events' type="button" className="sm:hidden sm:min-w-[120px] text-white md:bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br hover:text-gray-800 focus:text-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Events</NavLink> */}

          </div>
        </div>
      </div>
    </nav>
  )
}