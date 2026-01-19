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
    <div className='mt-5 flex justify-end mr-4 md:mr-24 lg:mr-48'>
      <Link to='./' className='lg:mx-24 h-8 w-12 md:scale-125 hover:h-10 hover:w-18'><img src="logo.png" alt="Logo"/></Link>
      <ul className='flex gap-4 ml-4 font-semibold text-base md:text-xl md:gap-8 lg:text-2xl  lg:gap-24 lg:ml-48 text-blue-500'>
        <li className='cursor-pointer'><NavLink to='/'>Home</NavLink></li>
        <li className='cursor-pointer'><NavLink to='/list'>List</NavLink></li>
        <li className='cursor-pointer'><NavLink to='/board'>Board</NavLink></li>
        <li className='cursor-pointer'><NavLink to='/chart'>Chart</NavLink></li>
        <li className='cursor-pointer' onClick={() => setIsPopup(!isPopup)}>
          Shortcut
          {isPopup && <Keyboardshortcut setIsPopup={isPopup}/>}
        </li>
      </ul>
      
      <button 
      className='mx-2 md:mx-8 left-4 md:left-18 lg:left-32 max-h-12 relative border border-blue-500 p-1 rounded-xs cursor-pointer shadow'
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