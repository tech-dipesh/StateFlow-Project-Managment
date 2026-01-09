import { useState } from "react";

export default function TaskTable({ tasks }) {
  const [titleedit, setTitleEdit] = useState(false);
  const [statusedit, setStatuEdit]=useState(null);

  const [editedinput, setEditedInput]=useState('');
  const clickTitle = (e) => {
    console.log("title is clicked");
    setTitleEdit(!titleedit)
    console.log(titleedit);
    // setEdit(true)
  }

  const changeCurrentvalue=(e, id)=>{
    e.stopPropagation()
    const findthatId=tasks.find(task=>task.id===id)
    findthatId.title=editedinput;
    setEditedInput('');
  }


  const changeStatusOption=(e, task)=>{
    console.log("hello");
    console.log("click on changed status");
    console.log("task is", task);
    // setStatuEdit()

  }
  return (
    <div className="h-3/4 flex flex-col items-center overflow-auto p-8">
      <h1 className="text-3xl">Task Table</h1>
      <table className="w-full max-w-3xl border-collapse border-2 border-gray-300" onClick={()=>setTitleEdit(false)}>
        <thead>
          <tr className="bg-gray-100 border-b-2 border-gray-300">
            <th className="p-4 text-xl font-semibold text-left">Title</th>
            <th className="p-4 text-xl font-semibold text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="border-b border-gray-200 hover:bg-gray-50">
              <td className="p-4 text-lg" onClick={clickTitle}>{task.title}
                 {titleedit && (
                  <span onClick={(e)=>changeCurrentvalue(e, task.id)} className="flex gap-1 bg-blue-400 p-1 rounded">
                    <input className="w-24 text-black px-1"  placeholder={task.title} value={editedinput} onChange={(e)=>setEditedInput(e.target.value)}/>
                    <button className="text-green-600 text-sm">Submit</button>
                  </span>
                )}
              </td>
              <td
                className={`p-4 text-lg flex items-center gap-2 cursor-pointer
    ${task.status === 'To do' ? 'bg-gray-500' : task.status === 'In Progress' ? 'bg-gray-400' : 'bg-gray-300'}`}
    onClick={changeStatusOption} >
                <span >{task.status}
                  {statusedit &&
                  <select onClick={(e)=>e.stopPropagation()}>

             <option>To do</option>
               <option>In Progress</option>
              <option>Completed</option>
                  </select>
                  }
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
