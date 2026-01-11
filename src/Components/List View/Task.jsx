import TaskInput from "./TaskInput";
import {useContext, useState} from "react"
import TaskTable from "./TaskTable"
import useLocalStorage from "../../hooks/useLocalStorage.js";
import Search from "../Filter/search.jsx";
import Option from "../Filter/Option"
import { dataContext } from "../../context/dataContextProvider.jsx";
export default function Task() {
    const [tasks, setTasks]=useContext(dataContext);
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
