
import { createContext, useEffect} from "react";
import useLocalStorage from "../hooks/useLocalStorage.js"
import useUndoRedo from "../hooks/useUndoRedo.js"

export const dataContext=createContext();

export default function DataContextProvider({children}){
 const [storeTask, setStoreTask] = useLocalStorage('tasks', []);
  const { 
    present,
    past,
    future,
    updateResult, 
    undoOperation, 
    redoOperation 
  } = useUndoRedo(storeTask);

useEffect(() => {
  setStoreTask(present);
}, [present, setStoreTask]);

  return (
    <dataContext.Provider  value={{ 
      tasks: present,
      setTasks: updateResult,
      undo: undoOperation,
      redo: redoOperation,
      canUndo: past,
      canRedo: future,
    }}>
      {children}
    </dataContext.Provider>
  )
}