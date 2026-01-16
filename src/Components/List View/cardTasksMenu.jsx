import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Option from '../Filter/Option'
export default function CardTaskMenu({bothEdit, bothEditFeature, task, tasks, setTasks}) {
  const [isMenu, setIsMenu]=useState(false);
  return (
  <>
  <td className='p-2 w-64'>
    <Option setTasks={setTasks} id={task.id} tasks={tasks} urgency={task.priority}/></td>
      <td className="w-5">
        <button onClick={(e) => bothEditFeature(e, task)} className="p-2 m-2 bg-blue-400 rounded-xs cursor-pointer">{bothEdit === false ? 'Edit' : 'Save'}</button>
        </td>
    {/* <td className="p-4 text-xl font-semibold text-left cursor-pointer" onClick={()=>setIsMenu(!isMenu)}><FontAwesomeIcon icon={faEllipsis}/></td> */}
  <td className="relative p-4 text-xl font-semibold text-left cursor-pointer" onClick={()=>setIsMenu(!isMenu)}><FontAwesomeIcon icon={faEllipsis}/>
    {isMenu &&
    <div className='absolute top-full left-0 w-48 mt-12.5 bg-gray-800 rounded-lg border border-gray-700 z-50'>
    <button className={`w-full px-4 py-3 text-left flex items-center gap-2 cursor-pointer hover:bg-gray-700 text-white`}>Hello world</button>
    <button className={`w-full px-4 py-3 text-left flex items-center gap-2 cursor-pointer hover:bg-gray-700 text-white`}>Hello world</button>
  </div>
  }
    </td>
  </>
  )
}
