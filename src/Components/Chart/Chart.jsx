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
    console.log("length is", tasks.length);
    let todo=0, progress=0, completed=0;

    tasks.map(t=>{
      const LowerValue=t.status.toLowerCase().replace(/\s+/g, "")
      LowerValue=="todo"?todo++:LowerValue=="inprogress"?progress++:completed++
  })
  const arr=[todo, progress, completed];
  data.datasets[0].data=arr;

  return (
    <>
    <h1 className='font-semibold flex justify-center my-8'>Chart Data</h1>
    <div className='w-2/4 h-3/4 flex justify-center'>
     <Pie data={data} className='justify-center align-middle left-2/4 relative'/>
    </div>
    </>
  )
}
