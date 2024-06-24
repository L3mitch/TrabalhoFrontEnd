import { Outlet, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './Components/NavBar.jsx';
import Footer from './Components/Footer.jsx';

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  return (
    <div id="root">
      {!isLoginPage && <Navbar />}
      <main>
        <Outlet />
      </main>
      {!isLoginPage && <Footer />}
    </div>
  );
}

export default App;