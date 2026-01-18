import { useContext, useState } from "react";
import Filter from "../Filter/filters";
import { faBars, faEllipsis, faFilter, faSquareCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TableBody from "./tableBody";
import { dataContext } from "../../context/dataContextProvider";

export default function TaskTable({filterCritrea,  setFilterCritrea, searchResults }) {
  const {tasks, setTasks}=useContext(dataContext);
  
  const [titleedit, setTitleEdit] = useState(null);
  const [isFilterPopup, SetIsFilterPopup]=useState(false);
  const [statusedit, setStatusEdit] = useState(null);

  const [defaultSort, setDefaultSort]=useState("Relevence")
  const [isSortOption, setIsSortOption]=useState(false);
  const baseResult= searchResults?searchResults:
  filterCritrea
  ? tasks.filter(task => task.status.toLowerCase() === filterCritrea.toLowerCase())
  : tasks;

const allSortMethod=["Relevence", "Ascending", "Descending", "Priority", "Status", "Deadline"]
const displayAllTasks=defaultSort=="Relevence"?baseResult:defaultSort=="Ascending"?[...baseResult].sort((a, b)=>a.title.localeCompare(b.title)):defaultSort=="Descending"?[...baseResult].sort((a, b)=>b.title.localeCompare(a.title)):defaultSort=="Priority"? [...baseResult].sort((a, b)=>a.priority.localeCompare(b.priority)):defaultSort=="Status"?[...baseResult].sort((a, b)=>a.status.localeCompare(b.status)):[...baseResult].sort((a, b)=>a.date.localeCompare(b.date));

const sortTheData=(e)=>{
  setIsSortOption(!isSortOption);
  setDefaultSort(e.target.textContent)
}

  return (
    <div className="h-11/12 flex flex-col items-center overflow-auto p-4">
      <h1 className="text-3xl">Task Table</h1>
      <table className="w-full max-w-7xl whitespace-nowrap border-2 border-gray-300"
        onClick={(e) => {
          if (e.target === e.currentTarget ||
            e.target.tagName === 'TBODY' ||
            e.target.tagName === 'TR' ||
            e.target.tagName === 'TH') {
            setTitleEdit(null);
            setStatusEdit(null);
          }
        }}
      >
        <thead>
          <tr className="bg-gray-100 border-b-2 space-8 border-gray-300">
            <th className="p-4 m-1 text-xl font-semibold text-left">Title
                <span className="ml-5 py-1 px-2 rounded-xs bg-gray-400 opacity-65 cursor-pointer" onClick={()=>setIsSortOption(!isSortOption)
}>
                  <span>Sort By: {defaultSort}</span>
                  <FontAwesomeIcon icon={faSquareCaretDown}/>
                  </span>
                  {isSortOption && 
                    <div className="grid justify-center z-50 absolute align-middle">
                        {allSortMethod.map(each=>(
                          <div key={each} className="bg-gray-800 m-1 rounded-xs cursor-pointer" onClick={(e)=>sortTheData(e)}>{each}</div>
                        ))}
                    </div>
                  }
            </th>
            <th className="p-4 text-xl font-semibold text-left whitespace-nowrap">Status
                  <FontAwesomeIcon icon={faFilter} className='cursor-pointer hover:text-blue-500 transition-colors ml-5' onClick={()=>SetIsFilterPopup(!isFilterPopup)}/>
     <Filter options={["To do", "In progress", "Completed"]} isFilterPopup={isFilterPopup} SetIsFilterPopup={SetIsFilterPopup} optionValue={filterCritrea} setOptionValue={setFilterCritrea}/></th>
            <th className="text-xl font-semibold text-center">Priority</th>
            <th className=" text-xl font-semibold text-center">Deadline</th>
            <th className="p-2 text-xl font-semibold text-center">Change</th>
            <th className="p-2 text-xl font-semibold text-center">Manage</th>
          </tr>
        </thead>
          <TableBody displayAllTasks={displayAllTasks} titleedit={titleedit} setTitleEdit={setTitleEdit} statusedit={statusedit} setStatusEdit={setStatusEdit}/>
      </table>
    </div>
  )
}
