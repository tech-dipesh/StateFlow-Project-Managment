import React, { useState } from 'react'

export default function TaskInput({setTasks}) {
  const [data, setData]=useState({
    title: '',status: '',  id: '',
  });
  const [error, setError]=useState(false);
  const submitForm=(e)=>{
    e.preventDefault();
    if(!(data.title) || !(data.status)){
      setError(true)
      return;
    }
    const newTaskWithId={...data, id: crypto.randomUUID()};
    setTasks((prev)=>[...prev, newTaskWithId])
    setError(false)
    setData({title: '', status: ''})
  }
  return (
    <div className='h-1/4 flex items-center justify-center mt-5'>
    <div className=''>
      <form onSubmit={submitForm}>
      <input type="text" placeholder='Please Enter your task.' name='title' onChange={(e)=>setData((prev)=>({...prev, title: e.target.value}))} value={data.title}/>
      <select name="status" className='cursor-pointer' onChange={(e)=>setData((prev)=>({...prev, status: e.target.value}))} value={data.status}>
        <option hidden name='status'>Change Status</option>
        <option name='todo'>To do</option>
        <option name='inprogress'>In Progress</option>
        <option name='Completed'>Completed</option>
      </select>
      <input className='pointer bg-gray-600 cursor-pointer p-2 rounded-xl' type="submit" value='Submit'/>
      </form>
    <h1 className='text-red-500 text-5xl '>{error && 'Please Enter all inputs.'}</h1>
    </div>
    </div>
  )
}
