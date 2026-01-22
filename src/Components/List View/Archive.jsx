import { faBoxArchive } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

export default function Archive() {
  const [isArchive, setIsArchive]=useState(false);
  return (
    <button className="opacitiy-85 lg:mx-28 cursor-pointer text-white bg-blue-500 font-semibold py-2 px-4 rounded hover:text-gray-500 md:px-5 md:left-12">
  <FontAwesomeIcon icon={faBoxArchive}/>Archive List
</button>
  )
}
