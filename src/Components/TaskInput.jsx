import React, { useState } from 'react'

export default function TaskInput() {
  const [data, setData]=useState({});
  const submitForm=(e)=>{
    e.preventDefault();
    console.log(e);
    console.log("Form submittted");
  }
  return (
    <div className='flex h-screen'>
    <div className='m-auto'>
      <form onClick={(e)=>submitForm(e)}>
      <input type="text" placeholder='Please Enter your task.'/>
      <select name="Status" id="">
        <option hidden className='bg-red-500'>Change Status</option>
        <option>To do</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>
      <input className='pointer bg-gray-800 cursor-pointer p-2 rounded-xl' type="submit" value='Submit'/>
      </form>
    </div>
    </div>
  )
}
