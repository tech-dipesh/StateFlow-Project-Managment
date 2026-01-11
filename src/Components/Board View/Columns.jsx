import { useState } from "react";
import Column from "./Column";
import { DndContext } from "@dnd-kit/core";
const COLUMNS=[{
  id: "TODO", title: "To do",
},
{ id: "IN_PROGRESS", title: "In Progress"},
{ id: "COMPLETED", title: "Completed"},
]
export default function Tasks() {
  const [items, setItems] = useState([
    {id: 1, task: "Eat", status: "In Progress" },
    {id: 2, task: "Sleep", status: "To do" },
    {id: 3, task: "Gym", status: "In Progress" },
    {id: 4, task: "doing homework", status: "Completed" },
  ]);
  const handleDragDnd=(e)=>{
    
  }
  return (
    <DndContext onDragEnd={handleDragDnd}>
    <div className="p-4">
      <div className="flex gap-8">
        {COLUMNS.map(column => (
          <Column key={column.id} column={column} tasks={items.filter(item => item.status === column.title)} />
        ))}
      </div>
    </div>
  </DndContext>
  )
}
