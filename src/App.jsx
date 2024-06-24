import { Outlet, useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './Components/NavBar'
import Footer from './Components/Footer'

function App() {

  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  return (
    <div>
      {!isLoginPage && <Navbar />}
      <main>
        <Outlet />
      </main>
      {!isLoginPage && <Footer />}
    </div>
  )
}

export default App
