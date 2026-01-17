import { useState } from 'react';
import { createPortal } from 'react-dom';
import Select from 'react-select'
import CreatableSelect from 'react-select/creatable';

const colourOptions=[
  { value: 'Personal Life', label: 'Personal Life', color: '#00B8D9', isFixed: true },
  { value: 'Business', label: 'Business', color: '#FF5630', isFixed: true },
  { value: 'Career', label: 'Career', color: '#253858' },
  { value: 'Health', label: 'Health', color: '#666666' },
];


const Label = ({setIsLabel, isLabel}) => {
  const [label, setLabel]=useState([]);
  console.log("label value is", label);
  return (
    <div className='w-64 relative right-4'>
    <CreatableSelect
    menuPortalTarget={document.body}
    isMulti
    options={colourOptions} 
    onChange={(value)=>(setLabel(value), setIsLabel(true))}/>
    </div>
  )
}
export default Label;