// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Product from './routes/Product.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import Login from './routes/Login.jsx';
import CadastroProd from './routes/CadastroProd.jsx';
import Home from './routes/Home.jsx';
import CadastroUser from './routes/CadastroUser.jsx';
import EditProduto from './routes/EditProduto.jsx';
import Users from './routes/Users.jsx';
import EditUser from './routes/EditUser.jsx';

// Aqui é criado o roteamento das páginas
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Login />
      },
      {
        path: '/home',
        element: <Home />
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
        element: <EditProduto />
      },
      {
        path: '/users',
        element: <Users />
      },
      {
        path: '/users/edit/:id',
        element: <EditUser/>
      },
      {
        path: '/cadastroProd',
        element: <CadastroProd />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
