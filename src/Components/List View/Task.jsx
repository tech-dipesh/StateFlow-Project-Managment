import TaskInput from "../Input/TaskInput";
import {useContext, useState} from "react"
import TaskTable from "./TaskTable"
import Search from "../Filter/search.jsx";
import Option from "../Filter/Option"
import { dataContext } from "../../context/dataContextProvider.jsx";
import Undoredo from "../Common/undoRedo.jsx";
import Createbutton from "../Common/Createbutton.jsx";
import Exportcsv from "../Common/Exportcsv.jsx";
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
      <div className="flex justify-between w-full my-24">
      <Createbutton isInput={isInput} setIsInput={setIsInput}/>
      <Exportcsv/>
      </div>
      <Undoredo/>
    </div>
  )
}
