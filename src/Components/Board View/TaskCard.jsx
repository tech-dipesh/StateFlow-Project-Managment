import { useDraggable } from "@dnd-kit/core"
import { CSS } from '@dnd-kit/utilities'
import { dataContext } from "../../context/dataContextProvider";
import { useContext } from "react";
export default function TaskCard({task}) {
  const getDraggable=useDraggable({
    id: task.id
  })
  const {attributes, listeners, setNodeRef, transform}=getDraggable;
  const style={
    transform: CSS.Translate.toString(transform)
  }
  return (
    <div style={style} className='cursor-grab rounded-lg border border-neutral-600 bg-neutral-700 p-4 shadow-sm hover:shadow-md transition-shadow' {...listeners} ref={setNodeRef} {...attributes}>
        <h4 className='mt-4'>{task.title}</h4>
    </div>
  )
}