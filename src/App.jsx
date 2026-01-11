import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Task from './Components/Task/Task'
import Header from "./Components/Common/Header"
import { Outlet } from 'react-router'
function App() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Task/>
    </>
  )
}

export default App
