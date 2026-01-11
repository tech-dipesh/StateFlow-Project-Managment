import { useState } from "react";
import Column from "./Column";
import { DndContext } from "@dnd-kit/core";
const COLUMNS=[
  { id: "TODO", title: "To do",},
{ id: "IN_PROGRESS", title: "In Progress"},
{ id: "COMPLETED", title: "Completed"},
]
export default function Tasks({items}) {
  return (
    <div className="p-4">
      <div className="flex gap-8">
        {COLUMNS.map(column => (
          <Column key={column.id} column={column} tasks={items.filter(item => item.status === column.id)} />
        ))}
      </div>
    </div>
  )
}
