import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Task from './Components/List View/Task'
import Header from "./Components/Common/Header"
import { Outlet } from 'react-router'
import Board from './Components/Board View/Board'
import DataContextProvider from './context/dataContextProvider'
function App() {
  const [isPopup, setIsPopup]=useState(false);
  useEffect(()=>{
    document.addEventListener("keydown", (e)=>{
      console.log(e.key);
    })
  })

  return (
    <>
    <DataContextProvider>
    <Header isPopup={isPopup} setIsPopup={setIsPopup}/>
    <Outlet/>
    </DataContextProvider>
    </>
  )
}

export default App
