import { useContext } from "react";
import Column from "./Column";
import { DndContext } from "@dnd-kit/core";
import { dataContext } from "../../context/dataContextProvider";
const COLUMNS=[
  { id: "TODO", title: "To do",},
{ id: "IN PROGRESS", title: "In Progress"},
{ id: "COMPLETED", title: "Completed"},
]
export default function Tasks() {
    const {tasks}=useContext(dataContext);
  return (
   <div className="flex min-h-screen items-start justify-center p-8 m-12">
  <div className="flex gap-6">
        {COLUMNS.map(column => (
          <Column key={column.id} column={column} tasks={tasks.filter(item => {
            const listItem=item.status.toLowerCase().replace(/\s+/g, "");
            const columnList=column.id.toLowerCase().replace(/\s+/g, "");
            return listItem===columnList;
          })
          } />
        ))}
      </div>
    </div>
  )
}
