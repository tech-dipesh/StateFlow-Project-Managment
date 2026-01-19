import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './Home/Home.jsx';
import Loader from "./Components/Common/Loader"
import Error from './Components/Common/Error';
const List=lazy(()=>import("./Components/List View/Task"))
const Board=lazy(()=>import("./Components/Board View/Board"))
import Header from "./Components/Common/Header"
const Keyboardshortcut=lazy(()=>import("./Components/Common/keyboard-shortcut"))
const Chart=lazy(()=>import("./Components/Chart/Chart"))

let router = createBrowserRouter([
{
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
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
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>,
)
