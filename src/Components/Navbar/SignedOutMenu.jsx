import React from 'react'

export default function SignedOutMenu({setAuthenticated}) {
  return (
    <div>
      <button onClick={() => setAuthenticated(true)} type="button" className="sm:min-w-[120px] text-white md:bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br hover:text-gray-800 focus:text-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-4 text-center">Login</button>
      <button type="button" className="sm:min-w-[120px] text-white md:bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br hover:text-gray-800 focus:text-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Register</button>
    </div>
  )
}
