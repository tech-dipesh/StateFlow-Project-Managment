import React, { useContext, useState } from 'react'
import Option from '../Filter/Option';
import { dataContext } from '../../context/dataContextProvider';

export default function TableBody({ displayAllTasks, setTitleEdit, titleedit, setStatusEdit, statusedit }) {
    const [tasks, setTasks]=useContext(dataContext);
  
  const [editedinput, setEditedInput] = useState('');
  const [bothEdit, setBothEdit] = useState(false);
  const changeCurrentvalue = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    if (editedinput === '') {
      return;
    }
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, title: editedinput } : task
    ));

    setEditedInput(''); 
    setTitleEdit(null);
  }

  const optionEdit = (e, id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, status: e.target.value } : task
    ));
    setBothEdit(!bothEdit);
    setStatusEdit(null);
  }

  const bothEditFeature = (e, task) => {
    e.stopPropagation();
    if (titleedit === task.id && statusedit === task.id) {
      setStatusEdit(null);
      setTitleEdit(null);
      setBothEdit(false);
    }
    else {
      setStatusEdit(task.id);
      setTitleEdit(task.id);
      setBothEdit(true);
    }
  }
  return (
    <tbody>
      {displayAllTasks.length == 0 ? (
        <tr className='p-4 text-blue-500 flex justify-center col-span-3 text-2xl font-semibold'>The List is empty.</tr>
      ) :
        (displayAllTasks.map((task) => (
          <tr key={task.id} className="border-b border-gray-200 hover:bg-gray-50">
            <td className="p-4 text-lg cursor-pointer" onClick={() => setTitleEdit(task.id)}>
              {titleedit === task.id ? (
                <form
                  onSubmit={(e) => changeCurrentvalue(e, task.id)}
                  className="inline-flex gap-2 items-center bg-blue-100 p-1 rounded shadow"
                  onClick={(e) => e.stopPropagation()}
                >
                  <input
                    className="min-w-25.5 px-3 py-1 border border-blue-300 rounded text-black"
                    placeholder={task.title}
                    value={editedinput}
                    onChange={(e) => setEditedInput(e.target.value)}
                    defaultValue={task.title}
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
              ${task.status === 'To do' ? 'bg-gray-500' : task.status === 'In Progress' ? 'bg-gray-400' : 'bg-blue-500'}`}
              onClick={() => setStatusEdit(task.id)} >
              <span className="w-5xs">{task.status}
                {statusedit === task.id &&
                  <span className="inline-flex w-4xs  mx-10 gap-2 items-center bg-blue-100 p-1 rounded shadow">
                    <select onClick={(e) => e.stopPropagation()} className="mx-5 bg-gray-200 cursor-pointer" onChange={(e) => optionEdit(e, task.id)}>
                      <option hidden>Select Option</option>
                      <option className='cursor-pointer'>To do</option>
                      <option  className='cursor-pointer'>In Progress</option>
                      <option  className='cursor-pointer'>Completed</option>
                    </select>
                    <button onClick={(e) => (e.stopPropagation(), setStatusEdit(null))} className="px-3 py-1 bg-green-500 text-white rounded text-sm cursor-pointer">Cancel</button>
                  </span>
                }
              </span>
            </td>
            <td className='p-2 w-64'><Option setTasks={setTasks} id={task.id} tasks={tasks} urgency={task.priority}/></td>
            <td className="w-5">
              <button onClick={(e) => bothEditFeature(e, task)} className="p-2 m-2 bg-blue-400 rounded-xs cursor-pointer">{bothEdit === false ? 'Edit' : 'Save'}</button>
            </td>
          </tr>
        ))
        )}
    </tbody>
  )
}
