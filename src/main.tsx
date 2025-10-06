import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Cyclists from "./pages/Cyclists.tsx";
import Base from "./layouts/Base.tsx";
import CyclistDetails from "./components/CyclistDetails.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Base />,
        children :[
            {
                path: "/",
                element: <App />
            },
            {
                path: "/cyclists",
                element: <Cyclists />
            },
            {
                path: "/cyclists/:id",
                element: <CyclistDetails />
            }
        ]
    }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
