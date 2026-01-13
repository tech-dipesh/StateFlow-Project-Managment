import { useDraggable } from "@dnd-kit/core"
import { CSS } from '@dnd-kit/utilities'
import { dataContext } from "../../context/dataContextProvider";
import { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp, faGripLines } from '@fortawesome/free-solid-svg-icons';
export default function TaskCard({task}) {
  const getDraggable=useDraggable({
    id: task.id
  })
  const {attributes, listeners, setNodeRef, transform}=getDraggable;
  const style={
    transform: CSS.Translate.toString(transform)
  }
  return (
    <div style={style} className={`cursor-grab rounded-lg border border-neutral-600 ${task.status=="TODO"? 'bg-gray-500': task.status=="IN PROGRESS"?'bg-gray-400':'bg-blue-500'} p-4 shadow-sm hover:shadow-md transition-shadow`} {...listeners} ref={setNodeRef} {...attributes}>
        <h4 className='mt-4 flex justify-center align-middle'>{task.title}
          <span className={`mx-5 ${task.priority=="High"?'bg-red-500':task.priority=="Medium"?'bg-gray-700': 'bg-gray-400'}`}>{task.priority=="Low"?<FontAwesomeIcon icon={faCaretDown}/>: task.priority=="Medium"?<FontAwesomeIcon icon={faGripLines}/>:<FontAwesomeIcon icon={faCaretUp}/>}</span>
        </h4>
    </div>
  )
}