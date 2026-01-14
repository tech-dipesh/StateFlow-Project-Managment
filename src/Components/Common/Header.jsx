import React, { useState } from 'react'
import { NavLink } from 'react-router'
import Keyboardshortcut from "./keyboard-shortcut";
export default function Header({isPopup, setIsPopup}) {
  return (
    <div className='mt-5 flex justify-end mr-48'>
      <ul className='flex gap-24 ml-48 font-semibold text-2xl text-blue-500'>
        <li className='cursor-pointer'><NavLink to='/'>Home</NavLink></li>
        <li className='cursor-pointer'><NavLink to='/list'>List</NavLink></li>
        <li className='cursor-pointer'><NavLink to='/board'>Board</NavLink></li>
        <li className='cursor-pointer'><NavLink to='/practice'>Practice</NavLink></li>
        <li className='cursor-pointer' onClick={()=>setIsPopup(!isPopup)}>
          {/* <NavLink to='/shortcut'>Shortcut</NavLink> */}
          Shortcut
          {isPopup && <Keyboardshortcut setIsPopup={isPopup}/>}
          </li>
      </ul>
    </div>
  )
}