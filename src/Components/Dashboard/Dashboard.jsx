import React from 'react'
import List from '../List/List'

export default function Dashboard() {
  return (
    <div class='grid grid-cols-3'>
      <div class="col-span-2 mx-auto">
        <List />
      </div>
      <div class="col-span-1 mx-auto">Right</div>
    </div>
  )
}