import TaskInput from "./TaskInput";
import {useContext, useState} from "react"
import TaskTable from "./TaskTable"
import Search from "../Filter/search.jsx";
import Option from "../Filter/Option"
import { dataContext } from "../../context/dataContextProvider.jsx";
import Undoredo from "../Common/undoRedo.jsx";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";
export default function Task() {
  const {tasks, setTasks}=useContext(dataContext);
  const [filterCritrea, setFilterCritrea]=useState();
  const [searchResults, setSearchResults] = useState(null);  
  const [isInput, setIsInput]=useState(false);
  return (
    <div className="min-h-screen">
      <TaskInput setTasks={setTasks} isInput={isInput}/>
      <Search tasks={tasks} setTasks={setTasks} filterCritrea={filterCritrea} setFilterCritrea={setFilterCritrea} setSearchResults={setSearchResults}/>
      <TaskTable tasks={tasks} setTasks={setTasks} filterCritrea={filterCritrea} setFilterCritrea={setFilterCritrea} searchResults={searchResults}/>
      <button className="left-60 relative opacitiy-85 cursor-pointer bg-blue-500 font-semibold  py-2 px-4 rounded m-2" onClick={()=>setIsInput(!isInput)}><FontAwesomeIcon icon={faPlus}/>Create</button>
      <Undoredo/>
    </div>
  )
}
