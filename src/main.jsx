import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Loader from "./Components/Common/Loader"
import Error from './Components/Common/Error.jsx';
import Task from './Components/Task/Task.js';
import Board from './Components/Board View/Board.jsx';
let router = createBrowserRouter([
  {
    path: "/",
    Component: <App/>,
    loader: <Loader/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/list",
        element:  <Task/>
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
