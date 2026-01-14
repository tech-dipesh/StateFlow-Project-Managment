import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Option from '../Filter/Option'
export default function CardTaskMenu({bothEdit, bothEditFeature, task, tasks, setTasks}) {
  return (
    <>
    <td className='p-2 w-64'>
      <Option setTasks={setTasks} id={task.id} tasks={tasks} urgency={task.priority}/></td>
            <td className="w-5">
              <button onClick={(e) => bothEditFeature(e, task)} className="p-2 m-2 bg-blue-400 rounded-xs cursor-pointer">{bothEdit === false ? 'Edit' : 'Save'}</button>
            </td>
    <td className="p-4 text-xl font-semibold text-left cursor-pointer"><FontAwesomeIcon icon={faEllipsis}/></td>
    <div></div>
    </>
  )
}
