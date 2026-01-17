import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Option from '../Filter/Option'
import Label from "../Filter/Label"
export default function CardTaskMenu({bothEdit, bothEditFeature, task, tasks, setTasks}) {
  const [isMenu, setIsMenu]=useState(false);
  const [isLabel, setIsLabel]=useState(false);
  const deleteTask=()=>{
    const thisId=task.id;
    const updateTask=tasks.filter(t=>t.id!==thisId);
    setTasks(updateTask);
  }
  return (
  <>
  <td className='p-2 w-64'>
    <Option setTasks={setTasks} id={task.id} tasks={tasks} urgency={task.priority}/></td>
    <td>{task.date=='' ? 'null': `${task.date}`}</td>
      <td className="w-5">
        <button onClick={(e) => bothEditFeature(e, task)} className="p-2 m-2 bg-blue-400 rounded-xs cursor-pointer">{bothEdit === false ? 'Edit' : 'Save'}</button>
        </td>
  <td className="relative p-4 text-xl font-semibold text-left cursor-pointer" onClick={()=>setIsMenu(!isMenu)}>
  <FontAwesomeIcon icon={faEllipsis}/>
  
  {isMenu && (
    <div className='absolute top-full right-0 w-32 bg-gray-800 rounded-lg border border-gray-700 z-50'>
      <button className={`w-full px-2 py-1 justify-center text-left flex items-center cursor-pointer hover:bg-gray-700 text-white`} onClick={()=>deleteTask()}>Delete</button>
      <button className={`w-full px-2 py-1 justify-center flex items-center gap-2 cursor-pointer hover:bg-gray-700 text-white`} onClick={(e)=>(
        e.stopPropagation(),
        setIsLabel(!isLabel)
      )}>🏷️</button>
      
      {isLabel && (
        <div className='mt-2  ' onClick={(e)=>e.stopPropagation()}>
          <Label setIsLabel={setIsLabel} isLabel={isLabel}/>
        </div>
      )}
    </div>
  )}
</td>
  </>
  )
}
