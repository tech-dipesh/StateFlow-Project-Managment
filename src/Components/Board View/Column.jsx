import { useDroppable } from "@dnd-kit/core";
import TaskCard from "./TaskCard";

export default function Column({tasks, column}) {
  const allNode=useDroppable({
    id: column.id
  })
  const {setNodeRef}=allNode
  return (
    <div className="flex w-80 flex-col rounded-lg bg-neutral 800 p-4" ref={setNodeRef}>
      <h2 className="mb-4 font-semibold text-neutral-100">{column.title}</h2>
      <div className="flex flex-1 flex-col gap-4">
        {tasks.map(tasks=>(
          <TaskCard key={tasks.id} task={tasks}/>
        ))}
      </div>
    </div>
  )
}
