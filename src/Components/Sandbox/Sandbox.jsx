import React from 'react'
import { useSelector } from 'react-redux'

export default function Sandbox() {
    const data = useSelector(state => state.data);

  return (
    <div>
      <h1>Testing 123</h1>
      <h3>The data is: {data}</h3>
    </div>
  )
}
