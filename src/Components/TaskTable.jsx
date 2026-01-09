import { useState } from "react";

export default function TaskTable({ tasks }) {
  const [titleedit, setTitleEdit] = useState(null);
  const [statusedit, setStatuEdit] = useState(null);

  const [editedinput, setEditedInput] = useState('');

 
  const changeCurrentvalue = (e, id) => {
    e.stopPropagation()
    if(editedinput===''){
      console.log("please enter something.");
      return;
    }
    const findthatId = tasks.find(task => task.id === id)
    findthatId.title = editedinput;
    setEditedInput('');
    setTitleEdit(null);
  }

  const optionEdit = (e, id) => {
    const findthatId = tasks.find(task => task.id === id);
    findthatId.status = e.target.value;
    setStatuEdit(null)
  }

  return (
    <div className="h-3/4 flex flex-col items-center overflow-auto p-8">
      <h1 className="text-3xl">Task Table</h1>
      <table className="w-full max-w-3xl border-collapse border-2 border-gray-300"
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
            <th className="p-4 text-xl font-semibold text-left">Title</th>
            <th className="p-4 text-xl font-semibold text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
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
                    <select onClick={(e) => e.stopPropagation()} className="mx-5 bg-gray-200" onChange={(e) => optionEdit(e, task.id)}>
                      <option hidden>Select Option</option>
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
