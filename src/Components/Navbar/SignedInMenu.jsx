import React from 'react'
import icon from '../../Assets/images/user-icon.png'
import { Link } from 'react-router-dom'

export default function SignedInMenu() {
  return (
    <div>
      <div className="relative inline-block text-left">
        <div>
          <button id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider" className="flex text-black bg-transparent font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="button">
            <img className="m-auto mr-1 w-6 h-6 rounded-full shadow-lg" src={icon} />
            <span className='m-auto'>John</span>
            <svg class="m-auto h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>

          <div id="dropdownDivider" class="hidden z-10 w-40 bg-gradient-to-r from-gray-200 to-gray-100 rounded-sm">
            <div class="" role="none">
              <Link to="/createEvent" class="flex text-black px-4 py-2 text-sm hover:text-white hover:bg-black" role="menuitem" tabindex="-1" id="menu-item-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 icon icon-tabler icon-tabler-plus" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                Create Event
              </Link>
              <a href="" class="flex text-black px-4 py-2 text-sm hover:text-white hover:bg-black" role="menuitem" tabindex="-1" id="menu-item-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 icon icon-tabler icon-tabler-user" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                </svg>
                My Profile
              </a>
              <a href="" class="flex text-black px-4 py-2 text-sm hover:text-white hover:bg-black" role="menuitem" tabindex="-1" id="menu-item-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 icon icon-tabler icon-tabler-logout" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
                  <path d="M7 12h14l-3 -3m0 6l3 -3"></path>
                </svg>
                Sign Out
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
