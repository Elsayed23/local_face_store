import React from 'react'
import Layout from './components/layout/Layout';
import Home from './routes/Home'
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';


const App = () => {

  const router = createHashRouter([
    {
      path: '', element: <Layout />, children: [
        { path: '/', element: <Home /> },
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App;