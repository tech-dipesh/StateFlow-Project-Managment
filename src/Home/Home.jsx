import React, { useContext } from 'react'
import { dataContext } from '../context/dataContextProvider'
import { Line, Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Chart from '../Components/Chart/Chart';
ChartJS.register(ArcElement, Tooltip, Legend);


export default function Home() {
  const {tasks, allPinned}=useContext(dataContext)
  console.log("all pinned is", allPinned);
  return (
    <>
   <h1 className="text-center text-lg font-semibold mb-3">
  📌 Pinned Tasks
</h1>

<div className="flex gap-4 justify-center overflow-x-auto px-4 py-3 snap-x">
  {allPinned.map(task => (
    <div
      key={task.id}
      className="snap-start min-w-45 bg-blue-500 text-white rounded-xl p-4 shadow-md"
    >
      <p className="font-semibold text-base truncate">Title: {task.title}</p>
      <span className="text-sm opacity-90">Priority: {task.priority}</span>
    </div>
  ))}
</div>

<div className="flex justify-center my-10">
  <h1 className="text-blue-500 font-semibold text-xl">
    Total Tasks: {tasks.length}
  </h1>
</div>
    <Chart/>
    </>
  )
}