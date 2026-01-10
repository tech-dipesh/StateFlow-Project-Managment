import React, { useState } from 'react'

export default function Option() {
  const [option, setoption]=useState(false);
  const [selectOption, setSelectOption]=useState('Medium')
  
  const allOption=[
    {priority: 'Low', color: 'bg-blue-500'},
    {priority: 'Medium', color: 'bg-blue-500'},
    {priority: 'High', color: 'bg-blue-500'},
  ]
  return (
    <div className='w-64'>
      <button onClick={()=>setSelectOption(!selectOption)} className='w-full px-4 py-3 bg-gray-800 text-white rounded-lg border-2 border-blue-500 flex items-center justify-between cursor-pointer'>
        {selectOption}
          <span>{selectOption}</span>
      </button>
      {option && 
      <div className=''>
        {allOption.map(option=>(
          <button className={`${option.color} m-5 w-full px-4 py-3 text-left flex items-center gap-2`}>
            <span>{option.priority}</span>
            </button>
        ))}
        </div>
      }
    </div>  
  )
}


