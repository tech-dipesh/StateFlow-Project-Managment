import {  useState } from "react";

export default function useLocalStorage(key, initialValue) {
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
      if(future.length===0) return;
        setPast(prev=>[...prev, present]);
        setPresent(future[future.length-1]);
        const removeLastfromFuture=future.slice(0, -1);
        setFuture(removeLastfromFuture);
    }

  return [value, updateTheState];
}
