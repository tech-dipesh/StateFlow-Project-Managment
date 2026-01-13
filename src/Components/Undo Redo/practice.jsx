import React, { useState } from 'react'
import useUndoRedo from '../../hooks/useUndoRedo';
const style = 'cursor-pointer bg-gray-800 rounded-xs p-2 hover:font-semibold ';

export default function Practice() {
  const {present, past, future, updateResult, undoOperation, redoOperation}=useUndoRedo([]);

  return (
    <div>
      <div className="gap-5 m-12 flex justify-center align-middle">
        <button className={style} onClick={undoOperation} disabled={past.length===0}>Undo</button>
        <button className={style} onClick={redoOperation} disabled={future.length===0}>Redo</button>
        <button disabled className={style} onClick={()=>updateResult([])}>Reset</button>
      </div>
      <hr />
      <div className="flex justify-center my-10 gap-10 align-middle">
        <button className={style} onClick={(e)=>updateResult([...present, 'new item'])}>Add array</button>
        <h1 className='text-white bg-blue-700 p-5 cursor-pointer'>{JSON.stringify(present)}</h1>
        <button className={style} onClick={(e)=>updateResult(present.slice(0, -1))}>Remove array</button>
            </div>
        <table className='flex justify-center border-2'>
          <thead>
            <tr className="gap-5 flex">
              <td>Task</td>
              <td>Value</td>
              <td>Result</td>
            </tr>
          </thead>
          <tbody>
            {past.map(p => (
              <tr>
                <td key={p}>{p}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div >
      )
}
