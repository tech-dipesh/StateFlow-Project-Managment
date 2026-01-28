import {  useState } from 'react'
import './App.css'
import Task from './Pages/Task'
import Header from "./Common/Header"
import { Outlet } from 'react-router'
import Board from './Pages/Board'
import DataContextProvider from './context/dataContextProvider'
import Keyword from './Utils/keyword'
import Footer from "./Common/Footer"
import { Analytics } from '@vercel/analytics/react';
function App() {
  const [isPopup, setIsPopup]=useState(false);
  return (
    <>
    <DataContextProvider>
    <Header isPopup={isPopup} setIsPopup={setIsPopup}/>
    <Keyword isPopup={isPopup} setIsPopup={setIsPopup}/>
    <Analytics/>
    <div className="flex-1 pb-20">
    <Outlet/>
    </div>
    </DataContextProvider>
    <Footer/>
    </>
  )
}

export default App
