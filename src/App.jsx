import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Task from './Components/List View/Task'
import Header from "./Components/Common/Header"
import { Outlet } from 'react-router'
import Board from './Components/Board View/Board'
import DataContextProvider from './context/dataContextProvider'
function App() {
  return (
    <>
    <DataContextProvider>
    <Header/>
    <Outlet/>
    </DataContextProvider>
    </>
  )
}

export default App
