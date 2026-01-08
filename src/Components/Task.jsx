
// What it means conceptually:
// * Create a task
// * Task has:
//   * id
//   * title
//   * status (To Do → In Progress → Done → Blocked)
// * You can **change status**

import TaskInput from "./TaskInput";
import {useState} from "react"
import TaskTable from "./TaskTable"
export default function Task() {
  
  const [tasks, setTasks]=useState([]);
  return (
    <div className="min-h-screen">
      <TaskInput setTasks={setTasks}/>
      <TaskTable tasks={tasks}/>
    </div>
  )
}
