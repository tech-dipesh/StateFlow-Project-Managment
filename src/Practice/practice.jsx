import { useState } from 'react';
import Select from 'react-select'
import CreatableSelect from 'react-select/creatable';

const colourOptions=[
  { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
  { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' },
];


const MyComponent = () => {
  const [label, setLabel]=useState([]);
  return (
    <CreatableSelect
    styles={{ control: (baseStyles, state) => ({ ...baseStyles,  borderColor: state.isFocused ? 'grey' : 'red' })}}
    isMulti 
    options={colourOptions} 
    onChange={(value)=>setLabel(value)}/>
  )
}
export default MyComponent;