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
import GadjetDetails from './Pages/GadjetDetails.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Reviews from './Pages/Reviews.jsx'


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
        element:<Dashboard></Dashboard>,
        loader: ()=> fetch ('../gadgets.json'),
      },
      {
        path:'/gadget/:id',
        element:<GadjetDetails></GadjetDetails>,
        loader: ()=> fetch ('../gadgets.json'),
      },
      {
        path:'reviews',
        element:<Reviews></Reviews>
        
      }
    ]
  }
])




createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
   <ToastContainer />
  </StrictMode>,
)
