import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Products from './routes/Products.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import Home from './routes/Home.jsx'
import EditForm from './routes/EditForm.jsx'
import Create from './routes/Create.jsx'
import CreateUser from './routes/CreateUser.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/createuser',
        elemente: <CreateUser/>      
      },
      {
        path: '/products',
        element: <Products />
      },
      
      {
        path: '/products/create',
        element: <Create />
      },
      {
        path: '/products/EditForm/ :id',
        element: <EditForm />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)