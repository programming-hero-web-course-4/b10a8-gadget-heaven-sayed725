import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/Root/Root.jsx'
import ErrorPage from './Pages/ErrorPage.jsx'
import Home from './Pages/Home.jsx'
import Statistics from './Pages/Statistics.jsx'
import Dashboard from './Pages/Dashboard.jsx'
import GadgetCards from './components/GadgetCards.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: ()=> fetch ('../categories.json'),
        children:[
          {
            path:'/',
          element:<GadgetCards></GadgetCards>,
          loader: ()=> fetch ('../gadgets.json'),
          },
          {
            path:'/category/:category',
          element:<GadgetCards></GadgetCards>,
          loader: ()=> fetch ('../gadgets.json'),
          },
        
        ],
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'/dashboard',
        element:<Dashboard></Dashboard>
      }
    ]
  }
])




createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
