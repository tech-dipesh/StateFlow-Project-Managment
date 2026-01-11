
import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage.js"
export const dataContext=createContext();

  const [theme, setTheme]=useLocalStorage('theme', 'green');
  setTheme("blue")
export default function DataContextProvider({children}){
  <dataContext.Provider>
      {children}
  </dataContext.Provider>
}