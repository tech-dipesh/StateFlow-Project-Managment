import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Task from './Components/List View/Task'
import Header from "./Components/Common/Header"
import { Outlet } from 'react-router'
import Board from './Components/Board View/Board'
function App() {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default App
