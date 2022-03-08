import React from "react"
import logo from '../../Assets/images/logo192.png'

export default function Navbar() {
  return (
    <nav class="bg-gradient-to-r from-black to-transparent px-2 sm:px-4 py-2.5">

      <div class="container flex flex-wrap justify-between items-center mx-auto">

        <div>
          <a href="/" class="flex items-center">
              <img src={logo} class="mr-3 h-6 sm:h-10" alt="Eventix Logo" />
              <span class="self-center text-xl font-semibold whitespace-nowrap text-white hover:text-[#61DBFB]">Eventix App</span>
          </a>
        </div>

        <div class="mr-auto ml-8 hidden w-full sm:block sm:w-auto">
          <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br hover:text-gray-800 focus:ring-4 focus:ring-white focus:text-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create Event</button>
        </div>

        <button data-collapse-toggle="mobile-menu" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-[#61DBFB] focus:ring-2 focus:ring-white focus:bg-gray-800" aria-controls="mobile-menu-2" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>

        <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
          <div class="flex flex-col mt-4 md:flex-row md:space-x-4 md:mt-0 md:text-sm md:font-medium">
            <button type="button" class="sm:min-w-[120px] text-cyan-500 bg-transparent md:border-2 border-cyan-500 hover:bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:text-gray-800 hover:border-gray-800 focus:bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 focus:ring-2 focus:ring-white focus:border-white focus:text-gray-800 font-medium rounded-lg text-md px-5 py-2.5 text-center">Login</button>
            <button type="button" class="sm:min-w-[120px] text-cyan-500 bg-transparent md:border-2 border-cyan-500 hover:bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:text-gray-800 hover:border-gray-800 focus:ring-2 focus:ring-white focus:border-white focus:bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 focus:text-gray-800 font-medium rounded-lg text-md px-5 py-2.5 text-center">Register</button>
          </div>
        </div>
      </div>
    </nav>
  )
}