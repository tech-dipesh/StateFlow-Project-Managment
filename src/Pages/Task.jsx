import TaskInput from "../Components/Input/TaskInput.jsx";
import {useContext, useState} from "react"
import TaskTable from "../Components/List View/TaskTable.jsx"
import Search from "../Components/Filter/search.jsx";
import Option from "../Components/Filter/Option.jsx"
import { dataContext } from "../context/dataContextProvider.jsx";
import Undoredo from "../Common/undoRedo.jsx";
import Createbutton from "../Common/Createbutton.jsx";
import Exportcsv from "../Common/Exportcsv.jsx";
import Loading from "../Common/Loader.jsx";
import Archive from "../Components/List View/Archive.jsx";
export default function Task() {
  const {tasks}=useContext(dataContext);
  const [filterCritrea, setFilterCritrea]=useState();
  const [searchResults, setSearchResults] = useState(null);  
    const [isInput, setIsInput]=useState(false);
  return !tasks?<Loading/>:(
    <div className="min-h-screen">
      <TaskInput isInput={isInput} setIsInput={setIsInput}/>
      <Search filterCritrea={filterCritrea} setFilterCritrea={setFilterCritrea} setSearchResults={setSearchResults}/>
      <TaskTable filterCritrea={filterCritrea} setFilterCritrea={setFilterCritrea} searchResults={searchResults}/>
      <div className="flex justify-between w-full my-12 md:my-10 lg:my-24">
      <Createbutton isInput={isInput} setIsInput={setIsInput}/>
      <Exportcsv/>
      <Archive/>
      </div>
      <Undoredo/>
    </div>
  )
}