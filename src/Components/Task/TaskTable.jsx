import { useState } from "react";
import Filter from "../Filter/filters";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TaskTable({ tasks, setTasks }) {
  const [titleedit, setTitleEdit] = useState(null);
  const [statusedit, setStatuEdit] = useState(null);

  const [editedinput, setEditedInput] = useState('');

  const [bothEdit, setBothEdit]=useState(false);
 

  const [isFilterPopup, SetIsFilterPopup]=useState(false);

  const [filterCritrea, setFilterCritrea]=useState();

  const displayAllTasks= filterCritrea
  ? tasks.filter(task => task.status === filterCritrea)
  : tasks;

  const changeCurrentvalue = (e, id) => {
    e.preventDefault();
    e.stopPropagation()
    if(editedinput===''){
      return;
    }
    const findthatId = tasks.find(task => task.id === id)
    findthatId.title = editedinput;
    setTasks((eachTask)=>{
      eachTask.map(task=>{
        if(task.id===id) return findthatId;
    })
      return tasks
    })
    setEditedInput('');
    setTitleEdit(null);
  }
  
  const optionEdit = (e, id) => {
    const findthatId = tasks.find(task => task.id === id);
    findthatId.status = e.target.value;
    setTasks((eachTask)=>{
      eachTask.map(task=>{
        if(task.id===id) return findthatId;
    })
      return tasks
    })
    setStatuEdit(null)
  }

  const bothEditFeature=(e, task)=>{
    setStatuEdit(task.id)
    setTitleEdit(task.id)
    setBothEdit(!bothEdit)
    if(editedinput=='') return;
    setStatuEdit(null)
    setTitleEdit(null)
  }


  return (
    <div className="h-3/4 flex flex-col items-center overflow-auto p-8">
      <h1 className="text-3xl">Task Table</h1>
      <table className="w-full max-w-4xl border-collapse border-2 border-gray-300"
        onClick={(e) => {
          if (e.target === e.currentTarget ||
            e.target.tagName === 'TBODY' ||
            e.target.tagName === 'TR' ||
            e.target.tagName === 'TH') {
            setTitleEdit(null);
            setStatuEdit(null);
          }
        }}
      >
        <thead>
          <tr className="bg-gray-100 border-b-2 border-gray-300">
            <th className="p-4 m-10 text-xl font-semibold text-left">Title
                  <FontAwesomeIcon icon={faFilter} className='cursor-pointer hover:text-blue-500 transition-colors' onClick={()=>SetIsFilterPopup(!isFilterPopup)}/>
     <Filter options={["To do", "In progress", "Completed"]} isFilterPopup={isFilterPopup} SetIsFilterPopup={SetIsFilterPopup} tasks={tasks} setTasks={setTasks}/>
            </th>
            <th className="p-4 text-xl font-semibold text-left">Status
                  <FontAwesomeIcon icon={faFilter} className='cursor-pointer hover:text-blue-500 transition-colors' onClick={()=>SetIsFilterPopup(!isFilterPopup)}/>
     <Filter options={["To do", "In progress", "Completed"]} isFilterPopup={isFilterPopup} SetIsFilterPopup={SetIsFilterPopup} tasks={tasks} setTasks={setTasks} optionValue={filterCritrea} setOptionValue={setFilterCritrea}/></th>
            <th className="p-4 text-xl font-semibold text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          {displayAllTasks.map((task) => (
            <tr key={task.id} className="border-b border-gray-200 hover:bg-gray-50">
              <td className="p-4 text-lg cursor-pointer" onClick={() => setTitleEdit(task.id)}>
                {titleedit === task.id ? (
                  <form
                    onSubmit={(e) => changeCurrentvalue(e, task.id)}
                    className="inline-flex gap-2 items-center bg-blue-100 p-1 rounded shadow"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <input
                      className="min-w-37.5 px-3 py-1 border border-blue-300 rounded text-black"
                      placeholder={task.title}
                      value={editedinput}
                      onChange={(e) => setEditedInput(e.target.value)}
                      defaultValue="help"
                    />
                    <button
                      type="submit"
                      className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 cursor-pointer"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={() => setTitleEdit(null)}
                      className="px-3 py-1 bg-gray-300 text-gray-700 rounded text-sm hover:bg-gray-400 cursor-pointer"
                    >
                      Cancel
                    </button>
                  </form>
                ) : (
                  <span className="hover:text-blue-600 transition-colors">{task.title}</span>
                )}
              </td>
              <td
                className={`p-4 text-lg flex items-center gap-2 cursor-pointer
    ${task.status === 'To do' ? 'bg-gray-500' : task.status === 'In Progress' ? 'bg-gray-400' : 'bg-gray-300'}`}
                onClick={() => setStatuEdit(task.id)} >
                <span >{task.status}
                  {statusedit === task.id &&
                    <span className="inline-flex mx-10 gap-2 items-center bg-blue-100 p-1 rounded shadow">
                    <select onClick={(e) => e.stopPropagation()} className="mx-5 bg-gray-200" onChange={(e) => optionEdit(e, task.id)}>
                      <option hidden>Select Option</option>
                      <option>To do</option>
                      <option>In Progress</option>
                      <option>Completed</option>
                    </select>
                    <button onClick={(e)=>(e.stopPropagation(), setStatuEdit(null))} className="px-3 py-1 bg-green-500 text-white rounded text-sm cursor-pointer">Cancel</button>
                    </span>
                  }
                </span>
              </td>
              <td className="w-5">
                <button onClick={(e)=>bothEditFeature(e, task)} className="p-2 m-2 bg-blue-400 rounded-xs cursor-pointer">{bothEdit===false ?'Edit' : 'Save'}</button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
