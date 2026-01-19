import React, { useContext } from 'react'
import { dataContext } from '../context/dataContextProvider'
import { Line, Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Chart from '../Components/Chart/Chart';
ChartJS.register(ArcElement, Tooltip, Legend);


export default function Home() {
  const {tasks}=useContext(dataContext)
  return (
    <>
    <div className='gap-12 text-blue-400 grid justify-center my-8'>
      <h1 className='font-semibold text-2xl'>Total Task created: {tasks.length}</h1>
    </div>
    <Chart/>
    </>
  )
}