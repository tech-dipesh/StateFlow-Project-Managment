import { useState } from "react";
import Filter from "../Filter/filters";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TableBody from "./tableBody";

export default function TaskTable({ tasks, setTasks, filterCritrea,  setFilterCritrea, searchResults }) {
  const [titleedit, setTitleEdit] = useState(null);
  const [isFilterPopup, SetIsFilterPopup]=useState(false);
  const [statusedit, setStatusEdit] = useState(null);

  const displayAllTasks= searchResults?searchResults:
  filterCritrea
  ? tasks.filter(task => task.status.toLowerCase() === filterCritrea.toLowerCase())
  : tasks;

  return (
    <div className="h-3/4 flex flex-col items-center overflow-auto p-8">
      <h1 className="text-3xl">Task Table</h1>
      <table className="w-full max-w-5xl border-collapse border-2 border-gray-300"
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
          <tr className="bg-gray-100 border-b-2 border-gray-300">
            <th className="p-4 m-10 text-xl font-semibold text-left">Title
                  <FontAwesomeIcon icon={faFilter} className='cursor-pointer hover:text-blue-500 transition-colors ml-5' onClick={()=>SetIsFilterPopup(!isFilterPopup)}/>
     <Filter options={["To do", "In Progress", "Completed"]} isFilterPopup={isFilterPopup} SetIsFilterPopup={SetIsFilterPopup} tasks={tasks} setTasks={setTasks}/>
            </th>
            <th className="p-4 text-xl font-semibold text-left">Status
                  <FontAwesomeIcon icon={faFilter} className='cursor-pointer hover:text-blue-500 transition-colors ml-5' onClick={()=>SetIsFilterPopup(!isFilterPopup)}/>
     <Filter options={["To do", "In progress", "Completed"]} isFilterPopup={isFilterPopup} SetIsFilterPopup={SetIsFilterPopup} tasks={tasks} setTasks={setTasks} optionValue={filterCritrea} setOptionValue={setFilterCritrea}/></th>
            <th className=" text-xl font-semibold text-center">Priority</th>
            <th className="p-4 text-xl font-semibold text-left">Description</th>
          </tr>
        </thead>
          <TableBody tasks={tasks} setTasks={setTasks} displayAllTasks={displayAllTasks} titleedit={titleedit} setTitleEdit={setTitleEdit} statusedit={statusedit} setStatusEdit={setStatusEdit}/>
      </table>
    </div>
  )
}
