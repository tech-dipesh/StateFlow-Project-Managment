import React, { useState } from 'react'
const style = 'cursor-pointer bg-gray-800 rounded-xs p-2 hover:font-semibold ';

export default function Practice() {
  const [past, setPast] = useState([])
  const [present, setPresent] = useState(0);
  const [future, setFuture] = useState([])
  const updateResult = (e, op) => {
    setPast(prev=>[...prev, present]);
    setFuture([])
    const newValue = op === "+" ? present + 1 : present - 1;
  setPresent(newValue);
  }
  const undoOperation=()=>{
    if(past.length===0) return;
    setPresent(past[past.length-1]);
    const removelastPast=past.slice(0, -1);
    setFuture(prev=>[...prev, present]);
    setPast(removelastPast);
  }
  
  const redoOperation=()=>{
      setPast(prev=>[...prev, present]);
      setPresent(future[future.length-1]);
      const removeLastfromFuture=future.slice(0, -1);
      setFuture(removeLastfromFuture);
  }

  return (
    <div>
      <div className="gap-5 m-12 flex justify-center align-middle">
        <button className={style} onClick={undoOperation} >Undo</button>
        <button className={style} onClick={redoOperation}>Redo</button>
        <button disabled className={style} >Reset</button>
      </div>
      <hr />
      <div className="flex justify-center my-10 gap-10 align-middle">
        <button className={style} onClick={(e)=>updateResult(e, '+')}>+1</button>
        <h1 className='text-white bg-blue-700 p-5 cursor-pointer'>{present}</h1>
        <button className={style} onClick={(e)=>updateResult(e, '-')}>-1</button>
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
                <td>{p}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div >
      )
}
