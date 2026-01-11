
import { createContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage.js"
export const dataContext=createContext();

export default function DataContextProvider({children}){
  const [tasks, setTasks]=useLocalStorage('tasks', []);
  return (
    <dataContext.Provider value={[tasks, setTasks]}>
      {children}
    </dataContext.Provider>
  )
}