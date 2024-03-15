import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import Dashboard from './components/dashboard'
import OrdersManagement from './components/orderManagement'
import ProductsManagement from './components/productManagement'
import Footer from './components/Footer'

export default function App() {

    const router = createBrowserRouter([
        {path:'/',
        element:<Dashboard/>
        },
        {
          path:'/products',
          element:<ProductsManagement/>
        },
        {
          path:'/orders',
          element:<OrdersManagement/>
        }
      ])

  return (
    <>
    <div>
      <RouterProvider router={router}/>
      <Footer/>
    </div>
    </>
  )
}



