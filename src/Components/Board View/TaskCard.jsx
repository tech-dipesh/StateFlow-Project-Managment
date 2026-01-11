import { useDraggable } from "@dnd-kit/core"

export default function TaskCard({task}) {
  const getDraggable=useDraggable({
    id: task.id
  })
  const {attributes, listeners, setNodeRef, transform}=getDraggable;

  return (
    <div className='cursor-grab rounded-lg bg-neutral-700 p-4 shadow-sm hoer:shadow-md' ref={setNodeRef} {...listeners} {...attributes}>
        <h4 className='mt-4'>{task.task}</h4>
    </div>
  )
}