import { useContext} from 'react';
import Select from 'react-select'
import CreatableSelect from 'react-select/creatable';
import {dataContext} from "../../context/dataContextProvider"
// const opt=[
//   { value: 'Personal Life', label: 'Personal Life',  isFixed: true },
//   { value: 'Business', label: 'Business',isFixed: true },
//   { value: 'Career', label: 'Career',},
//   { value: 'Health', label: 'Health' },
// ];

const Label = ({setIsLabel, id}) => {
  const {tasks, setTasks}=useContext(dataContext)
  const mathThatId=tasks.find(task=>task.id===id) || [];
  let allPossibleOptions=mathThatId.Labels.map(t=> ({value: t, label: t}));
  const changeLabels=(value)=>{
    setIsLabel(true)
    const allListValues=value.map(f=>f.value) || []
    setTasks(prev=>
        prev.map(task=>
          task.id===id ?{...task, Labels: allListValues}:task
        ))
  }
  return (
    <div className='w-64 relative right-4'>
    <CreatableSelect
    menuPortalTarget={document.body}
    isMulti
    
    options={allPossibleOptions} 
    onChange={changeLabels}/>
    </div>
  )
}
export default Label;