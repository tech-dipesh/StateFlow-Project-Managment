import React, { useContext } from 'react'
import { dataContext } from '../context/dataContextProvider'

export default function Home() {
  const {tasks}=useContext(dataContext)
  return (
    <div className='gap-12 text-blue-400 grid justify-center my-8'>
      <h1 className='font-semibold'>Task Status.</h1>
      <h1>Total Task created: {tasks.length}</h1>
    </div>
  )
}