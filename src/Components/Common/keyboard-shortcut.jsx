  import { faUpLong, faXmark } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import React from 'react'
  export default function Keyboardshortcut() {
    const allCommand = [
      { key: '?', useCase: 'Open Keyword Shortcut' },
      { key: 'k', useCase: 'Search List' },
      { key: 'b', useCase: 'Open Board' },
      { key: 'l', useCase: 'Open List' },
      { key: 'h', useCase: 'Go To Homepage' },
      { key: 'd', useCase: 'Delete Selected Item' },
      { key: 'z', useCase: 'Undo Action' },
      { key: 'y', useCase: 'Redo Action' },
      { key: 'f', useCase: 'Focus on search bar' },
      { key: 'Esc', useCase: "Close Any Option if the've selected" },
      { key: 'n', useCase: "Create Issue" },

    ]
    return (
      <div className='fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center'>
        <div className='w-full max-w-4xl bg-white rounded-xl shadow-2xl p-6 m-8'>
          <div className='flex justify-between items-center mb-6'>
            <h3 className='font-semibold text-black text-xl'>Keyboard shortcuts</h3>
            <FontAwesomeIcon icon={faXmark} className='text-gray-500 cursor-pointer hover:text-gray-700' />
          </div>
          <div className="mb-6">
            <input type="text" className="bg-gray-100 h-10 w-full rounded-lg text-gray-700 px-10 border border-gray-300 focus:outline-none focus:border-gray-400" placeholder="Search shortcuts" />
          </div>
          <div className='space-y-3'>
            {allCommand.map(command => (
              <div className='flex justify-between items-center py-2' key={command.key}>
              <div className='text-black text-sm'>{command.useCase}</div>
              <div className='flex gap-2 items-center'>
                  <FontAwesomeIcon icon={faUpLong}/>
                  {command.key}
              </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
