import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Product from './routes/Product.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import Login from './routes/Login.jsx'
import CadastroProd from './routes/CadastroProd.jsx'
import Home from './routes/Home.jsx'
import CadastroUser from './routes/CadastroUser.jsx'
import EditForm from './routes/EditForm.jsx'

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
        path: '/login',
        element: <Login />
      },
      {
        path: '/cadastroUser',
        element: <CadastroUser />
      },
      {
        path: '/products',
        element: <Product />
      },
      {
      
        path: '/products/edit/:id',
        element: <EditForm />
      
      },
      {
        path: '/cadastroProd',
        element: <CadastroProd />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
