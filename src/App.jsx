import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/NavBar'
import Footer from './Components/footer'

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  )
}

export default App
