import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Task from './Components/List View/Task'
import Header from "./Components/Common/Header"
import { data, Outlet } from 'react-router'
import Board from './Components/Board View/Board'
import DataContextProvider, { dataContext } from './context/dataContextProvider'
import Keyword from './Home/keyword'
import Footer from "./Components/Common/Footer"
function App() {
  const [isPopup, setIsPopup]=useState(false);
  return (
    <>
    <DataContextProvider>
    <Header isPopup={isPopup} setIsPopup={setIsPopup}/>
    <Keyword isPopup={isPopup} setIsPopup={setIsPopup}/>
    <Outlet/>
    <Footer/>
    </DataContextProvider>
    </>
  )
}

export default App
