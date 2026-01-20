import {  useState } from 'react'
import './App.css'
import Task from './Components/List View/Task'
import Header from "./Components/Common/Header"
import { Outlet } from 'react-router'
import Board from './Components/Board View/Board'
import DataContextProvider from './context/dataContextProvider'
import Keyword from './Home/keyword'
import Footer from "./Components/Common/Footer"
import { Analytics } from '@vercel/analytics/react';
function App() {
  const [isPopup, setIsPopup]=useState(false);
  return (
    <>
    <DataContextProvider>
    <Header isPopup={isPopup} setIsPopup={setIsPopup}/>
    <Keyword isPopup={isPopup} setIsPopup={setIsPopup}/>
    <Analytics/>
    <Outlet/>
    <Footer/>
    </DataContextProvider>
    </>
  )
}

export default App
