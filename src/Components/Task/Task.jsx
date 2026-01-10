import TaskInput from "./TaskInput";
import {useState} from "react"
import TaskTable from "./TaskTable"
import useLocalStorage from "../../hooks/useLocalStorage.js";
import Search from "../Filter/search.jsx";
export default function Task() {
  const [tasks, setTasks]=useLocalStorage('tasks', []);
const [filterCritrea, setFilterCritrea]=useState();
const [searchResults, setSearchResults] = useState(null);  
  return (
    <div className="min-h-screen">
      <TaskInput setTasks={setTasks}/>
      <Search tasks={tasks} setTasks={setTasks} filterCritrea={filterCritrea} setFilterCritrea={setFilterCritrea} setSearchResults={setSearchResults}/>
      <TaskTable tasks={tasks} setTasks={setTasks} filterCritrea={filterCritrea} setFilterCritrea={setFilterCritrea} searchResults={searchResults}/>
    </div>
  )
}
