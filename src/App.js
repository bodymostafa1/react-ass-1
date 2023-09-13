
import React from 'react'
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Notfound from './components/Notfound/Notfound'
import Layout from './components/Layout/Layout'

export default function App() {
let routers = createHashRouter([
  {path:"/" , element:<Layout/> ,children:[
    {path:"" , element:<Home/>}
    ,{path:"About" , element:<About/>}
    ,{path:"Portfolio" , element:<Portfolio/>}
    ,{path:"Contact" , element:<Contact/>}
    ,{path:"*" , element:<Notfound/>}
  ]}
 
])
  return (
  <>
 <RouterProvider router={routers}></RouterProvider>
  </>
  )
}
