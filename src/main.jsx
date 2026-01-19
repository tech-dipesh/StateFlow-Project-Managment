import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Loader from "./Components/Common/Loader"
import Error from './Components/Common/Error';
import List from './Components/List View/Task';
import Board from './Components/Board View/Board';
import Header from "./Components/Common/Header"
import Practice from './Components/Practice/practice.jsx';
import Keyboardshortcut from './Components/Common/keyboard-shortcut.jsx';
import Home from './Home/Home.jsx';
import Chart from './Components/Chart/Chart';
let router = createBrowserRouter([
{
    path: "/",
    element: <App/>,
    // loader: <Loader/>,
    // errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "/load",
        element:  <Loader/>
      },
      {
        path: "/list",
        element:  <List/>
      },
      {
        path: "/board",
        element: <Board/>
      },
      {
        path: "/practice",
        element: <Practice/>
      },
      {
        path: "/chart",
        element: <Chart/>
      },
      {
        path: "/shortcut",
        element: <Keyboardshortcut/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
