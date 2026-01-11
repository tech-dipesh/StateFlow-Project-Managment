import React from 'react'

export default function Header() {
  return (
    <div>
      <ul className='flex gap-24 ml-48 font-semibold text-2xl text-blue-500'>
        <li className='cursor-pointer'>Home</li>
        <li className='cursor-pointer'>Board</li>
        <li className='cursor-pointer'>List</li>
      </ul>
    </div>
  )
}
