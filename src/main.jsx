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
let router = createBrowserRouter([
{
    path: "/",
    element: <App/>,
    // loader: <Loader/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/list",
        element:  <List/>
      },
      {
        path: "/board",
        element: <Board/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
