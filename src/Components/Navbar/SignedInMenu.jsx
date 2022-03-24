import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import icon from '../../Assets/images/user-icon.png'
import { Link } from 'react-router-dom'


export default function SignedInMenu({signOut}) {
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="flex sm:min-w-[120px] text-white md:bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br hover:text-gray-800 focus:text-gray-800 font-medium rounded-lg text-sm px-5 py-[0.525rem] text-center">
            <img className="m-auto mr-1 w-6 h-6 rounded-full shadow-lg" src={icon} />
            <span className='m-auto'>John</span>
            <ChevronDownIcon className="-mr-1 ml-2 mt-[0.20rem] h-5 w-5" aria-hidden="true" />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-52 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="">
              <Link to="/createEvent" className="flex w-full text-black font-semibold px-4 py-2 text-sm hover:text-white hover:bg-black" role="menuitem" tabIndex="-1" id="menu-item-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 icon icon-tabler icon-tabler-plus" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                <span>Create Event</span>
              </Link>
              <button className="flex w-full  text-black font-semibold px-4 py-2 text-sm hover:text-white hover:bg-black" role="menuitem" tabIndex="-1" id="menu-item-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 icon icon-tabler icon-tabler-user" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                </svg>
                <span>My Profile</span>
              </button>
              <button onClick={signOut} className="flex w-full  text-black font-semibold px-4 py-2 text-sm hover:text-white hover:bg-black" role="menuitem" tabIndex="-1" id="menu-item-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 icon icon-tabler icon-tabler-logout" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
                  <path d="M7 12h14l-3 -3m0 6l3 -3"></path>
                </svg>
                <span>Sign Out</span>
              </button>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
