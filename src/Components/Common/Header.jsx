import React, { useState } from 'react'
import { Link, NavLink } from 'react-router'
import Keyboardshortcut from "./keyboard-shortcut";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export default function Header({isPopup, setIsPopup}) {
  const [isDark, setIsDark] = useState(true);
  const changeDarkMode = () => {
   const newIsDark = !isDark;
  setIsDark(newIsDark);
  document.documentElement.classList.toggle('dark', newIsDark);
  }
  
  return (
    <div className='mt-5 flex justify-end mr-48'>
      <Link to='./' className='relative h-8 w-16 scale-125 ml-4 hover:h-10 hover:w-18'><img src="logo.png" alt="Logo" /></Link>
      <ul className='flex gap-24 ml-48 font-semibold text-2xl text-blue-500'>
        <li className='cursor-pointer'><NavLink to='/'>Home</NavLink></li>
        <li className='cursor-pointer'><NavLink to='/list'>List</NavLink></li>
        <li className='cursor-pointer'><NavLink to='/board'>Board</NavLink></li>
        <li className='cursor-pointer'><NavLink to='/practice'>Practice</NavLink></li>
        <li className='cursor-pointer'><NavLink to='/chart'>Chart</NavLink></li>
        <li className='cursor-pointer' onClick={() => setIsPopup(!isPopup)}>
          Shortcut
          {isPopup && <Keyboardshortcut setIsPopup={isPopup}/>}
        </li>
      </ul>
      
      <button 
        className='mx-8 left-32 max-h-12 relative border border-blue-500 p-1 rounded-xs cursor-pointer shadow'
        onClick={changeDarkMode}
      >
        {isDark ? (
          <FontAwesomeIcon className='text-yellow-400' size='2x' icon={faSun}/>
        ) : (
          <FontAwesomeIcon className='text-blue-900' size='2x' icon={faMoon}/>
        )}
      </button>
    </div>
  )
}