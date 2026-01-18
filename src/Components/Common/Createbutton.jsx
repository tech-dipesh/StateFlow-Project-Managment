import { faPlus, faUnderline } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';

export default function Createbutton({isInput:inputZero, setIsInput:InputFirst}) {
  const navigate=useNavigate();
  const  [local, setLocal]=useState(false)
  const isInput=inputZero ?? local;
  const setIsInput=InputFirst ?? setLocal;
  return  <button className="left-35 relative opacitiy-85 cursor-pointer bg-blue-500 font-semibold py-2 px-4 rounded  mt-24" onClick={()=>(setIsInput(!isInput), navigate("../list"))}><FontAwesomeIcon icon={faPlus}/>Create</button>
}