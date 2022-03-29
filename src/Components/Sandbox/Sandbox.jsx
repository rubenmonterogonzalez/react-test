import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './testReducer'

export default function Sandbox() {
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.test.data);

  return (
    <>
      <div className='m-12'>
        <h1 className='text-[35px]'>Testing 123</h1>
        <h3 className='text-[20px] mb-4'>The data is: {Data}</h3>
        <button onClick={() => dispatch(increment(20))} className="mr-4 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br hover:text-gray-800 focus:text-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center" >Increment</button>
        <button onClick={() => dispatch(decrement(10))} className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br hover:text-gray-800 focus:text-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center" >Decrement</button>
      </div>
    </>
  )
}
