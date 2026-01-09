import TaskInput from "./TaskInput";
import {useState} from "react"
import TaskTable from "./TaskTable"
import useLocalStorage from "../hooks/useLocalStorage.js";
export default function Task() {
  const [tasks, setTasks]=useLocalStorage('tasks', []);
  return (
    <div className="min-h-screen">
      <TaskInput setTasks={setTasks}/>
      <TaskTable tasks={tasks}/>
    </div>
  )
}
