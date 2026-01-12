import { useState } from "react"

export default function Practice() {
  const [result, setResult]=useState(0);
  const [history, setHistory]=useState([]);
  const [undo, setUndo]=useState([]);
  const [redo, setRedo]=useState([]);

  const style='cursor-pointer bg-gray-800 rounded-xs p-2 hover:font-semibold';
  const updateHistory=(text)=>{
    setHistory(prev=>[...prev, text]);
    console.log("history is", history);
  }
  const updateResult=(e)=>{
    if(result-1<-1)return;
    const val=parseInt(e.target.textContent)
    setResult(result+val)
    updateHistory(val)
    
  }
  const undoOperation=()=>{
    const [help, ...prev]=history;
    console.log("prev is", prev, "help is", help);
  }
  return (
    <div>
      <h1>Hello world.</h1>
      <div className="gap-5 flex justify-center align-middle">
      <button className={style} onClick={undoOperation}>Undo</button>
      <button disabled={redo.length===0} className={style}>Redo</button>
      <button disabled className={style}>Reset</button>
      </div>
      <hr />
      <div className="flex justify-center mt-5 gap-10 align-middle">
      <button className={style} onClick={updateResult}>+1</button>
      <h1 className={style}>{result}</h1>
      <button className={style} onClick={updateResult}>-1</button>
      </div>
      <div>
        <table>
          <thead>
            <tr className="gap-5 flex">
              <td>Task</td>
              <td>Value</td>
              <td>Result</td>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    </div>
  )
}
