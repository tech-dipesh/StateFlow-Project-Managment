import { useContext } from 'react';
import { Pie } from 'react-chartjs-2';
import { dataContext } from '../../context/dataContextProvider';


const data = {
  labels: ['Todo', 'In Progress', 'Completed'],
  datasets: [
    {
      data: [12, 19, 27],
      backgroundColor: [
        '#0F2854',
        '#547792',
        '#008BFF',
      ],
      borderColor: [
        '#001F3D',
        '#005461',
        '#FBEFEF',
      ],
      borderWidth: 2,
    },
  ],
};


export default function Chart() {
  const {tasks}=useContext(dataContext)
  // const allDataCount=tasks.map(t=>{
    console.log("length is", tasks);
    tasks.map(t=>{
      console.log(t.status);
    t.status=="Todo"?console.log("This all are in todo"):t.status=="Todo"?console.log("All are in progresss"):console.log("All have been completed")
  })
  
  return (
    <>
    <h1 className='font-semibold flex justify-center my-8'>Chart Data</h1>
    <div className='w-2/4 h-3/4 flex justify-center'>
     <Pie data={data} className='justify-center align-middle left-2/4 relative'/>
    </div>
    </>
  )
}
